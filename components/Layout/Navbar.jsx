import { useEffect, useState } from 'react'
import Meta from './Meta'
import Nav from './Nav'

export default function Navbar({ children }) {
  const [darkMode, setDarkMode] = useState()

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      setDarkMode(true)
    } else {
      document.documentElement.classList.remove('dark')
      setDarkMode(false)
    }
  }, [darkMode])

  return (
    <>
      <Meta />
      <div className="min-h-screen dark:text-gray-100 dark:bg-black font-inter">
        <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="pt-20">{children}</main>
      </div>
    </>
  )
}
