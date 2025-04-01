import { useForm } from '../../hooks/useForm'
import { withErrorHandler } from '../shared/error-handler/error-handler'
import { submitContactForm } from '../../services/contact'
import './Contact.css'
import { useState } from 'react'

interface ContactFormData extends Record<string, string> {
  name: string
  email: string
  subject: string
  message: string
}

const ContactInfo = () => (
  <div className="contact__info">
    <h2 className="contact__title">Contact Us</h2>
    <p className="contact__intro">
      Whether you have a project in mind, need expert insights, or just want to learn more about what we do, we'd love to hear from you. Fill out the form and we'll get back to you as soon as possible.
    </p>
    <p className="contact__intro">
      If you prefer, you can also reach us directly via{' '}
      <a href="mailto:info@beringia-marine.com" className="contact__link">info@beringia-marine.com</a>
      {' '}or{' '}
      <a href="tel:+18057040462" className="contact__link">+1 805 316 1417</a>.
      Let's build something great together.
    </p>
  </div>
)

const ContactFormComponent = () => {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    resetForm
  } = useForm<ContactFormData>(
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

  const onSubmit = async (data: ContactFormData) => {
    try {
      setSubmitStatus('idle')
      setSubmitMessage('')
      await submitContactForm(data)
      setSubmitStatus('success')
      setSubmitMessage('Thank you! Your message has been sent successfully.')
      resetForm()
    } catch (error) {
      setSubmitStatus('error')
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.')
      console.error('Form submission error:', error)
    }
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

      {submitStatus !== 'idle' && (
        <div className={`contact__submit-message ${submitStatus}`}>
          {submitMessage}
        </div>
      )}

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

// Wrap the form with error handling
const ContactForm = withErrorHandler(ContactFormComponent)

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