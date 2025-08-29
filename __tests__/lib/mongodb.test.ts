import mongoose from 'mongoose'

// Mock mongoose
const mockConnect = jest.fn()

jest.mock('mongoose', () => ({
  connect: mockConnect,
}))


// Mock process.env
const originalEnv = process.env

describe('MongoDB Connection', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    jest.resetModules()
    // Reset global mongoose cache
    delete (global as Record<string, unknown>).mongoose
    // Set default env
    process.env.MONGODB_URI = 'mongodb://localhost:27017/test'
  })

  afterEach(() => {
    process.env = originalEnv
  })

  it('throws error when MONGODB_URI is not defined', async () => {
    // Remove MONGODB_URI
    const env = { ...process.env }
    delete env.MONGODB_URI
    process.env = env

    // This should throw during module import
    await expect(async () => {
      await import('@/lib/mongodb')
    }).rejects.toThrow('Please define the MONGODB_URI environment variable inside .env.local')
    
    // Restore env
    process.env = originalEnv
  })

  it('connects to MongoDB when MONGODB_URI is provided', async () => {
    const mockConnection = { connection: 'test' }
    mockConnect.mockResolvedValue(mockConnection as unknown as typeof mongoose)

    const { default: connectDB } = await import('@/lib/mongodb')
    const connection = await connectDB()

    expect(mockConnect).toHaveBeenCalledWith(
      'mongodb://localhost:27017/test',
      { bufferCommands: false }
    )
    expect(connection).toBe(mockConnection)
  })

  it('handles connection errors properly', async () => {
    const connectionError = new Error('Connection failed')
    mockConnect.mockRejectedValue(connectionError)

    const { default: connectDB } = await import('@/lib/mongodb')
    await expect(connectDB()).rejects.toThrow('Connection failed')
  })

  it('module exports a function', async () => {
    mockConnect.mockResolvedValue({} as typeof mongoose)
    
    const { default: connectDB } = await import('@/lib/mongodb')
    expect(typeof connectDB).toBe('function')
  })
})