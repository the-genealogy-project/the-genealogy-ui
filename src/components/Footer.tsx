import { APPLICATION_NAME } from "../constants/app.constants.ts";

const Footer = () => {
  return (
    <footer className="text-center py-3 mt-auto fixed-bottom">
      <div className="container">
        <span className="text-muted">
          {APPLICATION_NAME} &copy; {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
