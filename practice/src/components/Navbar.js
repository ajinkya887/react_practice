import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>My Website</div>
      <ul style={styles.navLinks}>
        <li style={styles.linkItem}>Home</li>
        <li style={styles.linkItem}>About</li>
        <li style={styles.linkItem}>Services</li>
        <li style={styles.linkItem}>Contact</li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#333',
    color: '#fff',
    padding: '1rem',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
  },
  linkItem: {
    marginLeft: '1rem',
    cursor: 'pointer',
  },
};

export default Navbar;
