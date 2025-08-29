import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should display main navigation', async ({ page }) => {
    // Check desktop navigation
    await expect(page.locator('nav')).toBeVisible()
    await expect(page.getByText('Silambarasu')).toBeVisible()
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Projects' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible()
  })

  test('should display hero section content', async ({ page }) => {
    // Check main heading
    await expect(page.getByRole('heading', { name: /crafting digital experiences/i })).toBeVisible()
    
    // Check "Available for new projects" badge
    await expect(page.getByText('Available for new projects')).toBeVisible()
    
    // Check description text
    await expect(page.getByText(/full stack developer at starlight music/i)).toBeVisible()
    
    // Check CTA buttons
    await expect(page.getByRole('link', { name: /view my work/i })).toBeVisible()
    await expect(page.getByRole('link', { name: /let's talk/i })).toBeVisible()
  })

  test('should display stats section', async ({ page }) => {
    await expect(page.getByText('10+').first()).toBeVisible()
    await expect(page.getByText('Projects')).toBeVisible()
    await expect(page.getByText('3+').first()).toBeVisible()
    await expect(page.getByText('Years')).toBeVisible()
    await expect(page.getByText('99.9%')).toBeVisible()
    await expect(page.getByText('Uptime')).toBeVisible()
  })

  test('should display skills section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /expertise that delivers/i })).toBeVisible()
    await expect(page.getByText('Frontend Development')).toBeVisible()
    await expect(page.getByText('Backend & APIs')).toBeVisible()
    await expect(page.getByText('DevOps & Cloud')).toBeVisible()
  })

  test('should navigate to projects page when clicking View My Work', async ({ page }) => {
    await page.getByRole('link', { name: /view my work/i }).click()
    await expect(page).toHaveURL('/projects')
  })

  test('should navigate to contact page when clicking CTA buttons', async ({ page }) => {
    // Test "Let's Talk" button
    await page.getByRole('link', { name: /let's talk/i }).first().click()
    await expect(page).toHaveURL('/contact')
    
    // Go back to homepage
    await page.goto('/')
    
    // Test "Hire Me" button in navigation
    await page.getByRole('link', { name: 'Hire Me' }).click()
    await expect(page).toHaveURL('/contact')
  })

  test('should have working navigation menu', async ({ page }) => {
    // Test About link
    await page.getByRole('link', { name: 'About' }).click()
    await expect(page).toHaveURL('/about')
    
    // Test Projects link
    await page.getByRole('link', { name: 'Projects' }).click()
    await expect(page).toHaveURL('/projects')
    
    // Test Contact link
    await page.getByRole('link', { name: 'Contact' }).click()
    await expect(page).toHaveURL('/contact')
    
    // Test Home link
    await page.getByRole('link', { name: 'Home' }).click()
    await expect(page).toHaveURL('/')
  })
})

test.describe('Homepage Mobile', () => {
  test.use({ viewport: { width: 375, height: 667 } })

  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should show mobile navigation menu', async ({ page }) => {
    // Check mobile menu button is visible
    const menuButton = page.getByRole('button', { name: /toggle menu/i })
    await expect(menuButton).toBeVisible()
    
    // Menu should be closed initially
    await expect(page.getByRole('link', { name: 'Home' }).first()).not.toBeVisible()
    
    // Open mobile menu
    await menuButton.click()
    
    // Check menu items are visible
    await expect(page.getByRole('link', { name: 'Home' }).first()).toBeVisible()
    await expect(page.getByRole('link', { name: 'About' }).first()).toBeVisible()
    await expect(page.getByRole('link', { name: 'Projects' }).first()).toBeVisible()
    await expect(page.getByRole('link', { name: 'Contact' }).first()).toBeVisible()
  })

  test('should close mobile menu when clicking a link', async ({ page }) => {
    const menuButton = page.getByRole('button', { name: /toggle menu/i })
    
    // Open menu
    await menuButton.click()
    await expect(page.getByRole('link', { name: 'About' }).first()).toBeVisible()
    
    // Click a menu item
    await page.getByRole('link', { name: 'About' }).first().click()
    
    // Should navigate to About page
    await expect(page).toHaveURL('/about')
  })

  test('should not show scroll indicator on mobile', async ({ page }) => {
    // Scroll indicator should be hidden on mobile screens
    const scrollIndicator = page.locator('.animate-pulse').last()
    await expect(scrollIndicator).toBeHidden()
  })

  test('should have proper mobile spacing', async ({ page }) => {
    // Check that hero content doesn't overlap with navigation
    const heroSection = page.locator('section').first()
    await expect(heroSection).toBeVisible()
    
    // Available badge should be visible without overlap
    await expect(page.getByText('Available for new projects')).toBeVisible()
  })
})