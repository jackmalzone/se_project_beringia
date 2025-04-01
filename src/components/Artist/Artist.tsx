import { useState } from 'react'
import './Artist.css'
import galapagosSeascape from '../../assets/beringia/seascape-wallpaper.jpg'
import galapagosSeascape2 from '../../assets/beringia/galapagos-seascape2.jpg'
import galapagosSeascape3 from '../../assets/beringia/galapagos-seascape.jpg'

interface Artwork {
  id: string
  title: string
  imageUrl: string
  description: string
}

const artworks: Artwork[] = [
  
  {
    id: 'galapagos-seamounts-1',
    title: 'Galapagos Seamounts I',
    imageUrl: galapagosSeascape3,
    description: 'Created during Rutstein\'s time as an Artist at Sea aboard the Nautilus exploration vessel, this piece incorporates live sonar data from the Galapagos seamounts. The underwater mountains, formed by volcanic activity, host unique ecosystems that Rutstein captured through her artistic interpretation of the scientific mapping data.'
  },
  {
    id: 'galapagos-seamounts-2',
    title: 'Galapagos Seamounts II',
    imageUrl: galapagosSeascape2,
    description: 'Working in the ship\'s wet lab, Rutstein collaborated with scientists using multi-beam sonar technology to map the ocean floor. This piece represents her direct engagement with the scientific process, as she transformed real-time data feeds into visual art while the ship conducted high-resolution mapping of the East Pacific region.'
  },
  {
    id: 'galapagos-1',
    title: 'Artist at Sea | Galapagos I',
    imageUrl: galapagosSeascape,
    description: 'As a Science Communication Fellow, Rutstein connected with museum groups worldwide through telepresence technology, sharing the expedition\'s discoveries in real-time. This artwork reflects her dual role as both artist and science communicator, incorporating elements from her shipboard studio and the live interactions with global audiences.'
  }
  
]

const Artist = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isBioExpanded, setIsBioExpanded] = useState(false)

  const handleArtworkClick = (artwork: Artwork) => {
    setSelectedArtwork(artwork)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedArtwork(null)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleCloseModal()
    }
  }

  const handleBioClick = () => {
    setIsBioExpanded(!isBioExpanded)
  }

  return (
    <section className="artist" id="featured-artist">
      <div className="artist__container">
        <div className="artist__header">
          <h2 className="artist__title">Featured Artist</h2>
          <h3 className="artist__name">Rebecca Rutstein</h3>
        </div>

        <div className="artist__bio">
          <div 
            className={`artist__bio-content ${isBioExpanded ? 'artist__bio-content--expanded' : ''}`}
            onClick={handleBioClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleBioClick()
              }
            }}
            aria-label={isBioExpanded ? "Collapse bio" : "Expand bio"}
          >
            <div className="artist__bio-text">
              <p>
                Rebecca Rutstein is a multidisciplinary artist whose practice bridges art and science. For over twenty years she has created painting, sculpture, interactive installation and public art inspired by the natural world. Her environmentally-focused work sheds light on places and processes hidden from view to foster deeper connection in the face of our climate crisis. As an artist-in-residence, Rutstein's collaborations with scientists have taken her around the world including eight expeditions at sea and three deep-sea dives to the ocean floor in the three-person Alvin submersible, supported by the National Science Foundation. Her work with oceanographers, ecologists, microbiologists, molecular scientists and planetary geologists give her a unique perspective and broad view of the interconnectedness of all things in nature.
              </p>

              <p>
                A recipient of the Pew Fellowship in the Arts with recognition from the National Endowment for the Arts, her work has been featured on NPR, ABC, NBC, CBS, Washington Post, Wall Street Journal, Huffington Post, Vice & Vogue magazines. Rutstein has exhibited internationally in over forty solo shows, and her work can be found in more than fifty public collections including the Philadelphia Museum of Art, Georgia Museum of Art, Museum of the Pennsylvania Academy of the Fine Arts, National Academy of Sciences, U.S. Department of State, U.S. Consulate in Thailand, and Yale University. She has had over 70 speaking engagements about her interdisciplinary practice including at the Barnes Foundation, National Academy of Sciences, Pennsylvania Academy of the Fine Arts, MIT Media Labs, Stanford, Georgetown and Cornell Universities, and the University of Georgia where she was awarded the Delta Visiting Chair for Global Understanding. Rutstein received a Master of Fine Arts from University of Pennsylvania and a Bachelor of Fine Arts (Magna Cum Laude) from Cornell University. She is represented by the Bridgette Mayer Gallery in Philadelphia.
              </p>
            </div>
            <a 
              href="https://www.rebeccarutstein.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="artist__bio-link"
              onClick={(e) => e.stopPropagation()}
            >
              Visit Rebecca's Website →
            </a>
          </div>
        </div>

        <div className="artist__gallery">
          {artworks.map((artwork) => (
            <div 
              key={artwork.id} 
              className={`artist__gallery-item ${selectedArtwork?.id === artwork.id ? 'artist__gallery-item--active' : ''}`}
              onClick={() => handleArtworkClick(artwork)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleArtworkClick(artwork)
                }
              }}
              aria-label={`View ${artwork.title}`}
            >
              <img 
                src={artwork.imageUrl} 
                alt={artwork.title}
                className="artist__gallery-image"
              />
              <div className="artist__gallery-overlay">
                <h4 className="artist__gallery-title">{artwork.title}</h4>
                <p className="artist__gallery-description">{artwork.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && selectedArtwork && (
        <div 
          className="artist__modal"
          onClick={handleCloseModal}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
          aria-label="Close fullscreen view"
        >
          <div className="artist__modal-content">
            <button 
              className="artist__modal-close"
              onClick={handleCloseModal}
              aria-label="Close"
            >
              ×
            </button>
            <img 
              src={selectedArtwork.imageUrl} 
              alt={selectedArtwork.title}
              className="artist__modal-image"
            />
            <div className="artist__modal-info">
              <h4 className="artist__modal-title">{selectedArtwork.title}</h4>
              <p className="artist__modal-description">{selectedArtwork.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Artist
