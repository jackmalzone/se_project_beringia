import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/constants'
import { clients } from '../../data'
import { SeascapeDivider } from '../SeascapeDivider/SeascapeDivider'
import { useViewport } from '../../hooks/useViewport'
import { useScroll } from '../../hooks/useScroll'
import './Footer.css'

const Footer = () => {
  const { isMobile } = useViewport()
  const { isScrolled } = useScroll(300)

  const footerClasses = [
    'footer',
    isScrolled ? 'footer--visible' : ''
  ].filter(Boolean).join(' ')

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className={footerClasses}>
      <div className="footer__content">
        <div className="footer__column">
          <div className="footer__title">About Beringia</div>
          <p className="footer__text">
            Providing experience and passion necessary for increasing our knowledge of the oceans.
            <Link to={ROUTES.ABOUT} className="footer__text-link" onClick={handleLinkClick}> Learn more →</Link>
          </p>
        </div>

        <div className="footer__column">
          <div className="footer__title">Solutions</div>
          <ul className="footer__list">
            {Object.values(clients).map(client => (
              <li key={client.slug} className="footer__list-item">
                <Link to={ROUTES.CLIENT(client.slug)} className="footer__link" onClick={handleLinkClick}>
                  {client.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__column">
          <div className="footer__title">Quick Links</div>
          <ul className="footer__list">
            <li className="footer__list-item">
              <Link to={ROUTES.HOME} className="footer__link" onClick={handleLinkClick}>Home</Link>
            </li>
            <li className="footer__list-item">
              <Link to={ROUTES.ABOUT} className="footer__link" onClick={handleLinkClick}>About Us</Link>
            </li>
            <li className="footer__list-item">
              <Link to={ROUTES.CONTACT} className="footer__link" onClick={handleLinkClick}>Contact</Link>
            </li>
            <li className="footer__list-item">
              <Link to={ROUTES.TERMS} className="footer__link" onClick={handleLinkClick}>Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        <div className="footer__column">
          <div className="footer__title">Contact</div>
          <ul className="footer__list">
            <li className="footer__list-item">
              <a href="mailto:info@beringia.com" className="footer__link">info@beringia-marine.com</a>
            </li>
            <li className="footer__list-item footer__contact-item">San Luis Obispo, CA</li>
          </ul>
        </div>
      </div>
      
      <div className="footer__bottom">
        <div className="footer__credits">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Beringia Marine Technologies. All rights reserved.
          </p>
          <p className="footer__attribution">
            Art by <a href="https://www.rebeccarutstein.com" target="_blank" rel="noopener noreferrer" className="footer__link">Rebecca Rutstein</a> · 
            Website by <a href="https://linkedin.com/in/jackmalzone" target="_blank" rel="noopener noreferrer" className="footer__link">Jack Malzone</a>
          </p>
        </div>
        <div className="footer__actions">
          {!isMobile && (
            <button 
              className="footer__scroll-top" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Scroll to top"
            >
              ↑
            </button>
          )}
        </div>
      </div>
      <SeascapeDivider height={100} opacity={0.15} />
    </footer>
  )
}

export default Footer