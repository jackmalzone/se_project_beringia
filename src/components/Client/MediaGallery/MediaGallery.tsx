import React, { useState, useCallback, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaTimes, FaPlay } from 'react-icons/fa';
import './MediaGallery.css';

interface MediaItem {
  id: string;
  url: string;
  alt: string;
  type: 'image' | 'video' | 'sketchfab';
  modelId?: string;
}

interface MediaGalleryProps {
  items: MediaItem[];
}

const VideoThumbnail = () => (
  <div className="media-gallery__item--video">
    <FaPlay className="media-gallery__item-icon" />
  </div>
);

export const MediaGallery: React.FC<MediaGalleryProps> = ({ items }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const gridRef = useRef<HTMLDivElement>(null);

  const updateScrollProgress = useCallback(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const scrollWidth = grid.scrollWidth - grid.clientWidth;
    const scrolled = grid.scrollLeft;
    const progress = (scrolled / scrollWidth) * 100;
    
    grid.style.setProperty('--scroll-width', `${progress}%`);
  }, []);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    grid.addEventListener('scroll', updateScrollProgress);
    window.addEventListener('resize', updateScrollProgress);

    // Initial progress
    updateScrollProgress();

    return () => {
      grid.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('resize', updateScrollProgress);
    };
  }, [updateScrollProgress]);

  const handleItemClick = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const handleClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return items.length - 1;
      }
      return prevIndex - 1;
    });
  }, [items.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === items.length - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
  }, [items.length]);

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (!isModalOpen) return;

    switch (event.key) {
      case 'ArrowLeft':
        handlePrevious();
        break;
      case 'ArrowRight':
        handleNext();
        break;
      case 'Escape':
        handleClose();
        break;
      default:
        break;
    }
  }, [isModalOpen, handleNext, handlePrevious, handleClose]);

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleKeyPress);
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.body.style.overflow = '';
    };
  }, [isModalOpen, handleKeyPress]);

  return (
    <section className="media-gallery">
      <h2 className="media-gallery__title">Gallery</h2>
      <div className="media-gallery__container">
        <div className="media-gallery__grid" ref={gridRef}>
          {items.map((item, index) => (
            <div
              key={item.id}
              className="media-gallery__item"
              onClick={() => handleItemClick(index)}
            >
              {item.type === 'image' ? (
                <img
                  src={item.url}
                  alt={item.alt}
                  className="media-gallery__image"
                  loading="lazy"
                />
              ) : item.type === 'video' ? (
                <VideoThumbnail />
              ) : null}
            </div>
          ))}
        </div>
      </div>

      {currentIndex !== null && (
        <div 
          className={`media-gallery__modal ${isModalOpen ? 'media-gallery__modal--visible' : ''}`}
          onClick={handleClose}
        >
          <div className="media-gallery__content" onClick={e => e.stopPropagation()}>
            {items[currentIndex].type === 'image' ? (
              <img
                src={items[currentIndex].url}
                alt={items[currentIndex].alt}
                className="media-gallery__media"
              />
            ) : items[currentIndex].type === 'video' ? (
              <video
                src={items[currentIndex].url}
                controls
                autoPlay
                className="media-gallery__media"
              />
            ) : null}
            
            {items.length > 1 && (
              <>
                <button
                  className="media-gallery__nav media-gallery__nav--prev"
                  onClick={handlePrevious}
                  aria-label="Previous image"
                >
                  <FaChevronLeft size={20} />
                </button>
                <button
                  className="media-gallery__nav media-gallery__nav--next"
                  onClick={handleNext}
                  aria-label="Next image"
                >
                  <FaChevronRight size={20} />
                </button>
              </>
            )}
            
            <button
              className="media-gallery__close"
              onClick={handleClose}
              aria-label="Close modal"
            >
              <FaTimes size={20} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
