import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const DisplayServices = (props) => {
    const { title, text, cost, duration, img } = props.service;
    console.log(props)
    return (
        <div>
            <CardGroup >
                {/* Service Card Contents */}
                <Card >
                    <Card.Img variant="top" className="home-img" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {text}
                            <h6>Cost: $ {cost}</h6>
                        </Card.Text>
                    </Card.Body>
                    <div>
                        <p>Rating</p>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="far fa-star"></i>

                    </div>
                    <Card.Footer>
                        <small className="text-muted">Duration: {duration}</small>
                    </Card.Footer>
                    <button className="btn">Enroll Now</button>
                </Card>

            </CardGroup>
        </div>
    );
};

export default DisplayServices;