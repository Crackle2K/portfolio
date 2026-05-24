import { useState, useMemo } from 'react'
import machinalytics from '../assets/images/showcase/machinalytics.png'
import projectseverance from '../assets/images/showcase/projectseverance.png'
import baguettes from '../assets/images/showcase/baguettes.png'
import riveote from '../assets/images/showcase/riveote.png'
import colorfullamp from '../assets/images/showcase/colorfullamp.png'
import blast from '../assets/images/showcase/blast.png'
import effective from '../assets/images/showcase/effective.png'

type Category = 'all' | 'featured' | 'collaborative' | 'contributed'

interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  category: Category
  links: {
    github: string
    demo?: string
  }
}

const projects: Project[] = [
  {
    id: 'machinalytics',
    title: 'Machinalytics',
    description:
      'Machinalytics is an all-in-one platform for exploring, visualizing, and collaborating on machine learning projects. It combines data visualization, model analysis, and real-time communication into a single, seamless app.',
    image: machinalytics,
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'Figma'],
    category: 'featured',
    links: {
      github: 'https://github.com/MisplacedOrange/Rythm-Hacks',
      demo: 'https://www.youtube.com/watch?v=O0SSgzEZgnY',
    },
  },
  {
    id: 'project-severance',
    title: 'Project Severance',
    description:
      'Project Severance was born from our fascination with psychological horror and the thrill of being hunted. As two high-school students, we wanted to challenge ourselves to create something way bigger than expected.',
    image: projectseverance,
    tags: ['UE5', 'Blueprints'],
    category: 'featured',
    links: {
      github: 'https://github.com/Deific-Games/Project-Severance',
      demo: 'https://www.youtube.com/watch?v=rjIQ288c1-U',
    },
  },
  {
    id: 'baguettes',
    title: 'Baguettes',
    description:
      'This mod adds Baguettes to Minecraft! Crafted from 3 bread, this item fully restores hunger and saturation.',
    image: baguettes,
    tags: ['Java', 'Gradle'],
    category: 'featured',
    links: {
      github: 'https://github.com/Crackle2K/Baguettes',
    },
  },
  {
    id: 'riveote',
    title: 'Riveote',
    description:
      'Riveote is a minimalist quote generator designed to inspire creativity and focus. Featuring a clean UI, it delivers motivational quotes you can instantly copy.',
    image: riveote,
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
    category: 'collaborative',
    links: {
      github: 'https://github.com/MisplacedOrange/Riveote',
    },
  },
  {
    id: 'colorful-lamps',
    title: 'Colorful Lamps',
    description:
      'Colorful Lamp adds craftable redstone lamps in every color, perfect for decorating and customizing your builds.',
    image: colorfullamp,
    tags: ['Java', 'Gradle'],
    category: 'contributed',
    links: {
      github: 'https://github.com/SunPhoen1x/Colorful-Lamp',
    },
  },
  {
    id: 'blast',
    title: 'Blast',
    description: 'Blast is a Fabric Minecraft mod adding throwable bombs and explosive blocks.',
    image: blast,
    tags: ['Java', 'Gradle'],
    category: 'contributed',
    links: {
      github: 'https://github.com/Ladysnake/BLAST',
    },
  },
  {
    id: 'effective',
    title: 'Effective',
    description:
      'The mod adds various effects like water splashes, waterfall clouds, fireflies, improved visual effects, screen shake and many more.',
    image: effective,
    tags: ['Java', 'Gradle'],
    category: 'contributed',
    links: {
      github: 'https://github.com/Ladysnake/Effective',
    },
  },
]

const categoryLabels: Record<Category, string> = {
  all: 'All',
  featured: 'Featured',
  collaborative: 'Collaborative',
  contributed: 'Contributed To',
}

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

const DemoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
  </svg>
)

function ProjectItem({ project, index }: { project: Project; index: number }) {
  return (
    <div className="project-item reveal">
      <div className="project-number">{String(index + 1).padStart(2, '0')}</div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tech-tags">
          {project.tags.map(tag => (
            <span key={tag} className="tech-tag">{tag}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-link">
            <GitHubIcon /> GitHub
          </a>
          {project.links.demo && (
            <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="project-link">
              <DemoIcon /> Demo
            </a>
          )}
        </div>
      </div>
      <div className="project-thumb">
        <img src={project.image} alt={project.title} />
      </div>
    </div>
  )
}

function ContributedItem({ project }: { project: Project }) {
  return (
    <div className="contributed-card reveal">
      <div className="contributed-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="contributed-content">
        <h4>{project.title}</h4>
        <p>{project.description}</p>
        <div className="tech-tags">
          {project.tags.map(tag => (
            <span key={tag} className="tech-tag">{tag}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-link">
            <GitHubIcon /> GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

function Showcase() {
  const [categoryFilter, setCategoryFilter] = useState<Category>('all')
  const [techFilter, setTechFilter] = useState<string | null>(null)

  const allTags = useMemo(() => {
    const tags = new Set<string>()
    projects.forEach(p => p.tags.forEach(t => tags.add(t)))
    return Array.from(tags).sort()
  }, [])

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesCategory = categoryFilter === 'all' || project.category === categoryFilter
      const matchesTech = !techFilter || project.tags.includes(techFilter)
      return matchesCategory && matchesTech
    })
  }, [categoryFilter, techFilter])

  const featuredProjects = filteredProjects.filter(p => p.category === 'featured')
  const collaborativeProjects = filteredProjects.filter(p => p.category === 'collaborative')
  const contributedProjects = filteredProjects.filter(p => p.category === 'contributed')

  return (
    <section className="section showcase">
      <h2 className="reveal">Projects</h2>

      <div className="filter-controls reveal reveal-delay-1">
        <div className="filter-group">
          <span className="filter-label">Category</span>
          <div className="filter-buttons">
            {(Object.keys(categoryLabels) as Category[]).map(cat => (
              <button
                key={cat}
                className={`filter-btn ${categoryFilter === cat ? 'active' : ''}`}
                onClick={() => setCategoryFilter(cat)}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>
        </div>
        <div className="filter-group">
          <span className="filter-label">Technology</span>
          <div className="filter-buttons">
            <button
              className={`filter-btn ${techFilter === null ? 'active' : ''}`}
              onClick={() => setTechFilter(null)}
            >
              All
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                className={`filter-btn ${techFilter === tag ? 'active' : ''}`}
                onClick={() => setTechFilter(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filteredProjects.length === 0 && (
        <div className="no-results">
          <p>No projects match the selected filters.</p>
        </div>
      )}

      {categoryFilter === 'all' ? (
        <>
          {featuredProjects.length > 0 && (
            <div className="showcase-section">
              <h3 className="section-heading reveal">Featured</h3>
              {featuredProjects.map((p, i) => (
                <ProjectItem key={p.id} project={p} index={i} />
              ))}
            </div>
          )}
          {collaborativeProjects.length > 0 && (
            <div className="showcase-section">
              <h3 className="section-heading reveal">Collaborative</h3>
              {collaborativeProjects.map((p, i) => (
                <ProjectItem key={p.id} project={p} index={i} />
              ))}
            </div>
          )}
          {contributedProjects.length > 0 && (
            <div className="showcase-section">
              <h3 className="section-heading reveal">Contributed To</h3>
              <div className="contributed-grid">
                {contributedProjects.map(p => (
                  <ContributedItem key={p.id} project={p} />
                ))}
              </div>
            </div>
          )}
        </>
      ) : categoryFilter === 'contributed' ? (
        <div className="showcase-section">
          <div className="contributed-grid">
            {filteredProjects.map(p => (
              <ContributedItem key={p.id} project={p} />
            ))}
          </div>
        </div>
      ) : (
        <div className="showcase-section">
          {filteredProjects.map((p, i) => (
            <ProjectItem key={p.id} project={p} index={i} />
          ))}
        </div>
      )}
    </section>
  )
}

export default Showcase
