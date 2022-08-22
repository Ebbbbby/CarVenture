import React from 'react';
import Hero from '../../../images/HeroBG.png';
import './banner.css'
import BannerLabel from './BannerLabel';
import PickUp from './PickUp';
import ReturnDate from './ReturnDate';


const Banner = () => {
  return (
    <section className="banner__wrapper">
      <div className="container">
        <div className="banner__container">
          <img src={Hero} alt="" className="banner" />
          <div className="banner__text">
            <h1>
              Renting cars have
              <br />
              never been this easy
            </h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
        </div>
        <div className="container__padding banner__inputs">
          <BannerLabel />
          <PickUp />
          <ReturnDate/>
        </div>
      </div>
    </section>
  );
}

export default Banner