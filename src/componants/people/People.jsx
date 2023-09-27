import { Link } from "react-router-dom"

const Peopless = ({Peopl}) => {
   const{id,image,title,description}=Peopl || {}
   console.log(id)
    return (
      <Link to={`/OneByPeoples/${id}`}>
        <div className="bg-red-100">
        <img src={image} alt="image"></img>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p >{description}</p>
        </div>
      </div>
      </Link>
    );
};

export default Peopless;