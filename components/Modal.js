import React from "react";
import "./Modal.css"; 

const Modal = ({ isOpen, onClose, description, imgDes }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>&times;</span>
        <img  className="imgModal" src={imgDes} alt="Skill 1" />
        <div className="dm">{description}</div>
      </div>
    </div>
  );
};

export default Modal;