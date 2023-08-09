import "./styles.css";
import "./Footer.css";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <h3> Petrus Eskelinen</h3>
      <div className="footer-sections">
        <div className="footer-left">
          <p> petrus.eskelinen@protonmail.com</p>
          <p> +358 45 890 6601 </p>
        </div>
        <div className="footer-right">
          <Link className="footer-link" to="/PetrusEskelinen">
            <p className="footer-link-text">Projects</p>{" "}
          </Link>
          <Link className="footer-link " to="/PetrusEskelinen/resume">
            {" "}
            <p className="footer-link-text">Resume</p>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
