import { useModal } from '../../contexts/ModalContext'
import './Modal.css'

interface ModalProps {
  title?: string;
  size?: 'small' | 'medium' | 'large';
  onClose?: () => void;
}

const Modal = () => {
  const { isOpen, closeModal, modalContent, modalProps } = useModal()

  if (!isOpen) return null

  const { title, size = 'medium' } = modalProps as ModalProps

  return (
    <div className="modal">
      <div className="modal__overlay" onClick={closeModal}>
        <div className={`modal__content modal__content--${size}`} onClick={(e) => e.stopPropagation()}>
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