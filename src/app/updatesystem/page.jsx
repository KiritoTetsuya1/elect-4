import React from 'react';

const UpdateSystem = () => {
  const apps = [
    { title: 'ABC Learning', icon: '🅰️', buttonText: 'Update' },
    { title: 'Count & Play', icon: '🔢', buttonText: 'Update' },
    { title: 'Color Guess', icon: '🎨', buttonText: 'Update' },
  ];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <span style={styles.menuIcon}>☰</span>
        <h1 style={styles.title}>Update System</h1>
      </header>

      <div style={styles.content}>
        {apps.map((app, index) => (
          <div key={index} style={styles.appContainer}>
            <div style={styles.appIcon}>{app.icon}</div>
            <div style={styles.appInfo}>
              <h3 style={styles.appTitle}>{app.title}</h3>
            </div>
            <button style={styles.updateButton}>{app.buttonText}</button>
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
    height: '100vh', // Full viewport height
    maxWidth: '400px', // Typical Android screen width
    margin: '0 auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  menuIcon: {
    fontSize: '24px',
    position: 'absolute',
    left: '20px',
    top: '20px',
    cursor: 'pointer',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100% - 100px)', // Adjusting for the header and padding
    justifyContent: 'center',
  },
  appContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: '10px',
    borderRadius: '10px',
    marginBottom: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  appIcon: {
    fontSize: '30px',
  },
  appInfo: {
    flexGrow: 1,
    marginLeft: '10px',
  },
  appTitle: {
    fontSize: '16px',
    color: '#000',
  },
  updateButton: {
    backgroundColor: '#ff9800',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default UpdateSystem;
