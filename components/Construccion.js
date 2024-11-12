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
    padding: '0 2rem', // Espacio para evitar que el texto se corte en pantallas pequeñas
    textAlign: 'center',
  }}>
    <h1 style={{
      fontSize: 'clamp(2.5rem, 5vw, 4rem)', // Responsivo: cambia entre 2.5rem y 4rem
      color: '#39ff14', // verde neón para el título
      textTransform: 'uppercase',
      letterSpacing: '0.2em', // Ajusta el espaciado de letras
      fontWeight: 'bold',
      marginBottom: '2rem',
      textShadow: '0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14',
    }}>
      Under Construction
    </h1>
    <p style={{
      fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', // Responsivo: cambia entre 1rem y 1.5rem
      color: '#ff007f', // rosa neón para la fecha de lanzamiento
      textShadow: '0 0 5px #ff007f, 0 0 10px #ff007f',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    }}>
      Coming Soon 2024
    </p>
  </div>
);

export default Construction;




