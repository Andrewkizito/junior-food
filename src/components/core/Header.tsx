//Importing helper functions
import classNames from "classnames";
import { useState, useEffect } from "react";

//Importing core components
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import { routes } from "../../utils/routes";

//Importing styles
import styles from "./styles.module.scss";

const Header = () => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setHeight(window.scrollY);
    });

    return window.removeEventListener("scroll", () => console.log("removed"));
  }, []);

  return (
    <div
      className={classNames(styles.Header, height > 80 ? styles.sticky : "")}
    >
      <Container maxWidth="lg">
        <div className={styles.box}>
          <img src={"/logo.png"} alt="Logo" />
          <ul>
            {routes.map((item, i) => (
              <li key={i}>
                <Link to={item.pathname}>{item.title}</Link>
              </li>
            ))}
            <li>
              <button className={styles.sign_in}>Sign In</button>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Header;
