import React from "react";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} My Awesome Website. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
