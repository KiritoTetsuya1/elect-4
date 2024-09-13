import React from 'react';

function ActivateLesson() {
  return (
    <div style={styles.container}>
      {/* Header with Menu and Settings Icon */}
      <div style={styles.header}>
        <div style={styles.icon}>☰</div>
        <h1 style={styles.title}>Activate<br />Lesson</h1>
        <div style={styles.icon}>⚙️</div>
      </div>

      {/* Lesson Grid */}
      <div style={styles.grid}>
        <div style={styles.lessonItem}>
          <img
            src="lesson1.png"  // Replace with the actual path to your image
            alt="Lesson 1"
            style={styles.image}
          />
        </div>
        <div style={styles.lessonItem}>
          <img
            src="lesson2.png"  // Replace with the actual path to your image
            alt="Lesson 2"
            style={styles.image}
          />
        </div>
        <div style={styles.lessonItem}>
          <img
            src="lesson3.png"  // Replace with the actual path to your image
            alt="Lesson 3"
            style={styles.image}
          />
        </div>
      </div>
    </div>
  );
}

// Inline styles for the JSX component
const styles = {
  container: {
    backgroundColor: '#FFCC66',
    width: '300px',
    padding: '20px',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: 'auto',
    marginTop: '50px',
    textAlign: 'center',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  icon: {
    fontSize: '24px',
    cursor: 'pointer',
  },
  title: {
    fontSize: '22px',
    fontWeight: 'bold',
    lineHeight: '1.2',
    color: 'white',
    textAlign: 'center',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '20px',
  },
  lessonItem: {
    position: 'relative',
  },
  image: {
    width: '100%',
    borderRadius: '10px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
  },
};

export default ActivateLesson;
