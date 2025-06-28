function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <p>&copy; {currentYear} My Awesome Website. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
