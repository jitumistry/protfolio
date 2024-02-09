import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgressBar = ({ percentage }) => {
    return (
        <div style={{ width: 100, height: 100 }}>
            <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                strokeWidth={12}
                styles={buildStyles({
                    textColor: '#fff',
                    pathColor: '#0d6efd',
                    trailColor: '#fff',
                })}
            />
        </div>
    );
};

export default CircularProgressBar;