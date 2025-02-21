import { useModal } from '../../contexts/ModalContext'
import { useForm } from '../../hooks/useForm'
import './ModalContact.css'

const ModalContact = () => {
  const { closeModal } = useModal()
  const {
    formData,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting
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

  const onSubmit = async (data: typeof formData) => {
    console.log('Form submitted:', data)
    closeModal()
  }

  return (
    <div className="modal-contact">
      <h2 className="modal-contact__title">Contact Us</h2>
      <div className="modal-contact__details">
        <p className="modal-contact__detail">
          <strong>Email:</strong> 
          <a href="mailto:info@beringia-marine.com" className="modal-contact__link">
            info@beringia-marine.com
          </a>
        </p>
        <p className="modal-contact__detail">
          <strong>Phone:</strong> 
          <a href="tel:+18057040462" className="modal-contact__link">
            +1 805 704 0462
          </a>
        </p>
      </div>
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

export default ModalContact