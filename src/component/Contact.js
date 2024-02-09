import axios from 'axios';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const apiKey = process.env.REACT_APP_API_KEY;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${apiKey}`, { name, email, subject, phone, message })
                .then((res) => {
                    alert('Form submitted successfully!');
                    setName('');
                    setEmail('');
                    setMessage('');
                    setPhone('');
                    setSubject('');
                })
                .catch((err) => {
                    alert('Failed to submit form');
                })

        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
    return (
        <div className='form'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 contact'>
                        <h1>Contact <span>Us</span></h1>
                        <h4>Lets Work Together</h4>
                        <p className='pe-4'>Passionate MERN Stack Developer | HTML, CSS, JavaScript, React, MongoDB | Ready to Contribute to Opportunities | Quick Learner | Ready to Start Now</p>
                        <p className='c'><i className="fa-solid fa-envelope"></i> &nbsp;<NavLink to='mailto:jitumistry073@gmail.com'>jitumistry073@gmail.com</NavLink></p>
                        <p className='c'><i className="fa-solid fa-phone"></i> <NavLink to='tel:+91 7008890354'>+91 7008890354</NavLink></p>
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
                    <div className='col-md-6 contact-1'>
                        <form onSubmit={handleSubmit}>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <input type='text' className='form-control' placeholder='Your name' value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className='col-md-12'>
                                    <input type='email' className='form-control' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className='col-md-12'>
                                    <input type='text' className='form-control' placeholder='subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
                                </div>
                                <div className='col-md-12'>
                                    <input type='text' className='form-control' placeholder='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </div>
                                <div className='col-md-12'>
                                    <textarea placeholder='message' className='form-control' value={message} onChange={(e) => setMessage(e.target.value)} />
                                </div>
                                <div className='col-md-12'>
                                    <button className='btn btn-c form-control rounded-5'><span>Submit</span></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact