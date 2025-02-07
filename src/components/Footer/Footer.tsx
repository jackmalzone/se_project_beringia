import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/constants'
import { clients } from '../../data'
import { SeascapeDivider } from '../SeascapeDivider/SeascapeDivider'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
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
              <li key={client.slug} className="footer__list-item">
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
            <li className="footer__list-item">
              <Link to={ROUTES.HOME} className="footer__link">Home</Link>
            </li>
            <li className="footer__list-item">
              <Link to={ROUTES.ABOUT} className="footer__link">About Us</Link>
            </li>
            <li className="footer__list-item">
              <Link to={ROUTES.CONTACT} className="footer__link">Contact</Link>
            </li>
            <li className="footer__list-item">
              <Link to={ROUTES.TERMS} className="footer__link">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        <div className="footer__column">
          <h3 className="footer__title">Contact</h3>
          <ul className="footer__list">
            <li className="footer__list-item">
              <a href="mailto:info@beringia.com" className="footer__link">info@beringia.com</a>
            </li>
            <li className="footer__list-item footer__contact-item">San Luis Obispo, CA</li>
          </ul>
        </div>
      </div>
      
      <div className="footer__bottom">
        <p className="footer__copyright">
          © {new Date().getFullYear()} Beringia Marine Technologies. All rights reserved.
        </p>
      </div>
      <SeascapeDivider height={100} opacity={0.15} />
    </footer>
  )
}

export default Footer