import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './Images/myphoto.png';

const Home = () => {
  return (
    <>
      <div className='homepage'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='allCer'>
              <h4>Hello, It's Me</h4>
              <h1>Jitu Mistry</h1>
              <h4>And I'm a <span>Full Stack Developer</span></h4>
              <p>Passionate MERN Stack Developer | HTML, CSS, JavaScript, React, MongoDB | Ready to Contribute to Opportunities | Quick Learner | Ready to Start Now</p>
              <button className='btn btn-c rounded-5'><span>Download Resume</span></button>
              </div>
              <div className='socialfix'>
              <ul className='social'>
                <li>
                  <NavLink to='https://www.linkedin.com/in/jitu-mistry'><i className="fa-brands fa-facebook"></i></NavLink>
                </li>
                <li>
                  <NavLink to='https://www.linkedin.com/in/jitu-mistry'><i className="fa-brands fa-twitter"></i></NavLink>
                </li>
                <li>
                  <NavLink to='https://www.linkedin.com/in/jitu-mistry'><i className="fa-brands fa-instagram"></i></NavLink>
                </li>
                <li>
                  <NavLink to='https://www.linkedin.com/in/jitu-mistry'><i className="fa-brands fa-linkedin"></i></NavLink>
                </li>
              </ul>
              </div>
            </div>
            <div className='col-md-6'>
              <img src={logo} alt='my' className='img-fluid' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home