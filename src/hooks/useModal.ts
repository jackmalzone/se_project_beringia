import { useState, useCallback } from 'react';

interface ModalProps {
  title?: string;
  size?: 'small' | 'medium' | 'large';
  onClose?: () => void;
}

interface UseModalReturn {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  modalContent: React.ReactNode;
  modalProps: ModalProps;
  setModalContent: (content: React.ReactNode) => void;
  setModalProps: (props: ModalProps) => void;
}

export const useModal = (initialState = false): UseModalReturn => {
  const [isOpen, setIsOpen] = useState(initialState);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);
  const [modalProps, setModalProps] = useState<ModalProps>({});

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen(prev => !prev), []);

  return {
    isOpen,
    open,
    close,
    toggle,
    modalContent,
    modalProps,
    setModalContent,
    setModalProps
  };
}; 