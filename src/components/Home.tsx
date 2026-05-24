import { useEffect } from 'react'

function Home() {
  useEffect(() => {
    const lines = document.querySelectorAll('.hero-line')
    lines.forEach((line, i) => {
      setTimeout(() => line.classList.add('is-visible'), 200 + i * 180)
    })
    const meta = document.querySelector('.hero-meta')
    if (meta) {
      setTimeout(() => meta.classList.add('is-visible'), 200 + lines.length * 180 + 250)
    }
  }, [])

  return (
    <section className="hero">
      <div className="hero-heading">
        <div className="hero-line"><span>Dinesh</span></div>
        <div className="hero-line"><span>Sinnathamby</span></div>
      </div>
      <div className="hero-meta">
        <p className="hero-subtitle">Student Developer</p>
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </div>
    </section>
  )
}

export default Home
