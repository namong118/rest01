import { createContext, useContext, useEffect, useState } from 'react'

export const PALETTES = [
  { id: 'indigo',  hex: '#6366f1', label: 'Indigo' },
  { id: 'cyan',    hex: '#0ea5e9', label: 'Cyan' },
  { id: 'emerald', hex: '#10b981', label: 'Emerald' },
  { id: 'rose',    hex: '#f43f5e', label: 'Rose' },
  { id: 'violet',  hex: '#8b5cf6', label: 'Violet' },
]

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [mode,  setMode]  = useState(() => localStorage.getItem('arc-mode')  || 'dark')
  const [color, setColor] = useState(() => localStorage.getItem('arc-color') || 'indigo')

  useEffect(() => {
    document.documentElement.setAttribute('data-mode', mode)
    localStorage.setItem('arc-mode', mode)
  }, [mode])

  useEffect(() => {
    document.documentElement.setAttribute('data-color', color)
    localStorage.setItem('arc-color', color)
  }, [color])

  const toggleMode = () => setMode(m => m === 'dark' ? 'light' : 'dark')

  return (
    <ThemeContext.Provider value={{ mode, color, toggleMode, setColor }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
