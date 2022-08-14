import React from 'react'
import './navbar.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import { useState, useEffect } from "react";
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
      <div className="container">
        <div className="navbar__container">
          <div className="navbar__logo">
            <h3>
              <a href="#">
                Car<span>Venture.</span>
              </a>
            </h3>
          </div>

          {(isMobile || screenWidth > 898) && (
            <ul className="navbar__links">
              <li className="links">
                <a href="/">Home</a>
              </li>
              <li className="links">
                <a href="/cars">Cars</a>
              </li>
              <li className="links">
                <a href="/offers">Offers</a>
              </li>
              <li className="links">
                <a href="/locations">Locations</a>
              </li>
              <li className="links">
                <a href="/contacts">Contact</a>
              </li>
              <li className="links">
                <a href="/signup">
                  <span>Sign Up</span>
                </a>
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