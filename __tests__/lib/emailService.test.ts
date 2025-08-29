// Mock nodemailer
const mockTransporter = {
  sendMail: jest.fn(),
  verify: jest.fn(),
}

const mockCreateTransport = jest.fn(() => mockTransporter)

jest.mock('nodemailer', () => ({
  createTransport: mockCreateTransport,
}))

// Mock fs
const mockReadFileSync = jest.fn()
jest.mock('fs', () => ({
  readFileSync: mockReadFileSync,
}))

// Mock path
const mockJoin = jest.fn()
jest.mock('path', () => ({
  join: mockJoin,
}))

const originalEnv = process.env

describe('EmailService', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    jest.resetModules()
    
    // Set up environment variables
    process.env = {
      ...originalEnv,
      SMTP_HOST: 'smtp.gmail.com',
      SMTP_PORT: '587',
      SMTP_USER: 'test@gmail.com',
      SMTP_PASS: 'testpass',
      NOTIFICATION_EMAIL: 'notify@example.com',
      SEND_AUTO_REPLY: 'true',
    }
    
    // Mock template loading
    mockJoin.mockReturnValue('/mock/path/template.html')
    mockReadFileSync.mockReturnValue('<html>{{name}} {{email}} {{subject}} {{message}} {{timestamp}}</html>')
  })

  afterEach(() => {
    process.env = originalEnv
  })

  it('initializes with correct SMTP configuration', async () => {
    await import('@/lib/emailService')

    expect(mockCreateTransport).toHaveBeenCalledWith({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'test@gmail.com',
        pass: 'testpass',
      },
      requireTLS: true,
      tls: {
        ciphers: 'SSLv3',
      },
    })
  })

  it('uses SSL for port 465', async () => {
    process.env.SMTP_PORT = '465'
    
    await import('@/lib/emailService')

    expect(mockCreateTransport).toHaveBeenCalledWith(
      expect.objectContaining({
        port: 465,
        secure: true,
      })
    )
  })

  it('sends contact form notification successfully', async () => {
    const { emailService } = await import('@/lib/emailService')
    
    const formData = {
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Test Subject',
      message: 'Test message',
    }

    mockTransporter.sendMail.mockResolvedValue({ messageId: 'test-id' })

    await emailService.sendContactFormNotification(formData)

    expect(mockTransporter.sendMail).toHaveBeenCalledWith(
      expect.objectContaining({
        from: {
          name: 'Silambarasu Portfolio',
          address: 'test@gmail.com',
        },
        to: 'notify@example.com',
        subject: 'New Contact: Test Subject',
        replyTo: 'john@example.com',
      })
    )
  })

  it('throws error when SMTP credentials are missing', async () => {
    delete process.env.SMTP_USER
    delete process.env.SMTP_PASS

    const { emailService } = await import('@/lib/emailService')
    
    const formData = {
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Test Subject',
      message: 'Test message',
    }

    await expect(emailService.sendContactFormNotification(formData)).rejects.toThrow(
      'SMTP credentials not configured'
    )
  })

  it('verifies SMTP connection successfully', async () => {
    const { emailService } = await import('@/lib/emailService')
    
    mockTransporter.verify.mockResolvedValue(true)

    const result = await emailService.verifyConnection()

    expect(result).toBe(true)
    expect(mockTransporter.verify).toHaveBeenCalled()
  })

  it('handles SMTP connection verification failure', async () => {
    const { emailService } = await import('@/lib/emailService')
    
    mockTransporter.verify.mockRejectedValue(new Error('Connection failed'))

    const result = await emailService.verifyConnection()

    expect(result).toBe(false)
  })
})