
import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Peoples from "../../componants/Peoples/Peoples";
const Home = () => {

 const People=useLoaderData();
//  console.log(Peopless)

    return (
      <div>
        <div className="h-[50vh] bg-red-200">
          <Banner></Banner>
          </div>
          <div className="flex">
             <Peoples People={People}></Peoples>
          </div>
          </div>
    );
};

export default Home;