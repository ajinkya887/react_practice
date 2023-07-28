import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '1rem',
  },
};

export default Footer;
