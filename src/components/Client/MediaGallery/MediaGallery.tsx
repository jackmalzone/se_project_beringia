import { useState } from 'react'
import './MediaGallery.css'

interface MediaItem {
  id: string;
  url: string;
  alt: string;
  type: 'image' | 'video';
}

interface MediaGalleryProps {
  items: MediaItem[];
}

export const MediaGallery = ({ items }: MediaGalleryProps) => {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null)

  const handleItemClick = (item: MediaItem) => {
    setSelectedItem(item)
  }

  const handleClose = () => {
    setSelectedItem(null)
  }

  return (
    <section className="media-gallery">
      <div className="container">
        <h2 className="media-gallery__title">Gallery</h2>
        <div className="media-gallery__grid">
          {items.map((item) => (
            <div 
              key={item.id}
              className="media-gallery__item"
              onClick={() => handleItemClick(item)}
            >
              {item.type === 'image' ? (
                <img 
                  src={item.url} 
                  alt={item.alt}
                  className="media-gallery__thumbnail"
                />
              ) : (
                <div className="media-gallery__video-thumbnail">
                  <video src={item.url} />
                  <div className="media-gallery__play-icon">▶</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div className="media-gallery__modal" onClick={handleClose}>
          <div className="media-gallery__modal-content">
            {selectedItem.type === 'image' ? (
              <img 
                src={selectedItem.url} 
                alt={selectedItem.alt}
                className="media-gallery__modal-media"
              />
            ) : (
              <video 
                src={selectedItem.url}
                controls
                autoPlay
                className="media-gallery__modal-media"
              />
            )}
            <button 
              className="media-gallery__close-button"
              onClick={handleClose}
              aria-label="Close gallery"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
