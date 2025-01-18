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
    { key: 'website', label: 'Website', url: links.website, icon: '🌐' },
    { key: 'youtube', label: 'YouTube', url: links.youtube, icon: '📺' },
    { key: 'linkedin', label: 'LinkedIn', url: links.linkedin, icon: '💼' },
    { key: 'sketchfab', label: 'Sketchfab', url: links.sketchfab, icon: '🎮' }
  ]

  const availableLinks = linkItems.filter(item => item.url)

  if (availableLinks.length === 0) return null

  return (
    <section className="media-links">
      <div className="container">
        <h2 className="media-links__title">Connect With Us</h2>
        <div className="media-links__grid">
          {availableLinks.map(({ key, label, url, icon }) => (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="media-links__item"
            >
              <span className="media-links__icon">{icon}</span>
              <span className="media-links__label">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
