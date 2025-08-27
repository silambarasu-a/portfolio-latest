import * as nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
  requireTLS?: boolean;
  tls?: {
    ciphers: string;
  };
}

class EmailService {
  private transporter: nodemailer.Transporter;
  private emailTemplate: string;

  constructor() {
    const port = parseInt(process.env.SMTP_PORT || '587');
    const host = process.env.SMTP_HOST || 'smtp.gmail.com';
    
    // Auto-determine secure setting based on port if not explicitly set
    let secure: boolean;
    if (process.env.SMTP_SECURE !== undefined) {
      secure = process.env.SMTP_SECURE === 'true';
    } else {
      // Port 465 uses SSL, port 587 uses STARTTLS (secure: false)
      secure = port === 465;
    }

    const emailConfig: EmailConfig = {
      host,
      port,
      secure,
      auth: {
        user: process.env.SMTP_USER || '',
        pass: process.env.SMTP_PASS || '',
      },
      // Add additional options for better compatibility
      ...(port === 587 && { 
        requireTLS: true,
        tls: {
          ciphers: 'SSLv3'
        }
      }),
    };

    this.transporter = nodemailer.createTransport(emailConfig);
    this.emailTemplate = this.loadEmailTemplate();
  }

  private loadEmailTemplate(): string {
    try {
      const templatePath = path.join(process.cwd(), 'email-templates', 'contact-form-submission.html');
      return fs.readFileSync(templatePath, 'utf-8');
    } catch (error) {
      console.error('Failed to load email template:', error);
      return this.getFallbackTemplate();
    }
  }

  private getFallbackTemplate(): string {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>New Contact Form Submission</title>
        <style>
            body { font-family: Arial, sans-serif; background-color: #0f172a; color: #ffffff; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #7c3aed 0%, #ec4899 100%); padding: 20px; border-radius: 10px; text-align: center; }
            .content { background: #1e293b; padding: 20px; margin: 20px 0; border-radius: 10px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #a855f7; }
            .value { background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 5px; margin-top: 5px; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>New Contact Form Submission</h1>
            </div>
            <div class="content">
                <div class="field">
                    <div class="label">Name:</div>
                    <div class="value">{{name}}</div>
                </div>
                <div class="field">
                    <div class="label">Email:</div>
                    <div class="value">{{email}}</div>
                </div>
                <div class="field">
                    <div class="label">Subject:</div>
                    <div class="value">{{subject}}</div>
                </div>
                <div class="field">
                    <div class="label">Message:</div>
                    <div class="value">{{message}}</div>
                </div>
                <p><strong>Received:</strong> {{timestamp}}</p>
            </div>
        </div>
    </body>
    </html>`;
  }

  private replaceTemplateVariables(template: string, data: ContactFormData): string {
    const timestamp = new Date().toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    });

    return template
      .replace(/{{name}}/g, this.escapeHtml(data.name))
      .replace(/{{email}}/g, this.escapeHtml(data.email))
      .replace(/{{subject}}/g, this.escapeHtml(data.subject))
      .replace(/{{message}}/g, this.escapeHtml(data.message))
      .replace(/{{timestamp}}/g, timestamp);
  }

  private escapeHtml(text: string): string {
    const map: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, (m) => map[m]);
  }

  async sendContactFormNotification(formData: ContactFormData): Promise<void> {
    try {
      // Validate environment variables
      if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
        throw new Error('SMTP credentials not configured. Please set SMTP_USER and SMTP_PASS environment variables.');
      }

      if (!process.env.NOTIFICATION_EMAIL) {
        throw new Error('NOTIFICATION_EMAIL not configured. Please set the email address to receive notifications.');
      }

      const htmlContent = this.replaceTemplateVariables(this.emailTemplate, formData);

      const mailOptions = {
        from: {
          name: 'Silambarasu Portfolio',
          address: process.env.SMTP_USER,
        },
        to: process.env.NOTIFICATION_EMAIL,
        subject: `New Contact: ${formData.subject}`,
        html: htmlContent,
        text: this.generatePlainTextVersion(formData),
        replyTo: formData.email,
        // Add custom headers for better email client handling
        headers: {
          'X-Mailer': 'Silambarasu Portfolio Contact Form',
          'X-Priority': '1',
        },
      };

      const info = await this.transporter.sendMail(mailOptions);
      console.log('Contact form notification sent successfully:', info.messageId);

      // Optional: Send auto-reply to the sender
      await this.sendAutoReply(formData);
      
    } catch (error) {
      console.error('Failed to send contact form notification:', error);
      throw error;
    }
  }

  private async sendAutoReply(formData: ContactFormData): Promise<void> {
    try {
      if (!process.env.SEND_AUTO_REPLY || process.env.SEND_AUTO_REPLY !== 'true') {
        return; // Auto-reply disabled
      }

      const autoReplyContent = this.getAutoReplyTemplate(formData.name);

      const mailOptions = {
        from: {
          name: 'Silambarasu Arunkumaravel',
          address: process.env.SMTP_USER!,
        },
        to: formData.email,
        subject: `Re: ${formData.subject} - Thanks for reaching out!`,
        html: autoReplyContent,
        text: `Hi ${formData.name},\n\nThank you for reaching out through my portfolio! I've received your message and will get back to you within 24 hours.\n\nBest regards,\nSilambarasu Arunkumaravel\nFull Stack Developer`,
      };

      const info = await this.transporter.sendMail(mailOptions);
      console.log('Auto-reply sent successfully:', info.messageId);
    } catch (error) {
      console.error('Failed to send auto-reply:', error);
      // Don't throw error for auto-reply failures
    }
  }

  private getAutoReplyTemplate(name: string): string {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Thank you for reaching out!</title>
        <style>
            body { 
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
                background: linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%);
                color: #ffffff; 
                margin: 0; 
                padding: 20px;
            }
            .container { 
                max-width: 600px; 
                margin: 0 auto; 
                background: rgba(15, 23, 42, 0.95);
                border-radius: 16px;
                overflow: hidden;
                box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
            }
            .header { 
                background: linear-gradient(135deg, #7c3aed 0%, #ec4899 100%); 
                padding: 30px 24px; 
                text-align: center; 
            }
            .content { 
                padding: 30px 24px;
                line-height: 1.6;
            }
            .logo {
                width: 50px;
                height: 50px;
                background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
                border-radius: 12px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 16px;
                color: white;
                font-size: 20px;
                font-weight: bold;
            }
            .footer {
                background: rgba(15, 23, 42, 0.9);
                padding: 20px 24px;
                text-align: center;
                border-top: 1px solid rgba(255, 255, 255, 0.1);
                color: rgba(255, 255, 255, 0.7);
                font-size: 14px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <div class="logo">S</div>
                <h1 style="margin: 0; font-size: 24px;">Thanks for reaching out!</h1>
            </div>
            <div class="content">
                <p>Hi <strong>${this.escapeHtml(name)}</strong>,</p>
                <p>Thank you for reaching out through my portfolio! I've received your message and truly appreciate you taking the time to connect.</p>
                <p>I typically respond within <strong>24 hours</strong> and am excited to discuss your project or inquiry further.</p>
                <p>In the meantime, feel free to check out my latest work and connect with me on other platforms.</p>
                <p>Looking forward to our conversation!</p>
                <p style="margin-top: 30px;">
                    Best regards,<br>
                    <strong>Silambarasu Arunkumaravel</strong><br>
                    <span style="color: rgba(255, 255, 255, 0.8);">Full Stack Developer at Starlight Music</span>
                </p>
            </div>
            <div class="footer">
                <p>This is an automated response. Please don't reply to this email.</p>
                <p>Visit my portfolio: <a href="https://silambarasu.dev" style="color: #a855f7;">silambarasu.dev</a></p>
            </div>
        </div>
    </body>
    </html>`;
  }

  private generatePlainTextVersion(formData: ContactFormData): string {
    const timestamp = new Date().toLocaleString();
    return `
New Contact Form Submission

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

Received: ${timestamp}
    `.trim();
  }

  async verifyConnection(): Promise<boolean> {
    try {
      await this.transporter.verify();
      console.log('SMTP connection verified successfully');
      return true;
    } catch (error) {
      console.error('SMTP connection failed:', error);
      return false;
    }
  }
}

// Export a singleton instance
export const emailService = new EmailService();
export default emailService;