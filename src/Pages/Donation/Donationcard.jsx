import React from 'react';

const Donationcard = ({ donation }) => {
    const { image, title, id, price, description } = donation || {}
    return (<>
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{price}</p>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    </>
    );
};

export default Donationcard;