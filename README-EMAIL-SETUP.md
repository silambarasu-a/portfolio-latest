# Email Setup Guide for Portfolio Contact Form

This guide will help you configure SMTP email notifications for your portfolio contact form.

## 📧 Quick Setup

1. **Copy environment variables:**
   ```bash
   cp .env.example .env.local
   ```

2. **Configure your email settings in `.env.local`:**
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   NOTIFICATION_EMAIL=your-email@gmail.com
   SEND_AUTO_REPLY=true
   ```

## 🔧 SMTP Provider Configuration

### Gmail (Recommended)
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
   - Use this password in `SMTP_PASS`

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
# SMTP_SECURE=false (auto-detected for port 587)
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-16-character-app-password
```

**Alternative Gmail SSL Setup (Port 465):**
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
# SMTP_SECURE=true (auto-detected for port 465)
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-16-character-app-password
```

### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
```

### Yahoo Mail
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@yahoo.com
SMTP_PASS=your-app-password
```

### Custom SMTP Server
```env
SMTP_HOST=your-smtp-server.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-username
SMTP_PASS=your-password
```

## 📨 Email Features

### Contact Form Notifications
- **Styled HTML email** matching your portfolio design
- **Plain text fallback** for compatibility
- **Auto-reply option** to acknowledge submissions
- **Error handling** that doesn't break form submission

### Email Template Features
- 🎨 **Matches portfolio design** - Purple gradients, dark theme
- 📱 **Mobile responsive** - Looks great on all devices
- 🔒 **Secure** - HTML escaping prevents XSS
- ⚡ **Fast** - Non-blocking email sending
- 🎯 **Professional** - Branded with your logo and signature

## 🚀 Testing Your Setup

1. **Test SMTP connection:**
   ```bash
   npm run dev
   ```
   Check console for "SMTP connection verified successfully"

2. **Test contact form:**
   - Fill out your contact form
   - Check your `NOTIFICATION_EMAIL` for the notification
   - Check the sender's email for auto-reply (if enabled)

## 🔧 Configuration Options

### Required Variables
| Variable | Description | Example |
|----------|-------------|---------|
| `SMTP_HOST` | SMTP server hostname | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP server port | `587` |
| `SMTP_USER` | Your email address | `you@gmail.com` |
| `SMTP_PASS` | Your email password/app password | `app-password` |
| `NOTIFICATION_EMAIL` | Where to send notifications | `you@gmail.com` |

### Optional Variables
| Variable | Description | Default | Options |
|----------|-------------|---------|---------|
| `SMTP_SECURE` | Use SSL/TLS | `false` | `true`/`false` |
| `SEND_AUTO_REPLY` | Send auto-reply to sender | `false` | `true`/`false` |

## 🛠 Troubleshooting

### Common Issues

**❌ SMTP Authentication Failed**
- Verify username/password
- For Gmail: Use App Password, not regular password
- Check 2FA is enabled for Gmail

**❌ SSL routines: wrong version number**
- Remove or don't set `SMTP_SECURE` (auto-detected based on port)
- Port 587: Uses STARTTLS (secure: false)
- Port 465: Uses SSL (secure: true)
- Try port 465 if 587 doesn't work

**❌ Connection Refused**
- Check SMTP_HOST and SMTP_PORT
- Verify your internet connection
- Some ISPs block SMTP ports (try port 465 instead of 587)

**❌ Email Not Received**
- Check spam/junk folder
- Verify NOTIFICATION_EMAIL is correct
- Check email service logs

**❌ Template Not Loading**
- Ensure `email-templates/contact-form-submission.html` exists
- Check file permissions
- Falls back to simple template if file missing

### Debug Mode
To see detailed SMTP logs, temporarily add to your email service:

```typescript
// In lib/emailService.ts constructor
this.transporter = nodemailer.createTransporter({
  ...emailConfig,
  debug: true,
  logger: true
});
```

## 🔒 Security Best Practices

1. **Never commit `.env.local`** - Already in `.gitignore`
2. **Use App Passwords** - Don't use your main email password
3. **Rotate credentials** - Change passwords periodically
4. **Monitor usage** - Check for unusual email activity
5. **Use environment-specific configs** - Different settings for dev/prod

## 📈 Production Deployment

### Vercel
Add environment variables in your Vercel dashboard:
- Project Settings → Environment Variables
- Add all SMTP variables from your `.env.local`

### Other Platforms
Ensure all environment variables are set in your hosting platform's configuration.

## 🎨 Customizing Email Templates

The email template is located at:
```
email-templates/contact-form-submission.html
```

**Template Variables:**
- `{{name}}` - Sender's name
- `{{email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{timestamp}}` - When received

**Styling:**
- Matches your portfolio's purple-pink gradient theme
- Uses CSS that works across email clients
- Mobile-responsive design
- Includes your branding

## 📞 Support

If you encounter issues:
1. Check the troubleshooting section above
2. Verify all environment variables are set correctly
3. Test with a simple SMTP provider like Gmail first
4. Check browser console and server logs for errors

The email functionality is designed to be robust - if emails fail to send, your contact form will still work and save submissions to the database.