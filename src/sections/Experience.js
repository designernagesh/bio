import React, { Component } from 'react';
import ResumeData from '../data/ResumeData'

class Experience extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
                    <div className="w-100">                    
                    <h2 className="mb-5">Experience</h2>
                    {
                        ResumeData.experience.map( exp => {
                                return (                                    
                                    <div key={exp.id} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                                        <div className="resume-content">
                                            <h3 className="mb-0">{ exp.designation }</h3>
                                            
                                            <div className="subheading mb-3">{ exp.companyName }</div>
                                            <p>{ exp.location }</p>
                                            <ul>
                                                { exp.jobDescription.map(jobdesc => (<li key={jobdesc.id}> { jobdesc.desc } </li>)) }
                                            </ul>                                        
                                        </div> 
                                        {/* <div className="resume-date text-md-right"> 
                                            <span className="text-primary">{ exp.duration }</span>                                       
                                            </div>                              */}
                                        </div>  
                                )
                            })                        
                    }                    
                    </div>
                </section>
            </>
         );
    }
}
 
export default Experience;