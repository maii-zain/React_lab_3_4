import React from 'react';

const HomePage = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <h1 style={{ fontSize: '2em', textAlign: 'center' }}>
        Welcome to our Movie Site
        <span
          style={{
            animation: 'degrade 1s linear infinite alternate',
            color: 'red',
            textShadow: '2px 2px 5px rgba(255, 0, 0, 0.5)',
          }}
        >
          !
        </span>
      </h1>
      <style>
        {`
          @keyframes degrade {
            from {
              color: red;
              text-shadow: 2px 2px 5px rgba(255, 0, 0, 0.5);
            }
            to {
              color: yellow;
              text-shadow: 2px 2px 5px rgba(255, 255, 0, 0.5);
            }
          }
        `}
      </style>
    </div>
  );
};

export default HomePage;
