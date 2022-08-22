import React from 'react'
import './navbar.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import { useState, useEffect } from "react";
import {  Link } from "react-router-dom";
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(()=>{
    const changeWidth = () =>{
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener('resize', changeWidth)

    return () =>{
      window.removeEventListener('resize', changeWidth)
    }
  }, [])
  return (
    <section className="nav__wrapper">
      <div className="container__padding">
        <div className="navbar__container">
          <div className="navbar__logo">
            <h3>
              <a href="/logo">
                Car<span>Venture.</span>
              </a>
            </h3>
          </div>

          {(isMobile || screenWidth > 898) && (
            <ul className="navbar__links">
              <li className="links">
                <Link to="/">Home</Link>
              </li>
              <li className="links">
                <Link to="/cars">Cars</Link>
              </li>
              <li className="links">
                <Link to="/offers">Offers</Link>
              </li>
              <li className="links">
                <Link to="/locations">Locations</Link>
              </li>
              <li className="links">
                <Link to="/contacts">Contact</Link>
              </li>
              <li className="links">
                <Link to="/login">
                  <span>Sign Up</span>
                </Link>
              </li>
            </ul>
          )}

          <GiHamburgerMenu
            className="hamburger"
            onClick={() => {
              setIsMobile(!isMobile);
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Navbar