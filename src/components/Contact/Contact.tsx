import { useState, FormEvent } from 'react'
import './Contact.css'

const ContactInfo = () => (
  <div className="contact__info">
    <h2 className="contact__title">Contact Us</h2>
    <div className="contact__details">
      <p className="contact__detail">
        <strong>Email:</strong> 
        <a href="mailto:info@beringia-marine.com" className="contact__link">
          info@beringia-marine.com
        </a>
      </p>
      <p className="contact__detail">
        <strong>Phone:</strong> 
        <a href="tel:+18057040462" className="contact__link">
          +1 805 704 0462
        </a>
      </p>
      <a 
        href="https://linkedin.com/company/beringia-marine" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="contact__link contact__link--linkedin"
      >
        Connect on LinkedIn
      </a>
    </div>
  </div>
)

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Add form submission logic here
    console.log('Form submitted:', formData)
  }

  return (
    <form className="contact__form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        required
        className="contact__input"
        value={formData.name}
        onChange={e => setFormData({...formData, name: e.target.value})}
      />
      <input
        type="email"
        placeholder="Email"
        required
        className="contact__input"
        value={formData.email}
        onChange={e => setFormData({...formData, email: e.target.value})}
      />
      <input
        type="text"
        placeholder="Subject"
        required
        className="contact__input"
        value={formData.subject}
        onChange={e => setFormData({...formData, subject: e.target.value})}
      />
      <textarea
        placeholder="Message"
        required
        className="contact__input contact__input--textarea"
        value={formData.message}
        onChange={e => setFormData({...formData, message: e.target.value})}
      />
      <button type="submit" className="contact__submit">Submit</button>
    </form>
  )
}

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__container">
        <div className="contact__card">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default Contact