import React from 'react';

const Construction = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: 'black', // fondo oscuro minimalista
    color: '#ffffff',
    fontFamily: 'Verdana, Geneva, sans-serif',
  }}>
    <h1 style={{
      fontSize: '4rem',
      color: '#39ff14', // verde neón para el título
      textTransform: 'uppercase',
      letterSpacing: '10px',
      fontWeight: 'bold',
      marginBottom: '2rem',
      textShadow: '0 0 10px #39ff14, 0 0 1px #39ff14, 0 0 1px #39ff14',
    }}>
      Under Construction
    </h1>
    <p style={{
      fontSize: '1.2rem',
      color: '#ff007f', // rosa neón para la fecha de lanzamiento
      textShadow: '0 0 5px #ff007f, 0 0 10px #ff007f',
      textTransform: 'uppercase',
      letterSpacing: '2px',
    }}>
      Coming Soon 2024
    </p>
  </div>
);

export default Construction;



