import React, { Component } from 'react'
import agileScrum from '../assets/agile-scrum.svg'
import coreldraw from '../assets/coreldraw.svg'
import graphicDesign from '../assets/graphic-design.svg'
import jquery from '../assets/jquery.svg'
import logoDesign from '../assets/logo-design.svg'
import photoshop from '../assets/photoshop.svg'
import responsiveDesign from '../assets/responsive-design.svg'
import typographic from '../assets/typographic.svg'
import uxDesign from '../assets/ux-design.svg'
import webDesign from '../assets/web-design.svg'
import webDevelopment from '../assets/web-development.svg'
import xd from '../assets/xd.svg'

class Skills extends Component {
    state = {  }
    render() { 
        return ( 
            <>
               <section className="resume-section p-3 p-lg-5 d-flex align-items-center flex-column" id="skills">
                    <div className="w-100">
                        <h2 className="mb-2">Skills</h2>
                        <div className="subheading mb-3">Developed Skills</div>
                        <ul className="list-inline dev-icons skills-list mb-5">
                            <li className="list-inline-item">
                                <img src={graphicDesign} alt="Responsive Web Design" /> Graphic Design
                            </li>
                            <li className="list-inline-item">
                                <img src={logoDesign} alt="Logo Design" /> Logo Design
                            </li>
                            <li className="list-inline-item">
                                <img src={typographic} alt="Typographic" /> Typographic
                            </li>
                            <li className="list-inline-item">
                                <img src={uxDesign} alt="UI/ UX Design" /> UI/ UX Design
                            </li>
                            <li className="list-inline-item">
                                <img src={webDesign} alt="Web Design" /> Web Design
                            </li>
                            <li className="list-inline-item">
                                <img src={webDevelopment} alt="Web Development" /> Web Development
                            </li>                                                       
                            <li className="list-inline-item">
                                <img src={responsiveDesign} alt="Mobile-First, Responsive Design" /> Mobile-First, Responsive Design
                            </li>
                            <li className="list-inline-item">
                                <img src={agileScrum} alt="Agile Development and Scrum" /> Agile Development &amp; Scrum
                            </li>                            
                        </ul>
                    </div>

                    <div className="w-100">
                        <h2 className="mb-2">Tools</h2>
                        <div className="subheading mb-3">Programming Languages &amp; Tools</div>
                        <ul className="list-inline dev-icons tools-list">
                            <li className="list-inline-item">
                                <img src={photoshop} alt="Photoshop" />
                                <p>Photoshop</p>
                            </li>

                            <li className="list-inline-item">
                                <img src={xd} alt="Photoshop" />
                                <p>Adobe XD</p>
                            </li>
                            
                            <li className="list-inline-item">
                                <img src={coreldraw} alt="Photoshop" />
                                <p>CorelDraw</p>
                            </li>

                            <li className="list-inline-item">
                                <i className="fab fa-html5" />
                                <p>HTML</p>
                            </li>

                            <li className="list-inline-item">
                                <i className="fab fa-css3-alt" />
                                <p>CSS</p>
                            </li>

                            <li className="list-inline-item">
                                <i className="fab fa-sass" />
                                <p>Sass</p>
                            </li>

                            <li className="list-inline-item">
                                <i className="fab fa-bootstrap"></i>
                                <p>BootStrap</p>
                            </li>

                            <li className="list-inline-item">
                                <i className="fab fa-js-square" />
                                <p>JavaScript</p>
                            </li>

                            <li className="list-inline-item">
                                <img src={jquery} alt="Photoshop" />
                                <p>jQuery</p>
                            </li>

                            <li className="list-inline-item">
                                <i className="fab fa-wordpress" />
                                <p>Wordpress</p>
                            </li>

                            <li className="list-inline-item">
                                <i className="fab fa-react" />
                                <p>ReactJS</p>
                            </li>

                            <li className="list-inline-item">
                                <i className="fab fa-npm" />
                                <p>NPM</p>
                            </li>
                            
                            <li className="list-inline-item">
                                <i className="fab fa-git-square"></i>
                                <p>Git</p>
                            </li>                                                        

                            <li className="list-inline-item">
                                <i className="fab fa-gulp" />
                                <p>Gulp</p>
                            </li>                                                        
                        </ul>
                        {/* <div className="subheading mb-3">Workflow</div>
                        <ul className="fa-ul mb-0">
                            <li>
                            <i className="fa-li fa fa-check" />
                            Mobile-First, Responsive Design</li>
                            <li>
                            <i className="fa-li fa fa-check" />
                            Cross Browser Testing &amp; Debugging</li>
                            <li>
                            <i className="fa-li fa fa-check" />
                            Cross Functional Teams</li>
                            <li>
                            <i className="fa-li fa fa-check" />
                            Agile Development &amp; Scrum</li>
                        </ul> */}
                    </div>

                    
                </section> 
            </>
         );
    }
}
 
export default Skills;