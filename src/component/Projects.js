import React from 'react';
import { NavLink } from 'react-router-dom';
import chatApp from './Images/Chatapp.png';
import ems from './Images/Ems.png';
import todo from './Images/todo.png';

const Projects = () => {
  return (
    <div className='project'>
      <div className='container'>
        <div className='row'>
          <h1>Latest <span>Project</span></h1>
          <div className='col-md-4 image-container'>
            <NavLink to={'https://chatapplive.netlify.app'}><img src={chatApp} alt='chatapp' className='img-fluid' /></NavLink>
            <div className="text-container">
              <p className="text">Chat app</p>
            </div>
          </div>
          <div className='col-md-4 image-container'>
            <NavLink to={'https://emsproject.netlify.app/'}><img src={ems} alt='ems' className='img-fluid' /></NavLink>
            <div className="text-container">
              <p className="text">Employee Management System</p>
            </div>
          </div>
          <div className='col-md-4 image-container'>
            <NavLink to={'https://github.com/jitumistry/Todo-list-in-React-js'}><img src={todo} alt='snakegame' className='img-fluid' /></NavLink>
            <div className="text-container">
              <p className="text">Todo List</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects