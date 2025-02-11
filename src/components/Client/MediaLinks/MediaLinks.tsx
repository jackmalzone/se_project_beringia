import { FaGlobe, FaYoutube, FaLinkedin, FaCubes } from 'react-icons/fa'
import './MediaLinks.css'

interface MediaLinksProps {
  links: {
    website?: string;
    youtube?: string;
    linkedin?: string;
    sketchfab?: string;
  }
}

export const MediaLinks = ({ links }: MediaLinksProps) => {
  const linkItems = [
    { 
      key: 'website', 
      label: 'Website', 
      url: links.website, 
      icon: FaGlobe,
      color: '#2d3436'
    },
    { 
      key: 'youtube', 
      label: 'YouTube', 
      url: links.youtube, 
      icon: FaYoutube,
      color: '#ff0000'
    },
    { 
      key: 'linkedin', 
      label: 'LinkedIn', 
      url: links.linkedin, 
      icon: FaLinkedin,
      color: '#0077b5'
    },
    { 
      key: 'sketchfab', 
      label: 'Sketchfab', 
      url: links.sketchfab, 
      icon: FaCubes,
      color: '#1caad9'
    }
  ]

  const availableLinks = linkItems.filter(item => item.url)

  if (availableLinks.length === 0) return null

  return (
    <section className="media-links">
      <div className="media-links__container">
        <h2 className="media-links__title">Connect With Us</h2>
        <div className="media-links__grid">
          {availableLinks.map(({ key, label, url, icon: Icon, color }) => (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="media-links__item"
              style={{ '--hover-color': color } as React.CSSProperties}
            >
              <Icon className="media-links__icon" />
              <span className="media-links__label">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
