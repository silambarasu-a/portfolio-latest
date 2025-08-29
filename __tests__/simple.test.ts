describe('Simple test to verify Jest setup', () => {
  it('should run basic tests', () => {
    expect(2 + 2).toBe(4)
  })

  it('should handle async operations', async () => {
    const result = await Promise.resolve('success')
    expect(result).toBe('success')
  })

  it('should work with objects', () => {
    const obj = { name: 'test', value: 123 }
    expect(obj).toEqual({ name: 'test', value: 123 })
  })
})

describe('Environment setup', () => {
  it('should have access to global mocks', () => {
    expect(global.IntersectionObserver).toBeDefined()
    expect(global.ResizeObserver).toBeDefined()
  })

  it('should have window.matchMedia mocked', () => {
    expect(window.matchMedia).toBeDefined()
    const result = window.matchMedia('(min-width: 768px)')
    expect(result.matches).toBe(false)
  })
})