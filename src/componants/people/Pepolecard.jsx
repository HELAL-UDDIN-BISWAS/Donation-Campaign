
const Pepolecard = ({people}) => {
    const {id,image,title,description,price}=people || {}

   const handelDonation=()=>{
    const addeddonation=[]
  const donationed= JSON.parse(localStorage.getItem('donation'))

  if(!donationed){
   addeddonation.push(people);
   localStorage.setItem('donation', JSON.stringify(addeddonation))

  }
  else{
  const isExits=donationed.find(people=>people.id == id)
if(!isExits){
    addeddonation.push(...donationed,people)
   localStorage.setItem('donation', JSON.stringify(addeddonation))
}else{
    alert("alrady i have")
}  
  }
   }



    return (
        <div className='h-screen relative'>
            <img className='h-4/5 w-screen' src={image} alt="" />
            <div className=' p-6 absolute  top-2/3 text-white bg-[#4a4949b3] w-full'>
            <button onClick={handelDonation} className=' bg-red-400 p-2'>Donate$ {price}</button>
            </div>
            
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Pepolecard;