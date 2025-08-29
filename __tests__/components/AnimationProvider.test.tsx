import { render, screen, act } from '@testing-library/react'
import AnimationProvider, { useAnimationContext } from '@/components/AnimationProvider'

// Mock next/navigation
const mockUsePathname = jest.fn()
jest.mock('next/navigation', () => ({
  usePathname: () => mockUsePathname(),
}))

// Test component to access context
function TestComponent() {
  const { animationKey, isPageLoaded } = useAnimationContext()
  return (
    <div>
      <div data-testid="animation-key">{animationKey}</div>
      <div data-testid="is-page-loaded">{isPageLoaded.toString()}</div>
    </div>
  )
}

describe('AnimationProvider', () => {
  beforeEach(() => {
    mockUsePathname.mockReturnValue('/')
    jest.clearAllMocks()
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it('provides initial context values', () => {
    render(
      <AnimationProvider>
        <TestComponent />
      </AnimationProvider>
    )

    expect(screen.getByTestId('animation-key').textContent).toBe('1')
    expect(screen.getByTestId('is-page-loaded').textContent).toBe('false')
  })

  it('updates isPageLoaded to true after timer', () => {
    render(
      <AnimationProvider>
        <TestComponent />
      </AnimationProvider>
    )

    expect(screen.getByTestId('is-page-loaded').textContent).toBe('false')

    // Fast-forward timer
    act(() => {
      jest.advanceTimersByTime(100)
    })

    expect(screen.getByTestId('is-page-loaded').textContent).toBe('true')
  })

  it('increments animation key and resets page loaded state on pathname change', () => {
    const { rerender } = render(
      <AnimationProvider>
        <TestComponent />
      </AnimationProvider>
    )

    // Initial state
    const initialKey = screen.getByTestId('animation-key').textContent
    expect(initialKey).toBe('1')
    
    // Fast-forward to set isPageLoaded to true
    act(() => {
      jest.advanceTimersByTime(100)
    })
    expect(screen.getByTestId('is-page-loaded').textContent).toBe('true')

    // Change pathname by changing the mock return value
    mockUsePathname.mockReturnValue('/about')
    
    // Re-render to trigger useEffect
    rerender(
      <AnimationProvider>
        <TestComponent />
      </AnimationProvider>
    )

    // Animation key should increment, isPageLoaded should reset
    expect(screen.getByTestId('animation-key').textContent).toBe('2')
    expect(screen.getByTestId('is-page-loaded').textContent).toBe('false')

    // After timer, should be loaded again
    act(() => {
      jest.advanceTimersByTime(100)
    })
    expect(screen.getByTestId('is-page-loaded').textContent).toBe('true')
  })

  it('cleans up timer on unmount', () => {
    const clearTimeoutSpy = jest.spyOn(global, 'clearTimeout')
    
    const { unmount } = render(
      <AnimationProvider>
        <TestComponent />
      </AnimationProvider>
    )

    unmount()

    expect(clearTimeoutSpy).toHaveBeenCalled()
    clearTimeoutSpy.mockRestore()
  })

  it('renders children correctly', () => {
    render(
      <AnimationProvider>
        <TestComponent />
      </AnimationProvider>
    )

    expect(screen.getByTestId('animation-key')).toBeTruthy()
    expect(screen.getByTestId('is-page-loaded')).toBeTruthy()
  })
})