import { useContext } from 'react'
import { ModalContext } from '../../contexts/definitions/modalContext'
import './Modal.css'

const Modal = () => {
  const modalContext = useContext(ModalContext)

  if (!modalContext || !modalContext.isOpen) return null

  const { modalContent, modalProps, closeModal } = modalContext
  const { title, size = 'medium' } = modalProps || {}

  return (
    <div className="modal">
      <div className="modal__overlay" onClick={closeModal}>
        <div className={`modal__content modal__content-${size}`} onClick={(e) => e.stopPropagation()}>
          <button className="modal__close" onClick={closeModal}>
            ×
          </button>
          {title && <h2 className="modal__title">{title}</h2>}
          <div className="modal__body">
            {modalContent}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal