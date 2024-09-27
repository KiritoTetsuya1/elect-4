import React from 'react';

const WeeklyProgress = () => {
  const progressData = [
    { title: 'ABC Learning', time: '7:00 AM', score: 100, color: '#00ff44' },
    { title: 'Count & Play', time: '8:23 AM', score: 60, color: '#ffc107' },
    { title: 'Guess the Color', time: '10:06 AM', score: 10, color: '#ff443a' },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span style={styles.menuIcon}>☰</span>
        <h1 style={styles.title}>Student Progress</h1>
        <span style={styles.settingsIcon}>⚙️</span>
      </div>

      <div style={styles.tabs}>
        <span style={styles.tab}>Assessment</span>
        <span style={styles.tab}>Today</span>
        <span style={styles.activeTab}>Weekly Progress</span>
      </div>

      <div style={styles.dateContainer}>
        <h2 style={styles.dateText}>Weekly Progress</h2>
        <div style={styles.circularProgress}>
          <div style={styles.progressCircle}>
            <span style={styles.progressPercentage}>80%</span>
          </div>
        </div>
      </div>

      <h3 style={styles.progressTitle}>History Progress ▼</h3>
      <div style={styles.content}>
        {progressData.map((item, index) => (
          <div key={index} style={styles.progressContainer}>
            <div style={styles.iconPlaceholder}></div>
            <div style={styles.info}>
              <div style={styles.taskTitle}>{item.title}</div>
              <div style={styles.taskTime}>Today {item.time}</div>
            </div>
            <div style={styles.progressBarBackground}>
              <div
                style={{
                  ...styles.progressBarFill,
                  width: `${item.score}%`,
                  backgroundColor: item.color,
                }}
              ></div>
            </div>
            <span style={styles.taskScore}>{item.score}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#ffcc80',
    padding: '20px',
    borderRadius: '20px',
    fontFamily: 'Arial, sans-serif',
    width: '100%',
    maxWidth: '400px',
    height: '700px',
    margin: '0 auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  menuIcon: {
    fontSize: '24px',
    cursor: 'pointer',
  },
  title: {
    fontSize: '24px',
    color: '#fff',
  },
  settingsIcon: {
    fontSize: '24px',
    cursor: 'pointer',
  },
  tabs: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '20px',
  },
  tab: {
    color: '#fff',
    opacity: 0.7,
  },
  activeTab: {
    color: '#00ff44',
    fontWeight: 'bold',
  },
  dateContainer: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  dateText: {
    fontSize: '20px',
    color: '#fff',
  },
  circularProgress: {
    display: 'flex',
    justifyContent: 'center',
    margin: '10px 0',
  },
  progressCircle: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    border: '8px solid #00ff44', // Green border for 80% progress
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressPercentage: {
    fontSize: '24px',
    color: '#fff',
  },
  progressTitle: {
    fontSize: '18px',
    color: '#fff',
    marginBottom: '10px',
  },
  content: {
    flexGrow: 1,
  },
  progressContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '10px',
    marginBottom: '10px',
  },
  iconPlaceholder: {
    width: '40px',
    height: '40px',
    backgroundColor: '#ddd',
    borderRadius: '5px',
  },
  info: {
    flex: 1,
    marginLeft: '10px',
  },
  taskTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#000',
  },
  taskTime: {
    fontSize: '12px',
    color: '#999',
  },
  progressBarBackground: {
    backgroundColor: '#ddd',
    height: '10px',
    width: '100px',
    borderRadius: '5px',
    margin: '0 10px',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: '5px',
  },
  taskScore: {
    fontSize: '14px',
    color: '#000',
  },
};

export default WeeklyProgress;
