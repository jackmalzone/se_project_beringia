import { useModal } from '../../hooks/useModal'
import { useForm } from '../../hooks/useForm'
import { withErrorHandler } from '../shared/error-handler/error-handler'
import { submitContactForm } from '../../services/contact'
import './ModalContact.css'

interface ModalContactFormData extends Record<string, string> {
  name: string
  email: string
  subject: string
  message: string
}

const ModalContactComponent = () => {
  const { close: closeModal } = useModal()
  const {
    formData,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting
  } = useForm<ModalContactFormData>(
    {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    {
      name: { 
        required: true,
        minLength: 2,
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

  const onSubmit = async (data: ModalContactFormData) => {
    try {
      await submitContactForm(data)
      closeModal()
    } catch (error) {
      console.error('Form submission error:', error)
      throw error // This will be caught by the error boundary
    }
  }

  return (
    <div className="modal-contact">
      <h2 className="modal-contact__title">Contact Us</h2>
      <p className="modal-contact__intro">
        Whether you have a project in mind, need expert insights, or just want to learn more about what we do, we'd love to hear from you. Fill out the form and we'll get back to you as soon as possible.
      </p>
      <p className="modal-contact__intro">
        If you prefer, you can also reach us directly via{' '}
        <a href="mailto:info@beringia-marine.com" className="modal-contact__link">info@beringia-marine.com</a>
        {' '}or{' '}
        <a href="tel:+18053161417" className="modal-contact__link">+1 805 316 1417</a>.
        Let's build something great together.
      </p>
      <form className="modal-contact__form" onSubmit={(e) => handleSubmit(onSubmit, e)}>
        <input
          type="text"
          placeholder="Name"
          className={`modal-contact__input ${errors.name ? 'modal-contact__input--error' : ''}`}
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
        />
        {errors.name && <div className="modal-contact__error">{errors.name}</div>}
        
        <input
          type="email"
          placeholder="Email"
          className={`modal-contact__input ${errors.email ? 'modal-contact__input--error' : ''}`}
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
        />
        {errors.email && <div className="modal-contact__error">{errors.email}</div>}
        
        <input
          type="text"
          placeholder="Subject"
          className={`modal-contact__input ${errors.subject ? 'modal-contact__input--error' : ''}`}
          value={formData.subject}
          onChange={(e) => handleChange('subject', e.target.value)}
        />
        {errors.subject && <div className="modal-contact__error">{errors.subject}</div>}
        
        <textarea
          placeholder="Message"
          className={`modal-contact__input modal-contact__input-textarea ${errors.message ? 'modal-contact__input--error' : ''}`}
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
        />
        {errors.message && <div className="modal-contact__error">{errors.message}</div>}
        
        <button 
          type="submit" 
          className="modal-contact__submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </div>
  )
}

// Wrap the component with error handling
const ModalContact = withErrorHandler(ModalContactComponent)

export default ModalContact