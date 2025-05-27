import { APPLICATION_NAME } from "../../constants/app.constants.ts";

import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="py-3">
      <div className="container d-flex align-items-center">
        <img
          src={logo}
          alt={`${APPLICATION_NAME} logo`}
          className="me-3"
          style={{ height: "50px" }}
        />
        <h1 className="h4 mb-0">{APPLICATION_NAME}</h1>
      </div>
    </header>
  );
};

export default Header;
