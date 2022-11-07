//Importing helper functions
import { Grid } from "@mui/material";
import classNames from "classnames";
import { welcome_slots } from "../../../utils/data";

//Importing core components

//Importing styles
import styles from "../styles.module.scss";

const Welcome = () => {
  return (
    <div className={classNames(styles.Welcome, "center")}>
      <div className={classNames(styles.content, "center-row")}>
        <img
          className={styles.Image}
          src="/images/burger-banner.png"
          alt="burger"
        />
        <div className={styles.info}>
          <h1>
            HEALTHY DELICIOUS MEALS <span>AT AFFORDABLE</span> PRICES.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
            dictum quam, a elementum magna. Donec non interdum tortor. Ut cursus
            tristique metus. Maecenas ultrices venenatis neque id pellentesque.{" "}
          </p>
          <Grid container spacing={3} justifyContent="center">
            {welcome_slots.map((item, i) => (
              <Grid item xs={12} sm={4} key={i}>
                <div className={classNames(styles.item, "center")}>
                  <div dangerouslySetInnerHTML={{ __html: item.icon }} />
                  <h4>{item.title}</h4>
                </div>
              </Grid>
            ))}
            <Grid item xs={12}>
              <button className={styles.meals}>Already Hungry</button>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
