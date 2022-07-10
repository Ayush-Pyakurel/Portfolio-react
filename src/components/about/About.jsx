import React from 'react';
import './About.css';
import Coffee from '../../assets/coffee.jpg';
import { FaAward, FaCode } from 'react-icons/fa';
import { ImOffice } from 'react-icons/im';
import { ImHtmlFive } from 'react-icons/im';
import { BiCodeCurly } from 'react-icons/bi';

import {
  SiCsswizardry,
  SiJavascript,
  SiAngular,
  SiReact,
} from 'react-icons/si';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me!</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={Coffee} alt='my-img' />
          </div>
        </div>

        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card' style={{ gap: '5rem' }}>
              <FaAward className='about_icon' />
              <h5 style={{ marginBottom: '0.7rem' }}>Experience</h5>
              <small>Front-End Development Intership</small>
              <br />
              <small>Jr. Front-End Developer</small>
            </article>
            <article className='about_card'>
              <ImOffice className='about_icon' />
              <h5 style={{ marginBottom: '0.7rem' }}>Company</h5>
              <small>Genese Solution Pvt. Ltd.</small>
            </article>
            <article className='about_card'>
              <FaCode className='about_icon' />
              <h5 style={{ marginBottom: '0.7rem' }}>Programming Language</h5>
              <small>
                <ImHtmlFive className='about_icon' /> HTML
                <br />
                <SiCsswizardry className='about_icon' /> CSS
                <br />
                <SiJavascript style={{ color: 'var(--color-primary)' }} />
                JavaScript
              </small>
            </article>
            <article className='about_card'>
              <BiCodeCurly className='about_icon' />
              <h5 style={{ marginBottom: '0.7rem' }}>
                Programming Libraries/Frameworks
              </h5>
              <small>
                <SiAngular className='about_icon' /> Angular
                <br />
                <SiReact className='about_icon' /> React
              </small>
            </article>
          </div>

          <p>
            A graduated IT enthusiast pushing towards the tech industry;
            proficient in learning new skills. A hardworking apprentice working
            to be a good developer.
          </p>

          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
