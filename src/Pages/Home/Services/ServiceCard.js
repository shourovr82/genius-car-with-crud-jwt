import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const { img, price, title, _id } = service;

  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure className="px-5 py-5">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p className='text-orange-600 font-semibold text-xl '>  Price : ${price}</p>
        <div className="card-actions">
          <Link to={`/checkout/${_id}`}>
            <button className="btn btn-primary">CHECKOUT</button></Link>
        </div>
      </div>
    </div>);
};

export default ServiceCard;