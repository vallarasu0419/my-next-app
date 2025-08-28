import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      © {new Date().getFullYear()} My App. All rights reserved.
    </footer>
  );
};

export default Footer;
