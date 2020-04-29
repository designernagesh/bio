import React, { Component } from 'react'
//import $ from 'jquery'
import jQuery from 'jquery'

import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/main.scss'
import './App.css'

import Navigation from './components/Navigation'
import About from './sections/About'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Skills from './sections/Skills'
import Portfolio from './sections/Portfolio'

class App extends Component {
  componentDidMount(){
    (function($) {
      //"use strict"; // Start of use strict    
      // Smooth scrolling using jQuery easing
      window.$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (window.location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && window.location.hostname === this.hostname) {
          var target = window.$(this.hash);
          target = target.length ? target : window.$('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            window.$('html, body').animate({
              scrollTop: (target.offset().top)
            }, 1000, "easeInOutExpo");
            return false;
          }
        }
      });
    
      // Closes responsive menu when a scroll trigger link is clicked
      window.$('.js-scroll-trigger').click(function() {
        window.$('.navbar-collapse').collapse('hide');
      });
    
      // Activate scrollspy to add active class to navbar items on scroll
      window.$('body').scrollspy({
        target: '#sideNav'
      });
    
    })(jQuery); // End of use strict
    
  }
  render(){
  return (
    <>     
      <Navigation />
      <div className="container-fluid p-0">
        <About />

        <hr className="m-0" />

        <Experience />

        <hr className="m-0" />

        <Education />

        <hr className="m-0" />

        <Skills />

        <hr className="m-0" />

        <Portfolio />
      </div>
    </>
  );
}
}

export default App;
