import React, { Component } from 'react'

class Education extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
                    <div className="w-100">
                    <h2 className="mb-5">Education</h2>
                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-content">
                        <h3 className="mb-0">Berhampur University</h3>
                        <div className="subheading mb-3">Bachelor of Commerce</div>
                        <p>Rayagada, Orissa</p>
                        </div>
                        <div className="resume-date text-md-right">
                        {/* <span className="text-primary">August 2001</span> */}
                        </div>
                    </div>
                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
                        <div className="resume-content">
                        <h3 className="mb-0">PACE Computer Education</h3>
                        <div className="subheading mb-3">Post Graduation Diploma in Computer Application </div>
                        <p>Visakhapatnam, AP</p>
                        </div>
                        <div className="resume-date text-md-right">
                        {/* <span className="text-primary">May 2003</span> */}
                        </div>
                    </div>
                    </div>
                </section>
            </>
         );
    }
}
 
export default Education;