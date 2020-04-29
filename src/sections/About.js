import React, { Component } from 'react';

class About extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
                <div className="w-100">
                <h1 className="mb-0"><span className="text-primary">Nagesh</span> Kumar
                </h1>
                <div className="subheading mb-5">Begumpet, Hyderabad - 500 016<br /> <a href="mailto:designer.nagesh@gmail.com">designer.nagesh@gmail.com</a> · <span className="text-primary">(+91) 9030 040302</span> 
                </div>
                <p className="lead mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                <div className="social-icons">
                    <a href="!#">
                        <i className="fab fa-linkedin-in" />
                    </a>

                    <a href="https://github.com/designernagesh/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github" />
                    </a>
                   
                    <a href="!#">
                        <i className="fab fa-facebook-f" />
                    </a>
                </div>
                </div>
            </section>
            </>
         );
    }
}
 
export default About;