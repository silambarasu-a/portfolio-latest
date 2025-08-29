import '@testing-library/jest-dom'

// Polyfill for Next.js server components
// Use undici's fetch implementation that comes with Node 18+
if (!global.Request) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { Request, Response, Headers } = require('undici')
    global.Request = Request
    global.Response = Response  
    global.Headers = Headers
  } catch {
    // Fallback if undici is not available
    global.Request = class MockRequest {
      constructor(url, options = {}) {
        this._url = url
        this.method = options.method || 'GET'
        this.headers = new global.Headers(options.headers)
        this.body = options.body
      }
      
      get url() {
        return this._url
      }
      
      async json() {
        return this.body ? JSON.parse(this.body) : {}
      }
    }
    global.Response = class MockResponse {
      constructor(body, init = {}) {
        this.body = body
        this.status = init.status || 200
        this.ok = this.status >= 200 && this.status < 300
        this.headers = new global.Headers(init?.headers)
        // Add getSetCookie for NextResponse compatibility
        this.getSetCookie = () => []
      }
      static json(data, init = {}) {
        return new global.Response(JSON.stringify(data), {
          ...init,
          headers: {
            'Content-Type': 'application/json',
            ...init?.headers
          }
        })
      }
      async json() {
        return JSON.parse(this.body)
      }
    }
    global.Headers = class MockHeaders extends Map {
      constructor(init) {
        super()
        if (init) {
          if (init instanceof Array) {
            for (const [key, value] of init) {
              this.set(key.toLowerCase(), value)
            }
          } else if (typeof init === 'object') {
            for (const [key, value] of Object.entries(init)) {
              this.set(key.toLowerCase(), value)
            }
          }
        }
      }
      
      entries() {
        return super.entries()
      }
      
      keys() {
        return super.keys()
      }
      
      values() {
        return super.values()
      }
      
      append(name, value) {
        this.set(name.toLowerCase(), value)
      }
      
      get(name) {
        return super.get(name.toLowerCase())
      }
      
      set(name, value) {
        return super.set(name.toLowerCase(), String(value))
      }
      
      has(name) {
        return super.has(name.toLowerCase())
      }
      
      delete(name) {
        return super.delete(name.toLowerCase())
      }
    }
  }
}

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
}

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor(callback) {
    this.callback = callback
  }
  observe() {}
  unobserve() {}
  disconnect() {}
}


// Setup test environment
beforeEach(() => {
  // Clear all mocks before each test
  jest.clearAllMocks()
})