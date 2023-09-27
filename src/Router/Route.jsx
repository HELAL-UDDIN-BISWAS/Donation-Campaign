import { createBrowserRouter } from "react-router-dom";
import Mylayout from "../Layout/Mylayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import OneByPeoples from "../Pages/OneByPeoples/OneByPeoples";



const MyRoute = createBrowserRouter([
  
        {
          path: "/",
          element: <Mylayout></Mylayout>,
          children: [
            {
              path: "/",
              element: <Home></Home>,
              loader:()=> fetch('/data.json')
            },
            {
                path:"/Donation",
                element:<Donation></Donation>
            },
            {
                path:"/Statistics",
                element:<Statistics></Statistics>
            },
            {
              path:"OneByPeoples/:id",
               element:<OneByPeoples></OneByPeoples>,
               loader:()=> fetch('/data.json'),
            }
          ],
        },
    
])

export default MyRoute;