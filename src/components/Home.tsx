import { useEffect } from 'react'

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'

function LangCard({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="stack-card">
      <img src={`${DEVICON}/${icon}.svg`} alt={name} width={52} height={52} />
      <span>{name}</span>
    </div>
  )
}

function Home() {
  useEffect(() => {
    const lines = document.querySelectorAll('.hero-line')
    lines.forEach((line, i) => {
      setTimeout(() => line.classList.add('is-visible'), 200 + i * 180)
    })
    document.querySelectorAll('.hero-fade').forEach((el, i) => {
      setTimeout(() => el.classList.add('is-visible'), 200 + lines.length * 180 + 200 + i * 130)
    })
  }, [])

  return (
    <>
      <section className="hero">
        <div className="hero-heading">
          <div className="hero-line"><span>Dinesh</span></div>
        </div>
        <p className="hero-subheading hero-fade">Student Developer</p>
        <div className="hero-footer hero-fade">
          <div className="hero-scroll">
            <span>Scroll</span>
            <div className="scroll-line" />
          </div>
        </div>
      </section>

      <section className="section tech-stack">
        <div className="stack-row reveal">
          <p className="stack-row-label">In depth</p>
          <div className="stack-cards">
            <LangCard name="HTML" icon="html5/html5-original" />
            <LangCard name="CSS" icon="css3/css3-original" />
            <LangCard name="Python" icon="python/python-original" />
          </div>
        </div>
        <div className="stack-row reveal reveal-delay-1">
          <p className="stack-row-label">Also learning</p>
          <div className="stack-cards">
            <LangCard name="JavaScript" icon="javascript/javascript-original" />
            <LangCard name="TypeScript" icon="typescript/typescript-original" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
