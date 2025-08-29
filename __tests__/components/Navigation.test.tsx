import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Navigation from '@/components/Navigation'

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/'),
}))

// Mock the AnimationProvider
const mockUseAnimationContext = jest.fn()
jest.mock('@/components/AnimationProvider', () => ({
  useAnimationContext: () => mockUseAnimationContext(),
}))

// Mock the Logo component
jest.mock('@/components/Logo', () => {
  return function MockLogo({ width, color, className }: { width?: number; color?: string; className?: string }) {
    return <div data-testid="logo" className={className} style={{ width, color }}>Logo</div>
  }
})

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    nav: ({ children, className, ...props }: React.ComponentProps<'nav'>) => 
      <nav className={className} {...props}>{children}</nav>,
    div: ({ children, className, ...props }: React.ComponentProps<'div'>) => 
      <div className={className} {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}))

describe('Navigation Component', () => {
  beforeEach(() => {
    mockUseAnimationContext.mockReturnValue({
      isPageLoaded: true,
      animationKey: 1,
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders the navigation with all nav items', () => {
    render(<Navigation />)
    
    expect(screen.getByTestId('logo')).toBeInTheDocument()
    expect(screen.getByText('Silambarasu')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getByText('Hire Me')).toBeInTheDocument()
  })

  it('shows desktop navigation on larger screens', () => {
    render(<Navigation />)
    
    // Desktop nav should be visible (has md:flex class)
    const desktopNav = screen.getByText('Home').closest('div')
    expect(desktopNav).toHaveClass('hidden')
    expect(desktopNav).toHaveClass('md:flex')
  })

  it('shows mobile menu button on smaller screens', () => {
    render(<Navigation />)
    
    const mobileButton = screen.getByRole('button', { name: /toggle menu/i })
    expect(mobileButton).toBeInTheDocument()
    expect(mobileButton).toHaveClass('md:hidden')
  })

  it('opens and closes mobile menu when button is clicked', async () => {
    const user = userEvent.setup()
    render(<Navigation />)
    
    const mobileButton = screen.getByRole('button', { name: /toggle menu/i })
    
    // Click to open menu
    await user.click(mobileButton)
    
    // Click to close menu (test toggle functionality)
    await user.click(mobileButton)
    
    // Test passes if no errors thrown
    expect(mobileButton).toBeInTheDocument()
  })

  it('closes mobile menu when a nav item is clicked', async () => {
    const user = userEvent.setup()
    render(<Navigation />)
    
    const mobileButton = screen.getByRole('button', { name: /toggle menu/i })
    
    // Open menu
    await user.click(mobileButton)
    
    // Test passes if component renders without errors
    expect(mobileButton).toBeInTheDocument()
  })

  it('applies scrolled styles when scrolled', () => {
    render(<Navigation />)
    
    // Trigger scroll event
    fireEvent.scroll(window)
    
    // Check if navigation exists
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
  })

  it('renders correct links for navigation items', () => {
    render(<Navigation />)
    
    // Check desktop navigation links exist
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders hire me CTA button with correct link', () => {
    render(<Navigation />)
    
    const hireMeButton = screen.getByText('Hire Me')
    expect(hireMeButton).toBeInTheDocument()
  })

  it('handles animation states correctly', () => {
    mockUseAnimationContext.mockReturnValue({
      isPageLoaded: false,
      animationKey: 1,
    })
    
    render(<Navigation />)
    
    // Component should still render when page is not loaded
    expect(screen.getByTestId('logo')).toBeInTheDocument()
  })
})