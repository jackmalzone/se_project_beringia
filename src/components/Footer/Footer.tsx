import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/constants'
import { clients } from '../../data'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
      <div className="footer__content">
        <div className="footer__column">
          <h3 className="footer__title">About Beringia</h3>
          <p className="footer__text">
            Providing experience and passion necessary for increasing our knowledge of the oceans.
            <Link to={ROUTES.ABOUT} className="footer__text-link"> Learn more →</Link>
          </p>
        </div>

        <div className="footer__column">
          <h3 className="footer__title">Solutions</h3>
          <ul className="footer__list">
            {Object.values(clients).map(client => (
              <li key={client.slug}>
                <Link to={ROUTES.CLIENT(client.slug)} className="footer__link">
                  {client.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__column">
          <h3 className="footer__title">Quick Links</h3>
          <ul className="footer__list">
            <li><Link to={ROUTES.HOME} className="footer__link">Home</Link></li>
            <li><Link to={ROUTES.ABOUT} className="footer__link">About Us</Link></li>
            <li><Link to={ROUTES.CONTACT} className="footer__link">Contact</Link></li>
            <li><Link to={ROUTES.TERMS} className="footer__link">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div className="footer__column">
          <h3 className="footer__title">Contact</h3>
          <ul className="footer__list">
            <li className="footer__contact-item">
              <a href="mailto:info@beringia.com" className="footer__link">info@beringia.com</a>
            </li>
            <li className="footer__contact-item">San Luis Obispo, CA</li>
          </ul>
        </div>
      </div>
      
      <div className="footer__bottom">
        <p className="footer__copyright">
          © {new Date().getFullYear()} Beringia Marine Technologies. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer