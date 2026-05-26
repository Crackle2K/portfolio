import { useState, useEffect, useRef, useMemo } from 'react'
import machinalytics from '../assets/images/showcase/machinalytics.png'
import projectseverance from '../assets/images/showcase/projectseverance.png'
import ralph from '../assets/images/showcase/ralph.png'
import vantage from '../assets/images/showcase/vantage.png'
import colorfullamp from '../assets/images/showcase/colorfullamp.png'
import blast from '../assets/images/showcase/blast.png'
import effective from '../assets/images/showcase/effective.png'
import hackclub from '../assets/images/showcase/hackclub.png'

type Category = 'featured' | 'other' | 'contributed'
type FilterCategory = 'all' | 'projects' | 'contributed'

interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  category: Category
  wide?: boolean
  links: {
    github: string
    demo?: string
    devpost?: string
    vercel?: string
  }
}

const projects: Project[] = [
  {
    id: 'vantage',
    title: 'Vantage',
    description:
      'Vantage is a trust-first local business discovery platform where visibility is earned through verified visits and community activity — not ad spend — giving independent shops a fair shot against chains.',
    image: vantage,
    tags: ['HTML', 'CSS', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'React', 'Rust', 'Supabase', 'Vercel', 'Axum'],
    category: 'other',
    links: {
      github: 'https://github.com/Crackle2K/Vantage',
      vercel: 'https://vantage-ruddy.vercel.app'
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
      devpost: 'https://devpost.com/software/anomaly-7kgip6'
    },
  },
  {
    id: 'ralph',
    title: 'Ralph',
    description:
      'Ralph is an autonomous navigation system for Raspberry Pi robots, combining YOLOv8 object detection with MiDaS depth estimation for real-time obstacle avoidance and voice-guided feedback.',
    image: ralph,
    tags: ['Python', 'PyTorch', 'OpenCV', 'Raspberry Pi'],
    category: 'other',
    links: {
      github: 'https://github.com/CDX-1/ralph',
      demo: 'https://www.youtube.com/watch?v=xcyQQ1cKLxs',
      devpost: 'https://devpost.com/software/ralph-1tkaxb'
    },
  },
  {
    id: 'machinalytics',
    title: 'Machinalytics',
    description:
      'Machinalytics is an all-in-one platform for exploring, visualizing, and collaborating on machine learning projects. It combines data visualization, model analysis, and real-time communication into a single, seamless app.',
    image: machinalytics,
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'Figma'],
    category: 'other',
    links: {
      github: 'https://github.com/MisplacedOrange/Rythm-Hacks',
      demo: 'https://www.youtube.com/watch?v=O0SSgzEZgnY',
      devpost: 'https://devpost.com/software/machinalytics'
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
  {
    id: 'hackclub-site',
    title: "Hack Club's Site",
    description:
      "The open-source codebase behind hackclub.com, built and maintained by the Hack Club community. Hack Club is the world’s largest nonprofit movement of teenagers making cool projects.",
    image: hackclub,
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    category: 'contributed',
    wide: true,
    links: {
      github: 'https://github.com/hackclub/site',
      vercel: 'https://hackclub.com'
    },
  },
]

const categoryLabels: Record<FilterCategory, string> = {
  all: 'All',
  projects: 'Projects',
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

const DevpostIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.002 1.61L0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61zm1.593 4.084h4.811c3.173 0 5.341 1.893 5.341 6.31 0 4.517-2.168 6.31-5.341 6.31H7.595zm2.001 2.008v8.604h2.81c2.125 0 3.337-1.24 3.337-4.302 0-3.06-1.212-4.302-3.337-4.302z"/>
  </svg>
)

const VercelIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 22.525H0l12-21.05 12 21.05z"/>
  </svg>
)

function FeaturedHero({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState(0)
  const pausedRef = useRef(false)

  useEffect(() => {
    if (projects.length <= 1) return
    const id = setInterval(() => {
      if (!pausedRef.current) {
        setActive(i => (i + 1) % projects.length)
      }
    }, 6000)
    return () => clearInterval(id)
  }, [projects.length])

  if (projects.length === 0) return null
  const project = projects[active]

  return (
    <div
      className="featured-hero"
      onMouseEnter={() => { pausedRef.current = true }}
      onMouseLeave={() => { pausedRef.current = false }}
    >
      <div className="featured-content">
        <span className="featured-badge">Featured</span>
        <h2 className="featured-title">{project.title}</h2>
        <p className="featured-description">{project.description}</p>
        <div className="tech-tags">
          {project.tags.map(tag => (
            <span key={tag} className="tech-tag featured-tech-tag">{tag}</span>
          ))}
        </div>
        <div className="featured-actions">
          <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="featured-btn featured-btn-primary">
            <GitHubIcon /> GitHub
          </a>
          {project.links.demo && (
            <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="featured-btn featured-btn-secondary">
              <DemoIcon /> Demo
            </a>
          )}
          {project.links.devpost && (
            <a href={project.links.devpost} target="_blank" rel="noopener noreferrer" className="featured-btn featured-btn-secondary">
              <DevpostIcon /> Devpost
            </a>
          )}
          {project.links.vercel && (
            <a href={project.links.vercel} target="_blank" rel="noopener noreferrer" className="featured-btn featured-btn-secondary">
              <VercelIcon /> Vercel
            </a>
          )}
        </div>
      </div>
      <div className="featured-image-panel">
        {projects.map((p, i) => (
          <div key={p.id} className={`featured-image-slide${i === active ? ' active' : ''}`}>
            <img src={p.image} alt={p.title} />
          </div>
        ))}
      </div>
      {projects.length > 1 && (
        <div className="featured-indicators">
          {projects.map((_, i) => (
            <button
              key={i === active ? `ind-${i}-active` : `ind-${i}`}
              className={`featured-indicator${i === active ? ' active' : ''}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <div className="project-card reveal">
      <div className="project-card-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-card-body">
        <span className="project-card-number">{String(index + 1).padStart(2, '0')}</span>
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
          {project.links.devpost && (
            <a href={project.links.devpost} target="_blank" rel="noopener noreferrer" className="project-link">
              <DevpostIcon /> Devpost
            </a>
          )}
          {project.links.vercel && (
            <a href={project.links.vercel} target="_blank" rel="noopener noreferrer" className="project-link">
              <VercelIcon /> Vercel
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function ContributedItem({ project }: { project: Project }) {
  return (
    <div className={`contributed-card reveal${project.wide ? ' contributed-card--wide' : ''}`}>
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
          {project.links.devpost && (
            <a href={project.links.devpost} target="_blank" rel="noopener noreferrer" className="project-link">
              <DevpostIcon /> Devpost
            </a>
          )}
          {project.links.vercel && (
            <a href={project.links.vercel} target="_blank" rel="noopener noreferrer" className="project-link">
              <VercelIcon /> Vercel
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function Showcase() {
  const [categoryFilter, setCategoryFilter] = useState<FilterCategory>('all')
  const [techFilter, setTechFilter] = useState<string | null>(null)

  const featuredProjects = useMemo(() => projects.filter(p => p.category === 'featured'), [])

  const allTags = useMemo(() => {
    const tags = new Set<string>()
    projects.forEach(p => p.tags.forEach(t => tags.add(t)))
    return Array.from(tags).sort()
  }, [])

  const filteredList = useMemo(() => {
    return projects.filter(p => {
      const isProject = p.category === 'featured' || p.category === 'other'
      const matchesCategory =
        categoryFilter === 'all' ||
        (categoryFilter === 'projects' && isProject) ||
        (categoryFilter === 'contributed' && p.category === 'contributed')
      const matchesTech = !techFilter || p.tags.includes(techFilter)
      return matchesCategory && matchesTech
    })
  }, [categoryFilter, techFilter])

  const listProjects = filteredList.filter(p => p.category === 'other' || p.category === 'featured')
  const contributedProjects = filteredList.filter(p => p.category === 'contributed')

  useEffect(() => {
    const section = document.querySelector('.showcase')
    if (!section) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible')
        })
      },
      { threshold: 0.1 }
    )
    section.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [filteredList])

  return (
    <section className="section showcase">
      <FeaturedHero projects={featuredProjects} />

      <h2 className="reveal">Projects</h2>

      <div className="filter-controls reveal reveal-delay-1">
        <div className="filter-group">
          <span className="filter-label">Category</span>
          <div className="filter-buttons">
            {(['all', 'projects', 'contributed'] as FilterCategory[]).map(cat => (
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

      {filteredList.length === 0 && (
        <div className="no-results">
          <p>No projects match the selected filters.</p>
        </div>
      )}

      {listProjects.length > 0 && (
        <div className="showcase-section">
          <h3 className="section-heading reveal">Projects</h3>
          <div className="projects-grid">
            {listProjects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
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
    </section>
  )
}

export default Showcase
