import React from 'react'
import { NavLink } from 'react-router-dom';

const Services = () => {
  return (
    <div className='service'>
      <div className='container'>
        <div className='row'>
          <h1>My <span>Services</span></h1>
          <div className='col-md-4'>
            <div className='card'>
              <div className='card-body'>
                <span><i className="fa-solid fa-code fa-2xl"></i></span>
                <h4>Frontend Developer</h4>
                <p>
                  As a frontend developer versed in HTML, CSS, JavaScript, Bootstrap, jQuery, and React.js, I craft responsive, user-centric interfaces. Leveraging component-based architectures, I ensure seamless interactions, employing state-of-the-art tools to create dynamic, modern web experiences.</p>
                  <NavLink to='/about'>
                <button className='btn btn-c rounded-5'><span>About Me</span></button>
                </NavLink>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card'>
              <div className='card-body'>
                <span><i className="fa-solid fa-code fa-2xl"></i></span>
                <h4>Backend Developer</h4>
                <p>As a backend developer skilled in Node.js and Express.js, I specialize in crafting scalable server-side applications. Leveraging robust APIs and modern JavaScript frameworks, I ensure seamless functionality and efficient performance for diverse projects.</p>
                <NavLink to='/about'>
                <button className='btn btn-c rounded-5'><span>About Me</span></button>
                </NavLink>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card'>
              <div className='card-body'>
                <span><i className="fa-solid fa-code fa-2xl"></i></span>
                <h4>MERN stack Development</h4>
                <p>With expertise in MERN stack development, I excel in architecting backend solutions. Leveraging MongoDB, Express.js, React.js, and Node.js, My focus lies in delivering seamless user experiences and robust functionality across diverse projects and industries.</p>
                <NavLink to='/about'>
                <button className='btn btn-c rounded-5'><span>About Me</span></button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services