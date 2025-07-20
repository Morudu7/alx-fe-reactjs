function Footer() {
  const footerStyle = {
    backgroundColor: '#333',
    color: 'white',
    padding: '10px',
    textAlign: 'center',
    position: 'relative',
    bottom: '0',
    width: '100%',
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; 2025 My Company. All rights reserved.</p>
    </footer>
  );
}

export default Footer;