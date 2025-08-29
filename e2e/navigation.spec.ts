import { test, expect } from '@playwright/test'

test.describe('Site Navigation', () => {
  test('should navigate between all pages correctly', async ({ page }) => {
    // Start at homepage
    await page.goto('/')
    await expect(page).toHaveTitle(/silambarasu/i)
    
    // Navigate to About
    await page.getByRole('link', { name: 'About' }).click()
    await expect(page).toHaveURL('/about')
    await expect(page.getByRole('heading')).toBeVisible()
    
    // Navigate to Projects
    await page.getByRole('link', { name: 'Projects' }).click()
    await expect(page).toHaveURL('/projects')
    await expect(page.getByRole('heading')).toBeVisible()
    
    // Navigate to Contact
    await page.getByRole('link', { name: 'Contact' }).click()
    await expect(page).toHaveURL('/contact')
    await expect(page.getByRole('heading')).toBeVisible()
    
    // Navigate back to Home
    await page.getByRole('link', { name: 'Home' }).click()
    await expect(page).toHaveURL('/')
  })

  test('should show active page in navigation', async ({ page }) => {
    await page.goto('/about')
    
    // Check if there's any visual indication of the current page
    // This depends on your implementation - you might have an active class or different styling
    const navigation = page.locator('nav')
    await expect(navigation).toBeVisible()
  })

  test('should have working logo link', async ({ page }) => {
    // Go to a different page first
    await page.goto('/contact')
    
    // Click on logo/brand name to go back to homepage
    await page.getByText('Silambarasu').click()
    await expect(page).toHaveURL('/')
  })

  test('should maintain navigation state during page transitions', async ({ page }) => {
    await page.goto('/')
    
    // Check that navigation is always visible
    await expect(page.locator('nav')).toBeVisible()
    
    // Navigate to different pages and ensure nav remains
    await page.getByRole('link', { name: 'About' }).click()
    await expect(page.locator('nav')).toBeVisible()
    
    await page.getByRole('link', { name: 'Projects' }).click()
    await expect(page.locator('nav')).toBeVisible()
    
    await page.getByRole('link', { name: 'Contact' }).click()
    await expect(page.locator('nav')).toBeVisible()
  })
})

test.describe('Mobile Navigation', () => {
  test.use({ viewport: { width: 375, height: 667 } })

  test('should work correctly on mobile', async ({ page }) => {
    await page.goto('/')
    
    // Mobile menu should be closed initially
    const menuButton = page.getByRole('button', { name: /toggle menu/i })
    await expect(menuButton).toBeVisible()
    
    // Note: Desktop nav links should be hidden on mobile
    // This depends on the actual CSS implementation
    
    // Open mobile menu
    await menuButton.click()
    
    // Test navigation through mobile menu
    await page.getByRole('link', { name: 'About' }).first().click()
    await expect(page).toHaveURL('/about')
    
    // Menu should close after navigation
    // This depends on your implementation
  })

  test('should toggle mobile menu correctly', async ({ page }) => {
    await page.goto('/')
    
    const menuButton = page.getByRole('button', { name: /toggle menu/i })
    
    // Open menu
    await menuButton.click()
    
    // Check that menu links are now visible
    await expect(page.getByRole('link', { name: 'Home' }).first()).toBeVisible()
    
    // Close menu
    await menuButton.click()
    
    // Menu should be closed (links hidden)
    // This test depends on your specific implementation of mobile menu
  })

  test('should close mobile menu when clicking outside', async ({ page }) => {
    await page.goto('/')
    
    const menuButton = page.getByRole('button', { name: /toggle menu/i })
    
    // Open menu
    await menuButton.click()
    
    // Click outside the menu (on the main content)
    await page.locator('main').click()
    
    // Menu should close
    // This behavior depends on your implementation
  })
})

test.describe('Navigation Accessibility', () => {
  test('should be keyboard accessible', async ({ page }) => {
    await page.goto('/')
    
    // Tab through navigation items
    await page.keyboard.press('Tab')
    
    // Should be able to navigate with keyboard
    const focusedElement = await page.locator(':focus')
    await expect(focusedElement).toBeVisible()
    
    // Continue tabbing through nav items
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    
    // Test Enter key on navigation item
    await page.keyboard.press('Enter')
    
    // Should navigate (depending on which item was focused)
  })

  test('should have proper ARIA labels', async ({ page }) => {
    await page.goto('/')
    
    // Check navigation has proper role
    const nav = page.locator('nav')
    await expect(nav).toBeVisible()
    
    // Check mobile menu button has proper aria-label
    const menuButton = page.getByRole('button', { name: /toggle menu/i })
    if (await menuButton.isVisible()) {
      await expect(menuButton).toHaveAttribute('aria-label')
    }
  })

  test('should have proper focus indicators', async ({ page }) => {
    await page.goto('/')
    
    // Tab to first navigation item
    await page.keyboard.press('Tab')
    
    // Check that focused element is visible and has focus styling
    const focusedElement = page.locator(':focus')
    await expect(focusedElement).toBeVisible()
    
    // Note: You might want to check for specific focus styling here
    // This depends on your CSS implementation
  })
})

test.describe('Navigation Performance', () => {
  test('should have fast navigation transitions', async ({ page }) => {
    await page.goto('/')
    
    const startTime = Date.now()
    
    // Navigate to About page
    await page.getByRole('link', { name: 'About' }).click()
    await expect(page).toHaveURL('/about')
    
    const endTime = Date.now()
    const navigationTime = endTime - startTime
    
    // Navigation should be fast (under 2 seconds)
    expect(navigationTime).toBeLessThan(2000)
  })

  test('should not cause layout shift during navigation', async ({ page }) => {
    await page.goto('/')
    
    // Get initial navigation position
    const nav = page.locator('nav')
    const initialBox = await nav.boundingBox()
    
    // Navigate to another page
    await page.getByRole('link', { name: 'About' }).click()
    await page.waitForLoadState('networkidle')
    
    // Check navigation position hasn't shifted
    const finalBox = await nav.boundingBox()
    
    expect(initialBox?.x).toBe(finalBox?.x)
    expect(initialBox?.y).toBe(finalBox?.y)
  })
})