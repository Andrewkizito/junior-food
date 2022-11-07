//Importing core components
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import { routes } from "../../utils/routes";

//Importing styles
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <div className={styles.Header}>
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
