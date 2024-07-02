import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Count from "./Count/Count";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex flex-col justify-center">
      <Helmet>
        <title>Tanveer Ahmed || Home</title>
      </Helmet>
      <Banner />
      <Count />
    </div>
  );
};

export default Home;
