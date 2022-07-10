import React from 'react';
import './Nav.css';
import { BiHomeCircle } from 'react-icons/bi';
import { FaUserTie } from 'react-icons/fa';
import { BsFillBookmarkStarFill } from 'react-icons/bs';
import { MdOutlineDesignServices } from 'react-icons/md';
import { MdContactMail } from 'react-icons/md';
import { useState } from 'react';

const Nav = () => {
  // state to hold the clicked link active on nav bar
  const [clicked, setClicked] = useState('#');

  return (
    <nav>
      <a
        href='#'
        onClick={() => setClicked('#')}
        className={clicked === '#' ? 'active' : ''}
      >
        <BiHomeCircle />
      </a>
      <a
        href='#about'
        onClick={() => setClicked('#about')}
        className={clicked === '#about' ? 'active' : ''}
      >
        <FaUserTie />
      </a>
      <a
        href='#experience'
        onClick={() => setClicked('#experience')}
        className={clicked === '#experience' ? 'active' : ''}
      >
        <BsFillBookmarkStarFill />
      </a>
      <a
        href='#services'
        onClick={() => setClicked('#services')}
        className={clicked === '#services' ? 'active' : ''}
      >
        <MdOutlineDesignServices />
      </a>
      <a
        href='#contact'
        onClick={() => setClicked('#contact')}
        className={clicked === '#contact' ? 'active' : ''}
      >
        <MdContactMail />
      </a>
    </nav>
  );
};

export default Nav;
