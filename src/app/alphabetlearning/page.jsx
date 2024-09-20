import React from 'react';

const AlphabetLearning = () => {
  return (
    <div style={styles.container}>
      <div style={styles.letterBox}>
        <div style={styles.images}>
          <img src="letterb.png" alt="hat" style={styles.image} />
        
        </div>
      </div>
      
      <div style={styles.buttonGrid}>
        {alphabetButtons.map((letter) => (
          <button key={letter} style={styles.button}>
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
};

const alphabetButtons = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#ffe5b4', // light orange background color
  },
  letterBox: {
    border: '2px solid #000',
    borderRadius: '10px',
    padding: '20px',
    marginBottom: '20px',
    backgroundColor: '#fff',
  },
  letter: {
    fontSize: '100px',
    color: '#ff6b6b', // red color for the letter
    margin: '0',
  },
  images: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '10px',
  },
  image: {
    width: '50px',
    height: '50px',
  },
  buttonGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gap: '10px',
    maxWidth: '400px',
    margin: '0 auto',
  },
  button: {
    backgroundColor: '#d2691e', // brown-orange button color
    color: '#fff',
    padding: '10px',
    border: 'none',
    fontSize: '18px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default AlphabetLearning;
