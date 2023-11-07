import React, { ReactNode, MouseEventHandler } from 'react';

interface ModalProps {
  onClose: (event: React.MouseEvent<Element, MouseEvent>) => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  const closeModal = (e: React.MouseEvent<Element, MouseEvent>) => {
    onClose(e);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
      <div className="z-50 bg-white p-6 rounded-lg shadow-lg">
        {children}
        <button
          className="bg-primary text-white px-3 py-1 rounded hover:bg-primary"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
