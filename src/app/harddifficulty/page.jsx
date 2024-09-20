import React from 'react';

const ColorMatchingHard = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Color Guess</h2>
      <button style={styles.hard}>Hard</button>

      <div style={styles.unlocked}>Color matching</div>

      <div style={styles.locked}>
        <span style={styles.lockedText}>Color matching</span>
        <span style={styles.lockIcon}>🔒</span>
      </div>

      <div style={styles.locked}>
        <span style={styles.lockedText}>Color matching</span>
        <span style={styles.lockIcon}>🔒</span>
      </div>

      <div style={styles.locked}>
        <span style={styles.lockedText}>Color matching</span>
        <span style={styles.lockIcon}>🔒</span>
      </div>

      <div style={styles.locked}>
        <span style={styles.lockedText}>Color matching</span>
        <span style={styles.lockIcon}>🔒</span>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    backgroundColor: '#f7c77b', // same background color as the easy and medium pages
    padding: '20px',
    borderRadius: '10px',
    width: '300px',
    margin: '0 auto',
  },
  title: {
    color: '#ff6363',
    fontSize: '24px',
    marginBottom: '20px',
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
  unlocked: {
    backgroundColor: '#ffffff',
    color: '#000',
    padding: '10px 20px',
    border: '2px solid #ddd',
    margin: '10px',
    fontSize: '18px',
  },
  locked: {
    backgroundColor: 'grey',
    color: 'black',
    padding: '10px 20px',
    border: '2px solid #ddd',
    margin: '10px',
    fontSize: '18px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    opacity: 0.6,
  },
  lockedText: {
    flexGrow: 1,
  },
  lockIcon: {
    marginLeft: '10px',
    fontSize: '18px',
  },
};

export default ColorMatchingHard;
