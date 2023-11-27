import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Prodects from "./Prodects";
import { Toaster } from "react-hot-toast";


const Home = () => {

  const HomeProdect = useLoaderData()


    return (
        <div>
          <Banner></Banner>
          <Prodects HomeProdect={HomeProdect}></Prodects>
          <Toaster></Toaster>
        </div>
    );
};

export default Home;