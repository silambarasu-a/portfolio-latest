import { NextRequest } from 'next/server'

// Mock the emailService
const mockSendContactFormNotification = jest.fn()
jest.mock('@/lib/emailService', () => ({
  __esModule: true,
  default: {
    sendContactFormNotification: mockSendContactFormNotification,
  },
  emailService: {
    sendContactFormNotification: mockSendContactFormNotification,
  },
}))

// Mock the Contact model
const mockSave = jest.fn()
const mockContact = jest.fn().mockImplementation((data) => ({
  ...data,
  save: mockSave,
}))

jest.mock('@/models/Contact', () => ({
  __esModule: true,
  default: mockContact,
}))

// Mock MongoDB connection
jest.mock('@/lib/mongodb', () => ({
  __esModule: true,
  default: jest.fn().mockResolvedValue({}),
}))

describe('/api/contact', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    mockSave.mockResolvedValue({
      _id: 'mock-id',
      name: 'John Doe',
      email: 'john.doe@example.com',
      subject: 'Test Subject',
      message: 'This is a test message',
      createdAt: new Date(),
    })
  })

  const validFormData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    subject: 'Test Subject',
    message: 'This is a test message',
  }

  const createRequest = (data: Record<string, string>) => {
    return new NextRequest('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  }

  it('successfully processes valid contact form submission', async () => {
    const { POST } = await import('@/app/api/contact/route')
    const request = createRequest(validFormData)

    const response = await POST(request)
    const responseData = await response.json()

    expect(response.status).toBe(201)
    expect(responseData).toEqual({
      message: 'Thank you for your message! I will get back to you soon.',
      success: true,
    })

    expect(mockContact).toHaveBeenCalledWith(validFormData)
    expect(mockSendContactFormNotification).toHaveBeenCalledWith(validFormData)
  })

  it('returns 400 for missing required fields', async () => {
    const { POST } = await import('@/app/api/contact/route')
    const testData = { ...validFormData, name: '' }
    const request = createRequest(testData)
    const response = await POST(request)

    expect(response.status).toBe(400)
  })

  it('handles database save errors gracefully', async () => {
    const { POST } = await import('@/app/api/contact/route')
    mockSave.mockRejectedValue(new Error('Database error'))

    const request = createRequest(validFormData)
    const response = await POST(request)

    expect(response.status).toBe(500)
  })

  it('continues processing even if email fails', async () => {
    const { POST } = await import('@/app/api/contact/route')
    mockSendContactFormNotification.mockRejectedValue(new Error('Email failed'))

    const request = createRequest(validFormData)
    const response = await POST(request)

    // Should still return success since database save worked
    expect(response.status).toBe(201)
    expect(mockContact).toHaveBeenCalled()
  })

  it('validates email format correctly', async () => {
    const { POST } = await import('@/app/api/contact/route')
    const invalidEmailData = {
      ...validFormData,
      email: 'invalid-email',
    }

    const request = createRequest(invalidEmailData)
    const response = await POST(request)
    
    expect(response.status).toBe(400)
  })

  it('accepts valid email formats', async () => {
    const { POST } = await import('@/app/api/contact/route')
    const request = createRequest(validFormData)
    const response = await POST(request)
    
    expect(response.status).toBe(201)
  })
})