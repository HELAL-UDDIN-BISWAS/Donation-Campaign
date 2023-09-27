import { useEffect } from "react";
import { useState } from "react";
import Donationcard from "./Donationcard";

const Donation = () => {
const [donation, setdonation]=useState([])
const [nofound, setnofound]=useState(false)

const [isShow, setisShow]=useState(false)

 useEffect(()=>{
    const donationed= JSON.parse(localStorage.getItem('donation'))
    if(donationed){
        setdonation(donationed)
    }
    else{
      setnofound("no data found")
    }
  console.log(donation)
 },[])

    return (
    <div>{nofound? <p>{nofound}</p>: <div>
      <div className="grid grid-cols-2 gap-4">

        
      {
        isShow ?  donation?.map(donation=> <Donationcard key={donation.id} donation={donation}></Donationcard> ) :
        donation?.slice(0,4).map(donation=> <Donationcard key={donation.id} donation={donation}></Donationcard> )
      } 
      </div>
      <div className="w-24  m-auto">
        {donation.length>4 &&  <button onClick={()=>setisShow(!isShow)} className="p-3 rounded-sm  bg-red-400 mt-10">{isShow?"see lase":"see more"}</button>}
     
      </div>
      

         
      </div>}</div>
    )
};

export default Donation;