# Testing Guide

This document explains how to run and write tests for the portfolio website.

## Test Structure

The project includes several types of tests:

- **Unit Tests** - Test individual components and utility functions
- **Integration Tests** - Test API endpoints and service integrations
- **End-to-End (E2E) Tests** - Test complete user workflows

## Running Tests

### Unit and Integration Tests (Jest)

```bash
# Run all Jest tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

### End-to-End Tests (Playwright)

```bash
# Run all E2E tests
npm run test:e2e

# Run E2E tests with UI mode
npm run test:e2e:ui

# Install Playwright browsers (first time only)
npx playwright install
```

### Run All Tests

```bash
# Run both Jest and Playwright tests
npm run test:all
```

## Test Files Structure

```
__tests__/
├── components/
│   ├── Navigation.test.tsx
│   └── AnimationProvider.test.tsx
├── lib/
│   ├── mongodb.test.ts
│   └── emailService.test.ts
└── app/
    └── api/
        └── contact.test.ts

e2e/
├── homepage.spec.ts
├── contact.spec.ts
└── navigation.spec.ts
```

## Writing Tests

### Unit Tests (Jest + Testing Library)

```typescript
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MyComponent from '@/components/MyComponent'

describe('MyComponent', () => {
  it('should render correctly', () => {
    render(<MyComponent />)
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })

  it('should handle user interaction', async () => {
    const user = userEvent.setup()
    render(<MyComponent />)
    
    await user.click(screen.getByRole('button'))
    expect(screen.getByText('Clicked')).toBeInTheDocument()
  })
})
```

### API Tests

```typescript
import { POST } from '@/app/api/myapi/route'
import { NextRequest } from 'next/server'

describe('/api/myapi', () => {
  it('should handle POST request', async () => {
    const request = new NextRequest('http://localhost:3000/api/myapi', {
      method: 'POST',
      body: JSON.stringify({ data: 'test' }),
    })

    const response = await POST(request)
    expect(response.status).toBe(200)
  })
})
```

### E2E Tests (Playwright)

```typescript
import { test, expect } from '@playwright/test'

test('should complete user workflow', async ({ page }) => {
  await page.goto('/')
  
  await page.getByRole('button', { name: 'Click me' }).click()
  await expect(page.getByText('Success')).toBeVisible()
})
```

## Test Configuration

### Jest Configuration (`jest.config.js`)

- Uses Next.js Jest configuration
- Includes setup file for Testing Library
- Mocks for Next.js and Framer Motion
- Path mapping for `@/` imports

### Playwright Configuration (`playwright.config.ts`)

- Tests run against local dev server
- Multiple browser support (Chrome, Firefox, Safari)
- Mobile device testing
- Screenshot on failure

## Mocking

### External Services

```typescript
// Mock email service
jest.mock('@/lib/emailService', () => ({
  emailService: {
    sendContactFormNotification: jest.fn(),
  },
}))

// Mock database
jest.mock('@/lib/mongodb', () => ({
  __esModule: true,
  default: jest.fn().mockResolvedValue({}),
}))
```

### Next.js Features

```typescript
// Mock Next.js navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
  usePathname: () => '/',
}))
```

## Test Data

### Test Environment Variables

Create `.env.test.local` for test-specific environment variables:

```env
MONGODB_URI=mongodb://localhost:27017/portfolio_test
SMTP_HOST=smtp.gmail.com
SMTP_USER=test@example.com
SMTP_PASS=testpass
NOTIFICATION_EMAIL=test@example.com
```

### Mock Data

```typescript
const mockContactData = {
  name: 'John Doe',
  email: 'john@example.com',
  subject: 'Test Subject',
  message: 'Test message',
}
```

## Continuous Integration

### GitHub Actions Example

```yaml
name: Tests
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - run: npm ci
      - run: npm run test:coverage
      - run: npx playwright install
      - run: npm run test:e2e
```

## Coverage Reports

Jest generates coverage reports in the `coverage/` directory:

- `coverage/lcov-report/index.html` - HTML coverage report
- `coverage/coverage-final.json` - JSON coverage data

### Coverage Targets

- **Statements**: > 80%
- **Branches**: > 75%
- **Functions**: > 80%
- **Lines**: > 80%

## Test Best Practices

### Unit Tests

1. **Test behavior, not implementation**
2. **Use descriptive test names**
3. **Arrange, Act, Assert pattern**
4. **Mock external dependencies**
5. **Test edge cases and error conditions**

### Integration Tests

1. **Test API contracts**
2. **Validate request/response formats**
3. **Test error handling**
4. **Mock external services**
5. **Test database interactions**

### E2E Tests

1. **Test critical user journeys**
2. **Use Page Object Model for complex pages**
3. **Test across different browsers/devices**
4. **Keep tests independent**
5. **Use data-testid for reliable selectors**

## Debugging Tests

### Jest Tests

```bash
# Run specific test file
npm test -- Navigation.test.tsx

# Run tests matching pattern
npm test -- --testNamePattern="should render"

# Run in debug mode
node --inspect-brk node_modules/.bin/jest --runInBand
```

### Playwright Tests

```bash
# Run specific test file
npm run test:e2e -- homepage.spec.ts

# Run with headed browser
npm run test:e2e -- --headed

# Debug specific test
npm run test:e2e -- --debug
```

## Common Issues

### Test Timeouts

Increase timeout in Playwright:

```typescript
test('long running test', async ({ page }) => {
  test.setTimeout(60000) // 60 seconds
  // ... test code
})
```

### Flaky Tests

1. Add proper waits: `await page.waitForLoadState('networkidle')`
2. Use `toBeVisible()` instead of `toBeInTheDocument()` for E2E
3. Avoid hard-coded delays
4. Use retry mechanisms

### Mock Issues

1. Clear mocks between tests: `jest.clearAllMocks()`
2. Reset modules if needed: `jest.resetModules()`
3. Ensure mocks are properly typed

## Performance Testing

### Lighthouse CI

```bash
npm install -g @lhci/cli
lhci autorun
```

### Load Testing

Use tools like Artillery or k6 for API load testing:

```javascript
// artillery-config.yml
config:
  target: 'http://localhost:3000'
  phases:
    - duration: 60
      arrivalRate: 10

scenarios:
  - name: 'Contact form submission'
    requests:
      - post:
          url: '/api/contact'
          json:
            name: 'Test User'
            email: 'test@example.com'
            subject: 'Load test'
            message: 'Testing load'
```

## Accessibility Testing

### Automated A11y Testing

```typescript
import { injectAxe, checkA11y } from 'axe-playwright'

test('should not have accessibility violations', async ({ page }) => {
  await page.goto('/')
  await injectAxe(page)
  await checkA11y(page)
})
```

### Manual A11y Testing

1. Test keyboard navigation
2. Test with screen readers
3. Check color contrast
4. Verify ARIA labels
5. Test with high contrast mode

## Reporting

### Test Reports

- Jest: Coverage reports in `coverage/` directory
- Playwright: HTML report in `playwright-report/`
- GitHub Actions: Test results in PR comments

### Metrics to Track

- Test coverage percentage
- Test execution time
- Flaky test rate
- Performance metrics (Core Web Vitals)

## Resources

- [Jest Documentation](https://jestjs.io/)
- [Testing Library](https://testing-library.com/)
- [Playwright Documentation](https://playwright.dev/)
- [Next.js Testing](https://nextjs.org/docs/testing)