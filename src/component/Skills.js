import React from 'react';
import CircularProgressBar from './CircularProgressBar';

const Skills = () => {
  return (
    <div className='skillPage'>
      <h1>My <span>Skills</span></h1>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='mt-3'>
              <p>HTML</p>
              <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" style={{ width: 92 + '%' }}>92%</div>
              </div>
            </div>
            <div className='mt-3'>
              <p>CSS</p>
              <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" style={{ width: 76 + '%' }}>76%</div>
              </div>
            </div>
            <div className='mt-3'>
              <p>JAVASCRIPT</p>
              <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" style={{ width: 88 + '%' }}>88%</div>
              </div>
            </div>
            <div className='mt-3'>
              <p>BOOTSTRAP</p>
              <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" style={{ width: 73 + '%' }}>73%</div>
              </div>
            </div>
            <div className='mt-3'>
              <p>Jqurey</p>
              <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" style={{ width: 43 + '%' }}>43%</div>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='container'>
              <div className='row go'>
                <div className='col-6'>
                  <div className='mt-3 '>
                    <p>React js</p>
                    <CircularProgressBar percentage={80} />
                  </div>
                  <div className='mt-3 '>
                    <p>MongoDB</p>
                    <CircularProgressBar percentage={70} />
                  </div>
                </div>
                <div className='col-6'>
                  <div className='mt-3 '>
                    <p>Node js</p>
                    <CircularProgressBar percentage={82} />
                  </div>
                  <div className='mt-3 '>
                    <p>Express js</p>
                    <CircularProgressBar percentage={78} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills