import { useState, useEffect } from 'react'

type MediaQueryMap = {
  [key: string]: string
}

const defaultQueries: MediaQueryMap = {
  mobile: '(max-width: 767px)',
  tablet: '(min-width: 768px) and (max-width: 1023px)',
  desktop: '(min-width: 1024px)',
  dark: '(prefers-color-scheme: dark)',
  light: '(prefers-color-scheme: light)',
  portrait: '(orientation: portrait)',
  landscape: '(orientation: landscape)',
  retina: '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)'
}

export const useMediaQuery = (queries: MediaQueryMap = defaultQueries) => {
  const [matches, setMatches] = useState<{ [key: string]: boolean }>({})

  useEffect(() => {
    const mediaQueryLists: { [key: string]: MediaQueryList } = {}
    const handlers: { [key: string]: (e: MediaQueryListEvent) => void } = {}

    const updateMatches = () => {
      const updatedMatches = Object.keys(queries).reduce((acc, key) => {
        acc[key] = mediaQueryLists[key]?.matches || false
        return acc
      }, {} as { [key: string]: boolean })

      setMatches(updatedMatches)
    }

    Object.keys(queries).forEach(key => {
      mediaQueryLists[key] = window.matchMedia(queries[key])
      handlers[key] = (e: MediaQueryListEvent) => updateMatches()
      mediaQueryLists[key].addListener(handlers[key])
    })

    // Initialize
    updateMatches()

    // Cleanup
    return () => {
      Object.keys(queries).forEach(key => {
        mediaQueryLists[key].removeListener(handlers[key])
      })
    }
  }, [queries])

  return matches
} 