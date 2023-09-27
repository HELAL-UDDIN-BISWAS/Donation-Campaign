import { Outlet } from "react-router-dom";
import Navber from "../componants/header/navber/Navber";
import Donation from "../Pages/Donation/Donation";

const Mylayout = () => {
    return (
        <div  className="max-w-[1280px] mx-auto">
       <Navber></Navber>
      
        <Outlet>
        <Donation></Donation>
        </Outlet>
        </div>
    );
};

export default Mylayout;