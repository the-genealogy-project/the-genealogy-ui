import React from "react";

const Footer: React.FC<FooterProps> = ({ applicationName }) => {
  return (
    <footer className="text-center py-3 mt-auto">
      <div className="container">
        <span className="text-muted">
          {applicationName} &copy; {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
