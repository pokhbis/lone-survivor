import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import HomeCart from '../HomeCart/HomeCart';
// import background from '../../Images/background/Best-Survival-Schools.jpg';
import './Home.css';

const Home = () => {
    const [homeDisplay, setHomeDisplay] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setHomeDisplay(data))
    }, [])

    return (
        <section>
            <div>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block carousel-slide "
                            src="https://upload.wikimedia.org/wikipedia/commons/f/f3/AFF_Level_1_-_Skydive_Langar.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Explore The Sky</h3>
                            <p>Fly through the limitlessness of the sky!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block carousel-slide"
                            src="https://www.scubadiving.com/sites/scubadiving.com/files/styles/opengraph_1_91x1/public/images/2020/01/padi-club-join-now-scu-0120.jpg?itok=UE_ymkNe"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Explore The Sea</h3>
                            <p>Dive deep into the earth in search of priceless memory!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block carousel-slide"
                            src="https://www.rei.com/dam/vagnini_091316_0507_training_exercises_for_climbing_14ers_lg.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Explore The Earth</h3>
                            <p>Climb high but still touch the ground ! </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="container" >
                <div className="pt-5 pb-3 section-2 text-center">
                    <h2 ><strong className="section-2-text">Popular</strong> Training</h2>
                    <p className="fw-bold">We train people to learn exciting adventurous survival skills. Check out our specially offered courses below. </p>
                    {/* <p>About what the people are excited!</p> */}
                </div>

                <div className="home-service">
                    {
                        homeDisplay.map(service => <HomeCart
                            key={service.id}
                            service={service}
                        ></HomeCart>)
                    }
                </div>
            </div>

        </section>
    );
};
export default Home;