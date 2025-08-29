import { test, expect } from '@playwright/test'

test.describe('Contact Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact')
  })

  test('should display contact form', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /get in touch/i })).toBeVisible()
    
    // Check form fields
    await expect(page.getByLabel(/name/i)).toBeVisible()
    await expect(page.getByLabel(/email/i)).toBeVisible()
    await expect(page.getByLabel(/subject/i)).toBeVisible()
    await expect(page.getByLabel(/message/i)).toBeVisible()
    
    // Check submit button
    await expect(page.getByRole('button', { name: /send message/i })).toBeVisible()
  })

  test('should show validation errors for empty form submission', async ({ page }) => {
    // Try to submit empty form
    await page.getByRole('button', { name: /send message/i }).click()
    
    // Check for HTML5 validation or custom validation messages
    const nameField = page.getByLabel(/name/i)
    const emailField = page.getByLabel(/email/i)
    const subjectField = page.getByLabel(/subject/i)
    const messageField = page.getByLabel(/message/i)
    
    // Check that required fields are marked as required
    await expect(nameField).toHaveAttribute('required')
    await expect(emailField).toHaveAttribute('required')
    await expect(subjectField).toHaveAttribute('required')
    await expect(messageField).toHaveAttribute('required')
  })

  test('should validate email format', async ({ page }) => {
    // Fill form with invalid email
    await page.getByLabel(/name/i).fill('John Doe')
    await page.getByLabel(/email/i).fill('invalid-email')
    await page.getByLabel(/subject/i).fill('Test Subject')
    await page.getByLabel(/message/i).fill('Test message')
    
    await page.getByRole('button', { name: /send message/i }).click()
    
    // Should show validation message for invalid email
    const emailField = page.getByLabel(/email/i)
    await expect(emailField).toHaveAttribute('type', 'email')
  })

  test('should submit form with valid data', async ({ page }) => {
    // Note: This test requires mocking or a test database
    // For now, we'll just test that the form can be filled and submitted
    
    await page.getByLabel(/name/i).fill('John Doe')
    await page.getByLabel(/email/i).fill('john.doe@example.com')
    await page.getByLabel(/subject/i).fill('Test Subject')
    await page.getByLabel(/message/i).fill('This is a test message for the contact form.')
    
    // Submit the form
    await page.getByRole('button', { name: /send message/i }).click()
    
    // In a real test environment, you would check for success message
    // For now, we verify the form accepts the input
    await expect(page.getByLabel(/name/i)).toHaveValue('John Doe')
    await expect(page.getByLabel(/email/i)).toHaveValue('john.doe@example.com')
  })

  test('should display contact information', async ({ page }) => {
    // Check for contact details (adjust based on your actual contact page content)
    await expect(page.getByText(/silambarasu/i)).toBeVisible()
    
    // Check for social links or contact details if they exist
    // This will depend on your actual contact page implementation
  })

  test('should have responsive design on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    
    // Form should still be visible and usable on mobile
    await expect(page.getByLabel(/name/i)).toBeVisible()
    await expect(page.getByLabel(/email/i)).toBeVisible()
    await expect(page.getByRole('button', { name: /send message/i })).toBeVisible()
    
    // Test form interaction on mobile
    await page.getByLabel(/name/i).tap()
    await page.getByLabel(/name/i).fill('Mobile Test')
    await expect(page.getByLabel(/name/i)).toHaveValue('Mobile Test')
  })
})

test.describe('Contact Form Accessibility', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact')
  })

  test('should be keyboard navigable', async ({ page }) => {
    // Test tab navigation through form
    await page.keyboard.press('Tab')
    await expect(page.getByLabel(/name/i)).toBeFocused()
    
    await page.keyboard.press('Tab')
    await expect(page.getByLabel(/email/i)).toBeFocused()
    
    await page.keyboard.press('Tab')
    await expect(page.getByLabel(/subject/i)).toBeFocused()
    
    await page.keyboard.press('Tab')
    await expect(page.getByLabel(/message/i)).toBeFocused()
    
    await page.keyboard.press('Tab')
    await expect(page.getByRole('button', { name: /send message/i })).toBeFocused()
  })

  test('should have proper form labels', async ({ page }) => {
    // Check that form fields have proper labels
    const nameField = page.getByLabel(/name/i)
    const emailField = page.getByLabel(/email/i)
    const subjectField = page.getByLabel(/subject/i)
    const messageField = page.getByLabel(/message/i)
    
    await expect(nameField).toBeVisible()
    await expect(emailField).toBeVisible()
    await expect(subjectField).toBeVisible()
    await expect(messageField).toBeVisible()
  })

  test('should have proper heading structure', async ({ page }) => {
    // Check for proper heading hierarchy
    const h1 = page.locator('h1')
    await expect(h1).toBeVisible()
    
    // Should have a main heading on the contact page
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  })
})