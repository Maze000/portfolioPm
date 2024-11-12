import React from 'react';

const Construction = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#0a0a0a', // un fondo oscuro para el efecto neon
    color: '#ffffff',
    fontFamily: 'Arial, Helvetica, sans-serif',
    overflow: 'hidden',
  }}>
    <h1 style={{
      fontSize: '4rem',
      color: '#00ffe7', // un color neón azul claro
      textTransform: 'uppercase',
      letterSpacing: '10px',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
      textShadow: '0 0 10px #00ffe7, 0 0 20px #00ffe7, 0 0 30px #ff00ff, 0 0 40px #ff00ff, 0 0 50px #ff00ff',
    }}>
      Under Construction
    </h1>
    <p style={{
      fontSize: '1.2rem',
      color: '#b3f5ff', // un tono azul neón más suave
      textAlign: 'center',
      maxWidth: '700px',
      lineHeight: '1.8',
      fontStyle: 'italic',
      textShadow: '0 0 5px #00ffe7, 0 0 10px #ff00ff',
    }}>
      Crafting a unique experience for you. Stay tuned for the future of digital worlds.
    </p>
    <div style={{
      marginTop: '2rem',
      padding: '1rem 3rem',
      borderRadius: '30px',
      fontSize: '1rem',
      color: '#ff00ff',
      border: '2px solid #ff00ff',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textShadow: '0 0 5px #ff00ff, 0 0 10px #ff00ff',
    }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = '#ff00ff';
        e.currentTarget.style.color = '#0a0a0a';
        e.currentTarget.style.textShadow = 'none';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent';
        e.currentTarget.style.color = '#ff00ff';
        e.currentTarget.style.textShadow = '0 0 5px #ff00ff, 0 0 10px #ff00ff';
      }}
    >
      Notify Me
    </div>
  </div>
);

export default Construction;


