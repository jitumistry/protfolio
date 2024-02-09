import React from 'react';
import logo from './Images/myphoto.png';

const About = () => {
  return (
    <div className='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <h1>About <span>Me</span></h1>
            <h3>Full Stack Developer</h3>
            <p>Hello, I'm Jitu Mistry, a dedicated MERN stack developer driven by a passion for crafting dynamic web experiences. With a background in Engineering, I've mastered HTML, CSS, JavaScript, Bootstrap, React.js, MongoDB, Node.js, and Express.js.</p>

            <p>My commitment to continuous learning keeps me updated with industry trends. My goal is to secure a challenging role in MERN stack development, where I can apply my skills and grow professionally.</p>

            <p>I thrive on problem-solving, collaboration, and transforming innovative ideas into reality. As a quick learner, I eagerly embrace new challenges and contribute effectively to dynamic projects.</p>

            <p>I believe in technology's transformative power and am excited to be part of its evolution. Feel free to explore my portfolio and connect for exciting web development collaborations.</p>
          </div>
          <div className='col-md-6'>
          <img src={logo} alt='my' className='img-fluid' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About