import React from 'react';
import CV from '../../assets/Ayush-pyakurel-cv.pdf';
// import { Link } from 'react-router-dom';

const Information = () => {
  return (
    <div className='information'>
      {/* <Link to='<Contact/>'>Contact Me!</Link> */}
      <a href={CV} download className='btn'>
        Download CV
      </a>
      <a href='#contact' className='btn btn-primary'>
        Let's Talk
      </a>
    </div>
  );
};

export default Information;
