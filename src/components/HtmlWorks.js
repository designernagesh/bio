import React from 'react'
import ResumeData from '../data/ResumeData'
import { Card } from 'react-bootstrap'

const HtmlWorks = () => {
    return (
        <div className="row">
            {
            ResumeData.projectsHtml.map( data => {
                return (
                    <div className="col-md-4 mb-4" key={ data.id }>
                        <Card>
                        <Card.Img variant="top" src={ data.imgSrc } />
                        <Card.Body>
                            <Card.Title>{ data.proejctName }</Card.Title>
                            <Card.Text>
                            { data.language }
                            </Card.Text>                                                                   
                        </Card.Body>

                        <Card.Footer>                    
                            <span>
                                <a href={ data.ghCodeLink } target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                                <a href={ data.ghViewLink } target="_blank" rel="noopener noreferrer"><i className="fas fa-eye"></i></a>
                            </span>
                            <span>
                                <i className="fas fa-calendar-alt"></i> { data.devDate }
                            </span>
                        </Card.Footer> 

                        </Card>
                    </div>
                )
            })
            }                                
        </div>
    )
}

export default HtmlWorks