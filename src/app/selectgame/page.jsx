import React from 'react';

const StudentAssessment = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Student Assessment</h2>
      <button style={styles.easy}>Easy</button>

      <div style={styles.unlocked}>ABC's Learning</div>

      <div style={styles.locked}>
        <span style={styles.lockedText}>Color Guess</span>
        <span style={styles.lockIcon}>🔒</span>
      </div>

      <div style={styles.locked}>
        <span style={styles.lockedText}>Count Play</span>
        <span style={styles.lockIcon}>🔒</span>
      </div>

      <div style={styles.locked}>
        <span style={styles.lockedText}>Color Matching</span>
        <span style={styles.lockIcon}>🔒</span>
      </div>

      <div style={styles.locked}>
        <span style={styles.lockedText}>Guess the Numbers</span>
        <span style={styles.lockIcon}>🔒</span>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    backgroundColor: '#f7c77b', // background color based on the screenshot
    padding: '20px',
    borderRadius: '10px',
    width: '300px',
    margin: '0 auto',
  },
  title: {
    color: '#fff',
    backgroundColor: '#ff6363',  // orange-red background for the header
    fontSize: '24px',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '20px',
  },
  easy: {
    backgroundColor: 'green',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    margin: '10px',
    cursor: 'pointer',
    fontSize: '18px',
    borderRadius: '5px',
  },
  unlocked: {
    backgroundColor: '#ffffff',
    color: '#000',
    padding: '10px 20px',
    border: '2px solid #ddd',
    margin: '10px',
    fontSize: '18px',
    borderRadius: '5px',
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
    borderRadius: '5px',
  },
  lockedText: {
    flexGrow: 1,
  },
  lockIcon: {
    marginLeft: '10px',
    fontSize: '18px',
  },
};

export default StudentAssessment;
