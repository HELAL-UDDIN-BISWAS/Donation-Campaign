
import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Peoples from "../../componants/Peoples/Peoples";
const Home = () => {

 const People=useLoaderData();
    return (
      <div>
        <div className="">
          <Banner></Banner>
          </div>
         
          <div className="flex">
             <Peoples People={People}></Peoples>
          </div>
          </div>
    );
};

export default Home;