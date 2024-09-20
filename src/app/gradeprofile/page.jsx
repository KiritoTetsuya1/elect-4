import React from 'react';

const StudentPerformance = () => {
  const grades = [
    { date: '06/28/2024', stars: 3, grade: 3, category: 'Assessment' },
    { date: '06/28/2024', stars: 5, grade: 5, category: 'Lesson' },
    { date: '06/28/2024', stars: 3, grade: 3, category: 'Assessment' },
    { date: '06/28/2024', stars: 4, grade: 4, category: 'Assessment' },
    { date: '06/28/2024', stars: 5, grade: 5, category: 'Lesson' },
    { date: '06/28/2024', stars: 2, grade: 2, category: 'Assessment' },
  ];

  const totalGrade = grades.reduce((total, entry) => total + entry.grade, 0) / grades.length;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <button style={styles.backButton}>◀</button>
        <h2 style={styles.studentName}>Sali, Miko</h2>
        <div style={styles.profilePic}></div>
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.headerCell}>Date</th>
            <th style={styles.headerCell}>Stars</th>
            <th style={styles.headerCell}>Grade</th>
            <th style={styles.headerCell}>Category</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((entry, index) => (
            <tr key={index}>
              <td style={styles.cell}>{entry.date}</td>
              <td style={styles.cell}>
                {Array(entry.stars)
                  .fill('★')
                  .join('')}
                {Array(5 - entry.stars)
                  .fill('☆')
                  .join('')}
              </td>
              <td style={styles.cell}>{entry.grade}</td>
              <td style={styles.cell}>{entry.category}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={styles.footer}>
        <span style={styles.total}>Total: {totalGrade.toFixed(1)}</span>
        <button style={styles.sendButton}>Send</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '400px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#f7a43c', // orange background
    borderRadius: '10px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  backButton: {
    fontSize: '24px',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  studentName: {
    fontSize: '24px',
    color: '#fff',
  },
  profilePic: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#fff',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  headerCell: {
    backgroundColor: '#ffcc80',
    color: '#fff',
    padding: '10px',
    border: '1px solid #ddd',
    fontSize: '16px',
  },
  cell: {
    backgroundColor: '#ffa500',
    color: '#fff',
    padding: '10px',
    border: '1px solid #ddd',
  },
  footer: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  total: {
    fontSize: '18px',
    color: '#fff',
  },
  sendButton: {
    backgroundColor: '#ff7043',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default StudentPerformance;
