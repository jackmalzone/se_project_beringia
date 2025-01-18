import { useModal } from '../../contexts/ModalContext'
import './Modal.css'

const Modal = () => {
  const { isOpen, closeModal, modalContent } = useModal()

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={closeModal}>
          ×
        </button>
        {modalContent}
      </div>
    </div>
  )
}

export default Modal