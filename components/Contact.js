import React, { useState } from 'react';
import './contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(null);
  const [isSending, setIsSending] = useState(false); 
  const closeStatusMessage = () => {
    setStatusMessage('');
    setIsSuccess(null);
    setIsSending(false); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true); 
    fetch('/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, subject, message }),
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    })
    .then(data => {
      setStatusMessage(data.message); 
      setIsSuccess(true);
      
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    })
    .catch(error => {
      console.error('There was an error sending the message', error);
      setStatusMessage('Error sending message'); 
      setIsSuccess(false); 
    })
    .finally(() => {
      setIsSending(false); 
    });
  };

  return (
    <div className="container-center">
      <div className="f1a2b3">
        <form onSubmit={handleSubmit}>
         
          <div>
            <label>Name</label>
            <input  placeholder='Name' type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
          </div>
          <div>
            <label>Email</label>
            <input placeholder='Email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </div>
          <div>
            <label>Subject</label>
            <input placeholder='Subject' type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required/>
          </div>
          <div>
            <label>Menssage</label>
            <textarea placeholder="let's talk" value={message} onChange={(e) => setMessage(e.target.value)} required/>
          </div>
          <div className="boton-contenedor">
            <button type="submit">Submit</button>
          </div>
          {isSending && !statusMessage && (
            <p className="sending-message">Sending message, please don't disconnect</p>
          )}
        </form>
        {statusMessage && (
          <div className={isSuccess ? 'success-message' : 'error-message'}>
            {statusMessage}
            <button onClick={closeStatusMessage} className="close-message">X</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;


