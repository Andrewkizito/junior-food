import Layout from "../../components/core/Layout";
import Meals from "./sections/Meals";
import Welcome from "./sections/Welcome";

const Home = () => {
  return (
    <Layout>
      <>
        <Welcome />
        <Meals />
      </>
    </Layout>
  );
};

export default Home;
