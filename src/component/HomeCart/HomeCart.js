
import { Card, CardGroup } from 'react-bootstrap';
import './HomeCart.css';
const HomeCart = (props) => {
    const { title, cost, duration, img, text } = props.service;
    return (

        <div className="home-container" >
            <CardGroup >
                <Card >
                    <Card.Img variant="top" className="home-img" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {text}
                            <h6>Cost: $ {cost}</h6>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Duration: {duration}</small>
                    </Card.Footer>
                    <button className="btn">Enroll Now</button>
                </Card>

            </CardGroup>
        </div>
    );
};

export default HomeCart;