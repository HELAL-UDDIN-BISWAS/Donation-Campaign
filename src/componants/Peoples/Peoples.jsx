import Peopless from "../people/People";

const Peoples = ({People}) => {
    // console.log(People)
    return (
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-2 mt-7">
            {
                People?.map(Peopl=> <Peopless Peopl={Peopl}></Peopless> )
               
            }
        </div>
    );
};

export default Peoples;
