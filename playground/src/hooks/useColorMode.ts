import { useState, useEffect } from 'react'

type ColorMode = 'light' | 'dark' | 'system'
export type ResolvedColorMode = 'light' | 'dark'

export function useColorMode() {
  const [colorMode, setColorMode] = useState<ColorMode>('system')

  const [resolvedMode, setResolvedMode] = useState<ResolvedColorMode>(() => {
    if (colorMode === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    }
    return colorMode
  })

  useEffect(() => {
    if (colorMode !== 'system') {
      setResolvedMode(colorMode)
      return
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e: MediaQueryListEvent) => {
      setResolvedMode(e.matches ? 'dark' : 'light')
    }

    setResolvedMode(mediaQuery.matches ? 'dark' : 'light')
    mediaQuery.addEventListener('change', handler)

    return () => {
      mediaQuery.removeEventListener('change', handler)
    }
  }, [colorMode])

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('dark', 'light')
    if (resolvedMode === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.add('light')
    }
  }, [resolvedMode])

  const toggleColorMode = () => {
    let newMode: ColorMode
    if (colorMode === 'system') {
      newMode = resolvedMode === 'dark' ? 'light' : 'dark'
    } else if (colorMode === 'light') {
      newMode = 'dark'
    } else {
      newMode = 'light'
    }
    
    setColorMode(newMode)
  }

  const setColorModeValue = (mode: ColorMode) => {
    setColorMode(mode)
  }

  return {
    colorMode,
    resolvedMode,
    toggleColorMode,
    setColorMode: setColorModeValue,
  }
}
