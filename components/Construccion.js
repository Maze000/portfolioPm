import React from 'react';

const Construction = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: 'black',
    color: '#ffffff',
    fontFamily: 'Verdana, Geneva, sans-serif',
    padding: '0 5vw',
    textAlign: 'center',
  }}>
    <h1 style={{
      fontSize: '3vw', // Cambia el tamaño en función del ancho de la pantalla
      minWidth: '240px',
      maxWidth: '80vw',
      color: '#39ff14',
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
      fontWeight: 'bold',
      marginBottom: '1rem',
      textShadow: '0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14',
    }}>
      Under Construction
    </h1>
    <p style={{
      fontSize: '2vw', // Cambia el tamaño en función del ancho de la pantalla
      minWidth: '150px',
      maxWidth: '70vw',
      color: '#ff007f',
      textShadow: '0 0 5px #ff007f, 0 0 10px #ff007f',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    }}>
      Coming Soon 2024
    </p>
  </div>
);

export default Construction;





