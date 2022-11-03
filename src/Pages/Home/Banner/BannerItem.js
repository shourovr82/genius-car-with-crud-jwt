import React from 'react';
import './BannerItem.css'

const BannerItem = ({ slide }) => {
  const { image, prev, id, next } = slide;
  return (

    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className='carousel-img'>
        <img src={image} className="w-full rounded-2xl" alt='' />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4 gap-5">
        <h2 className='text-6xl font-bold text-white'>
          Affordable <br />
          Price for Car <br />
          Servicing
        </h2>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/2 gap-5 w-1/2">
        <p className='text-white text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
      </div>
      <div className="absolute flex justify-start  transform -translate-y-1/2 left-24  top-3/4 gap-5 w-1/2">
        <button className="btn btn-outline btn-warning rounded-md">Warning</button>
        <button className="btn rounded-md btn-warning">Warning</button>
      </div>
      <div className="absolute  flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
        <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
        <a href={`#slide${next}`} className="btn btn-circle">❯</a>
      </div>
    </div>

  );
};

export default BannerItem;