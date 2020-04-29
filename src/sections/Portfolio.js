import React, { Component } from 'react'
import ReactjsWorks from '../components/ReactjsWorks'
import { Tabs, Tab } from 'react-bootstrap'
import HtmlWorks from '../components/HtmlWorks'
import DesignWorks from '../components/DesignWorks'

class Portfolio extends Component {    
    render() { 
        //let resume = this.props.ResumeData;
        return ( 
            <>
                <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="portfolio">
                    <div className="w-100">
                    <h2 className="mb-5">Portfolio</h2>
                    <Tabs defaultActiveKey="reactjs" id="uncontrolled-tab-example">
                        <Tab eventKey="reactjs" title="ReactJS">                            
                            <ReactjsWorks />                             
                        </Tab>

                        <Tab eventKey="html" title="HTML &amp; CSS">                            
                            <HtmlWorks />
                        </Tab>
                        
                        <Tab eventKey="design" title="Design Works">                            
                            <DesignWorks />                         
                        </Tab>
                    </Tabs>
                    </div>
                </section>
            </>
         );
    }
}
 
export default Portfolio;