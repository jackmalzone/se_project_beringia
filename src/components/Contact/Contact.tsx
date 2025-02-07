import { FormEvent } from 'react'
import { useForm } from '../../hooks/useForm'
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
        className="contact__link contact__link-linkedin"
      >
        Connect on LinkedIn
      </a>
    </div>
  </div>
)

const ContactForm = () => {
  const {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit
  } = useForm(
    {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    {
      name: {
        required: true,
        minLength: 2
      },
      email: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      },
      subject: {
        required: true,
        minLength: 3
      },
      message: {
        required: true,
        minLength: 10
      }
    }
  )

  const onSubmit = async (data: typeof formData) => {
    // Add form submission logic here
    console.log('Form submitted:', data)
    // You would typically make an API call here
  }

  return (
    <form className="contact__form" onSubmit={(e) => handleSubmit(onSubmit, e)}>
      <div className="contact__input-group">
        <input
          type="text"
          placeholder="Name"
          className={`contact__input ${errors.name ? 'contact__input--error' : ''}`}
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
        />
        {errors.name && <span className="contact__error">{errors.name}</span>}
      </div>

      <div className="contact__input-group">
        <input
          type="email"
          placeholder="Email"
          className={`contact__input ${errors.email ? 'contact__input--error' : ''}`}
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
        />
        {errors.email && <span className="contact__error">{errors.email}</span>}
      </div>

      <div className="contact__input-group">
        <input
          type="text"
          placeholder="Subject"
          className={`contact__input ${errors.subject ? 'contact__input--error' : ''}`}
          value={formData.subject}
          onChange={(e) => handleChange('subject', e.target.value)}
        />
        {errors.subject && <span className="contact__error">{errors.subject}</span>}
      </div>

      <div className="contact__input-group">
        <textarea
          placeholder="Message"
          className={`contact__input contact__input-textarea ${errors.message ? 'contact__input--error' : ''}`}
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
        />
        {errors.message && <span className="contact__error">{errors.message}</span>}
      </div>

      <button 
        type="submit" 
        className="contact__submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Submit'}
      </button>
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