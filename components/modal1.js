
import React, { useState } from 'react';
import Modal from './Modal';
import './cool.css';

function Modal1({description,imgDes}) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <button className="cool-button" onClick={() => setModalOpen(true)}>Description</button>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} description={description} imgDes={imgDes}/>
    </div>
  );
}

export default Modal1;
