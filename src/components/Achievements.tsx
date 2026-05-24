const achievements = [
  {
    title: 'Bronze Medallion',
    description:
      'Completed the Bronze Medallion certification, gaining essential water-rescue skills, strong judgment in emergency situations, and foundational training for the lifeguard pathway.',
    tags: ['Lifesaving', 'First Aid', 'Water Safety'],
  },
  {
    title: 'Bronze Cross',
    description:
      'Earned the Bronze Cross certification, advancing my rescue skills, decision-making, and readiness for National Lifeguard training.',
    tags: ['Lifesaving', 'First Aid', 'Water Safety'],
  },
  {
    title: 'Introduction to Front-End Development',
    description:
      'Learned the basics of Front-End Development, primarily focusing on HTML and CSS. Worked a little bit with Bootstrap CSS as well.',
    tags: ['HTML', 'CSS', 'Bootstrap CSS'],
  },
  {
    title: 'Game Design with Unreal Engine',
    description:
      'Worked in Unreal Engine, creating a simple third-person parkour game through UE5 Blueprints. Also learned how to implement UI elements into UE5, creating menus and win screens.',
    tags: ['UE5', 'Blueprints'],
  },
]

function Achievements() {
  return (
    <section className="section achievements">
      <h2 className="reveal">Certifications</h2>
      <div className="achievements-list">
        {achievements.map((item, i) => (
          <div key={item.title} className="achievement-item reveal">
            <div className="achievement-number">{String(i + 1).padStart(2, '0')}</div>
            <div className="achievement-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="tech-tags">
                {item.tags.map(tag => (
                  <span key={tag} className="tech-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Achievements
