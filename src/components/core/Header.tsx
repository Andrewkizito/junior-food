//Importing core components
import { Container } from "@mui/material";

//Importing styles
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <div className={styles.Header}>
      <Container maxWidth="lg"></Container>
    </div>
  );
};

export default Header;
