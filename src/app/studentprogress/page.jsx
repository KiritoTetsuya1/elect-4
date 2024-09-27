import React from 'react';

const StudentProgress = () => {
  const progressData = [
    { title: 'Count & Play', score: 20, maxScore: 100 },
    { title: 'Guess the Color', score: 85, maxScore: 100 },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Student Progress</h1>
      <div style={styles.tabs}>
        <span style={styles.activeTab}>Assessment</span>
        <span style={styles.inactiveTab}>Today</span>
        <span style={styles.inactiveTab}>Weekly Progress</span>
      </div>
      <div style={styles.content}>
        {progressData.map((item, index) => (
          <div key={index} style={styles.progressContainer}>
            <div style={styles.title}>{item.title}</div>
            <div style={styles.progressBarBackground}>
              <div
                style={{
                  ...styles.progressBarFill,
                  width: `${(item.score / item.maxScore) * 100}%`,
                }}
              ></div>
            </div>
            <span style={styles.score}>{item.score}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#ffcc80', // Same orange background
    padding: '20px',
    borderRadius: '10px',
    fontFamily: 'Arial, sans-serif',
    width: '100%',
    maxWidth: '400px', // Max width for mobile-like appearance
    height: '600px', // Increased height for a longer UI
    margin: '0 auto', // Centered on the screen
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  header: {
    fontSize: '24px',
    color: '#fff',
    textAlign: 'center',
    marginBottom: '20px',
  },
  tabs: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '30px', // Added more space below the tabs
  },
  activeTab: {
    color: '#00ff44', // Green for active tab
    fontWeight: 'bold',
  },
  inactiveTab: {
    color: '#fff',
    opacity: 0.7,
  },
  content: {
    flexGrow: 1,
    overflowY: 'scroll', // Allows scrolling for more content
  },
  progressContainer: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    padding: '15px',
    marginBottom: '20px', // More margin to space out items vertically
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#000',
  },
  progressBarBackground: {
    backgroundColor: '#ddd',
    height: '12px',
    width: '140px', // Extended width for the progress bar
    borderRadius: '5px',
    margin: '0 10px',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#00ff44', // Green fill for progress
    borderRadius: '5px',
  },
  score: {
    fontSize: '16px',
    color: '#000',
  },
};

export default StudentProgress;
