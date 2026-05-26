import { Link } from 'react-router-dom'

const VolumeIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
  </svg>
)

const MuteIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
  </svg>
)

interface NavbarProps {
  muted: boolean
  onToggleMute: () => void
  volume: number
  onVolumeChange: (v: number) => void
}

function Navbar({ muted, onToggleMute, volume, onVolumeChange }: NavbarProps) {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">DS</Link>
      <div className="nav-links">
        <Link to="/showcase" className="nav-link">Showcase</Link>
        <Link to="/achievements" className="nav-link">Certifications</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <div className="mute-control">
          <div className="volume-slider-wrap">
            <input
              className="volume-slider"
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={muted ? 0 : volume}
              onChange={e => {
                const v = parseFloat(e.target.value)
                onVolumeChange(v)
                if (muted && v > 0) onToggleMute()
              }}
              aria-label="Volume"
            />
          </div>
          <button className="mute-btn" onClick={onToggleMute} aria-label={muted ? 'Unmute' : 'Mute'}>
            {muted ? <MuteIcon /> : <VolumeIcon />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
