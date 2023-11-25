import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Prodects from "./Prodects";


const Home = () => {

  const HomeProdect = useLoaderData()


    return (
        <div>
          <Banner></Banner>
          <Prodects HomeProdect={HomeProdect}></Prodects>
        </div>
    );
};

export default Home;