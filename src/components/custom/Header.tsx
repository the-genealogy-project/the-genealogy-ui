import React from "react";

const Header: React.FC<HeaderProps> = ({ logo, applicationName }) => {
  return (
    <header className="py-3">
      <div className="container d-flex align-items-center">
        <img
          src={logo}
          alt="The Genealogy Project logo"
          className="me-3"
          style={{ height: "50px" }}
        />
        <h1 className="h4 mb-0">{applicationName}</h1>
      </div>
    </header>
  );
};

export default Header;
