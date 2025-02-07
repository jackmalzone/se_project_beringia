import { useState, useEffect, useCallback } from 'react'

interface TransitionOptions {
  duration?: number
  delay?: number
  timing?: string
  onStart?: () => void
  onComplete?: () => void
}

interface TransitionState {
  isVisible: boolean
  isAnimating: boolean
  classes: string[]
}

export const useTransition = (
  initialVisible = false,
  defaultOptions: TransitionOptions = {}
) => {
  const [state, setState] = useState<TransitionState>({
    isVisible: initialVisible,
    isAnimating: false,
    classes: []
  })

  const startTransition = useCallback((
    show: boolean,
    options: TransitionOptions = {}
  ) => {
    const {
      duration = defaultOptions.duration || 300,
      delay = defaultOptions.delay || 0,
      timing = defaultOptions.timing || 'ease',
      onStart = defaultOptions.onStart,
      onComplete = defaultOptions.onComplete
    } = options

    setState(prev => ({
      ...prev,
      isAnimating: true,
      classes: ['transition-active']
    }))

    onStart?.()

    // Start transition after delay
    setTimeout(() => {
      setState(prev => ({
        ...prev,
        isVisible: show,
        classes: ['transition-active', show ? 'transition-enter' : 'transition-leave']
      }))

      // Complete transition after duration
      setTimeout(() => {
        setState(prev => ({
          ...prev,
          isAnimating: false,
          classes: []
        }))
        onComplete?.()
      }, duration)
    }, delay)
  }, [defaultOptions])

  const show = useCallback((options: TransitionOptions = {}) => {
    startTransition(true, options)
  }, [startTransition])

  const hide = useCallback((options: TransitionOptions = {}) => {
    startTransition(false, options)
  }, [startTransition])

  const toggle = useCallback((options: TransitionOptions = {}) => {
    startTransition(!state.isVisible, options)
  }, [state.isVisible, startTransition])

  // Clean up any ongoing transitions when component unmounts
  useEffect(() => {
    return () => {
      setState({
        isVisible: false,
        isAnimating: false,
        classes: []
      })
    }
  }, [])

  return {
    isVisible: state.isVisible,
    isAnimating: state.isAnimating,
    classes: state.classes,
    show,
    hide,
    toggle
  }
} 