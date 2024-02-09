import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className='topbar'>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <nav className='navbar navbar-expand-sm justify-content-between'>
                <h3>Protfolio.</h3>
                <button className='navbar-toggler border-0' type='button' data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                <i className="fa-solid fa-bars"></i>
                </button>
                <div className='collapse navbar-collapse justify-content-end' id='navbarSupportedContent'>
                  <ul className='navbar-nav'>
                    <li className="nav-item mx-3">
                      <NavLink to="/" className='navlink'>Home</NavLink>
                    </li>
                    <li className="nav-item mx-3">
                      <NavLink to="/about" className='navlink'>About</NavLink>
                    </li>
                    <li className="nav-item mx-3">
                      <NavLink to="/Services" className='navlink'>Services</NavLink>
                    </li>
                    <li className="nav-item mx-3">
                      <NavLink to="/Skills" className='navlink'>Skills</NavLink>
                    </li>
                    <li className="nav-item mx-3">
                      <NavLink to="/Project" className='navlink'>Projects</NavLink>
                    </li>
                    <li className="nav-item mx-3">
                      <NavLink to="/Contact" className='navlink'>Contact</NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header