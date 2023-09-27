import React, { useEffect, useState } from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import Pepolecard from '../../componants/people/Pepolecard';

const OneByPeoples = () => {

    const [people, setpeople]=useState({})
    const {id}= useParams();

    const peoples= useLoaderData()
   
useEffect(()=>{
   const findpeoples=peoples?.find(people=>people.id == id)
   setpeople(findpeoples)

},[id,peoples])

    return (
        <div>
            {
                <Pepolecard people={people}></Pepolecard>
            }
        </div>
    );
};

export default OneByPeoples;