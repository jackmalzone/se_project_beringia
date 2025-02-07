import { useState, FormEvent } from 'react'
import { useModal } from '../../contexts/ModalContext'
import './ModalContact.css'

const ModalContact = () => {
  const { closeModal } = useModal()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
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
      <form className="modal-contact__form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          required
          className="modal-contact__input"
          value={formData.name}
          onChange={e => setFormData({...formData, name: e.target.value})}
        />
        <input
          type="email"
          placeholder="Email"
          required
          className="modal-contact__input"
          value={formData.email}
          onChange={e => setFormData({...formData, email: e.target.value})}
        />
        <input
          type="text"
          placeholder="Subject"
          required
          className="modal-contact__input"
          value={formData.subject}
          onChange={e => setFormData({...formData, subject: e.target.value})}
        />
        <textarea
          placeholder="Message"
          required
          className="modal-contact__input modal-contact__input-textarea"
          value={formData.message}
          onChange={e => setFormData({...formData, message: e.target.value})}
        />
        <button type="submit" className="modal-contact__submit">Submit</button>
      </form>
    </div>
  )
}

export default ModalContact