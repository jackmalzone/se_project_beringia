import { createContext, ReactNode } from 'react'

export interface ModalProps {
  title?: string;
  size?: 'small' | 'medium' | 'large';
  onClose?: () => void;
}

export interface ModalContextType {
  isOpen: boolean
  modalContent: ReactNode | null
  modalProps: ModalProps | null
  openModal: (content: ReactNode, props?: ModalProps) => void
  closeModal: () => void
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined) 