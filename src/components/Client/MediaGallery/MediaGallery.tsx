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

const VideoThumbnail: React.FC<{ url: string; alt: string }> = ({ url, alt }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Load the first frame of the video
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  }, []);

  return (
    <div className="media-gallery__item--video">
      <video
        ref={videoRef}
        src={url}
        preload="metadata"
        muted
        playsInline
        className="media-gallery__image"
        title={alt}
      />
      <div className="media-gallery__item-overlay">
        <FaPlay className="media-gallery__item-icon" />
      </div>
    </div>
  );
};

export const MediaGallery: React.FC<MediaGalleryProps> = ({ items }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const gridRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

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
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
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
    } else {
      document.removeEventListener('keydown', handleKeyPress);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [isModalOpen, handleKeyPress]);

  // Ensure video is paused when modal opens or when navigating
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isModalOpen, currentIndex]);

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
                <VideoThumbnail url={item.url} alt={item.alt} />
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
          <div 
            className="media-gallery__content" 
            onClick={e => e.stopPropagation()}
            style={{ position: 'relative' }}
          >
            {items[currentIndex].type === 'image' ? (
              <img
                src={items[currentIndex].url}
                alt={items[currentIndex].alt}
                className="media-gallery__media"
              />
            ) : items[currentIndex].type === 'video' ? (
              <video
                ref={videoRef}
                src={items[currentIndex].url}
                controls
                className="media-gallery__media"
                preload="none"
              />
            ) : null}
            
            {items.length > 1 && (
              <>
                <button
                  className="media-gallery__nav media-gallery__nav--prev"
                  onClick={handlePrevious}
                  aria-label="Previous image"
                >
                  <FaChevronLeft />
                </button>
                <button
                  className="media-gallery__nav media-gallery__nav--next"
                  onClick={handleNext}
                  aria-label="Next image"
                >
                  <FaChevronRight />
                </button>
              </>
            )}
            <button
              className="media-gallery__close"
              onClick={handleClose}
              aria-label="Close modal"
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
