import './App.css';

import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Services from './components/services/Services';
import Footer from './components/footer/Footer';
import Testimonial from './components/testimonials/Testimonial';
import Portfolio from './components/portfolio/Portfolio';

function App() {
  return (
    <div className='App'>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Contact />
      <Services />
      <Portfolio />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
