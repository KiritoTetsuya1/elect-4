import React from 'react';

const CreateLesson = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <span style={styles.menuIcon}>☰</span>
        <h1 style={styles.title}>Create Lesson</h1>
      </header>

      <div style={styles.content}>
        <div style={styles.imagePlaceholder}></div>

        <div style={styles.inputGroup}>
          <input style={styles.input} type="text" placeholder="Set Title" />
          <button style={styles.editButton}>✏️ Edit</button>
        </div>

        <div style={styles.inputGroup}>
          <input style={styles.input} type="text" placeholder="Set Rules & Guidelines" />
        </div>

        <button style={styles.createButton}>Create</button>
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
    maxWidth: '400px',
    height: '100vh',
    margin: '0 auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  menuIcon: {
    fontSize: '24px',
    marginRight: '10px',
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
    alignItems: 'center',
  },
  imagePlaceholder: {
    width: '150px',
    height: '150px',
    backgroundColor: '#ddd',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  inputGroup: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
    width: '100%',
  },
  input: {
    flexGrow: 1,
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    marginRight: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
  },
  editButton: {
    padding: '10px',
    backgroundColor: '#ff9800',
    border: 'none',
    borderRadius: '5px',
    color: '#fff',
    cursor: 'pointer',
  },
  createButton: {
    backgroundColor: '#ff9800',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    color: '#fff',
    cursor: 'pointer',
    width: '100%',
    textAlign: 'center',
  },
};

export default CreateLesson;
