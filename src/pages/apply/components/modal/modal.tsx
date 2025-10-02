import React from "react";
import "./modal.css";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    //selectedMedia: string;
    title: string;
    message: string;
    isSuccess: boolean;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, message, isSuccess }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-icon" onClick={onClose}>
          &times;
        </span>
        <h2 className="modal-title" style={{ color: isSuccess ? "#38A169" : "#e53e3e" }}>
          {isSuccess ? `✅ ${title}` : `❌ ${title}`}
        </h2>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Modal;