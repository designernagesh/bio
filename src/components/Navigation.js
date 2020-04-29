import React, { Component } from 'react';
import profilePic from '../assets/lord-vishnu.gif'

class Navigation extends Component {    
    render() { 
        return ( 
            <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <span className="d-block d-lg-none"><h4 className="m-0 text-white">Nagesh Kumar</h4></span>            
            <span className="d-none d-lg-block">
                <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={ profilePic } alt="Profile" />
            </span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#about">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#experience">Experience</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#education">Education</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#skills">Skills &amp; Tools</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
                </li>                
            </ul>
            </div>
        </nav>
            </>
         );
    }
}
 
export default Navigation;