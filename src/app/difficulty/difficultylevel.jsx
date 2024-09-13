import React from 'react';

const DifficultyLevel = () => {
  return (
    <div style={styles.container}>
      <h2>Select Difficulty</h2>
      <button style={styles.easy}>Easy</button>
      <button style={styles.normal}>Normal</button>
      <button style={styles.hard}>Hard</button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  easy: {
    backgroundColor: 'green',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    margin: '10px',
    cursor: 'pointer',
    fontSize: '18px',
  },
  normal: {
    backgroundColor: 'orange',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    margin: '10px',
    cursor: 'pointer',
    fontSize: '18px',
  },
  hard: {
    backgroundColor: 'red',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    margin: '10px',
    cursor: 'pointer',
    fontSize: '18px',
  },
};

export default DifficultyLevel;
