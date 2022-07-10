import React from 'react';
import './Header.css';
import Information from './Information';
import ME from '../../assets/me.jpg';
import MY from '../../assets/my.jpeg';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello I am</h5>
        <h1>Ayush Pyakurel</h1>
        <h5 className='text-light'>Front-end Developer</h5>
        <Information />
        <HeaderSocials />
        <div className='me'>
          <img src={ME} alt='my-picture' />
        </div>
        <a href='#contact' className='scroll_down'>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
