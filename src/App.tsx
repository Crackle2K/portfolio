import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Showcase from './components/Showcase'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Cursor from './components/Cursor'

function App() {
  const location = useLocation()
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [muted, setMuted] = useState(false)
  const [volume, setVolume] = useState(0.15)

  useEffect(() => {
    const audio = new Audio('/ambient.mp3')
    audio.loop = true
    audio.volume = 0.15
    audioRef.current = audio

    const tryPlay = () => audio.play().catch(() => {})
    tryPlay()
    document.addEventListener('click', tryPlay, { once: true })
    document.addEventListener('keydown', tryPlay, { once: true })

    return () => {
      audio.pause()
      document.removeEventListener('click', tryPlay)
      document.removeEventListener('keydown', tryPlay)
    }
  }, [])

  useEffect(() => {
    if (audioRef.current) audioRef.current.muted = muted
  }, [muted])

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume
  }, [volume])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const reveals = document.querySelectorAll('.reveal')
    reveals.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [location])

  return (
    <div className="portfolio">
      <Cursor />
      <Navbar muted={muted} onToggleMute={() => setMuted(m => !m)} volume={volume} onVolumeChange={setVolume} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
