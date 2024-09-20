import React from 'react';

const GradeBook = () => {
  const students = [
    { name: 'Sali, Miko', grade: 'View Grade' },
    { name: 'Cole, Manuel', grade: 'View Grade' },
    { name: 'Dacoco, Chan', grade: 'View Grade' },
    { name: 'Labajo, Louie', grade: 'View Grade' },
    { name: 'Castilla, Justin', grade: 'View Grade' },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Grade Book</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.header}>Name</th>
            <th style={styles.header}>Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td style={styles.cell}>{student.name}</td>
              <td style={styles.cell}>
                <button style={styles.button}>{student.grade}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    width: '600px', // Increased width
    margin: '0 auto',
    padding: '40px', // Increased padding
    backgroundColor: '#f7a43c', // light orange background color
    borderRadius: '20px', // Larger rounded corners
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '48px', // Increased font size
    color: '#fff',
    marginBottom: '40px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  header: {
    backgroundColor: '#ffcc80', // header background color
    color: '#fff',
    padding: '20px', // Increased padding
    border: '2px solid #ddd', // Thicker borders
    fontSize: '24px', // Increased font size
  },
  cell: {
    backgroundColor: '#ffa500', // cell background color
    color: '#fff',
    padding: '20px', // Increased padding
    border: '2px solid #ddd', // Thicker borders
    fontSize: '22px', // Increased font size
  },
  button: {
    backgroundColor: '#ff7043',
    color: '#fff',
    border: 'none',
    padding: '10px 20px', // Increased padding
    borderRadius: '10px', // Larger rounded corners
    cursor: 'pointer',
    fontSize: '20px', // Larger font size for buttons
  },
};

export default GradeBook;
