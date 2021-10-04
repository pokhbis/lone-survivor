import React, { useEffect, useState } from 'react';
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
        // <section className="bg" >
        //     <div className="home-part ">
        //         {/* <img className="background-img" src={background} alt="" /> */}
        //         <div className="home-part-1 col-lg-7">

        //             <div className="">
        //                 <h1>The Challange Is On!!!</h1>
        //                 <h5>Learn to Survive in Any Harsh Natural Envirnment.</h5>
        //                 <button className="btn btn-panda-bg-btn">Buy Now</button>

        //             </div>

        //         </div>
        //         <div className="home-part-2">
        //             <div className="row col-lg-5 ">
        //                 <h4>image</h4>
        //             </div>
        //         </div>
        //     </div>
        // </section>

        <section className="container" >
            <div className="pt-5 pb-3 section-2">
                <h2 ><strong className="section-2-text">Popular</strong> Training</h2>
                <p>About what the people are excited!</p>
            </div>

            <div className="home-service">
                {
                    homeDisplay.map(service => <HomeCart
                        key={service.id}
                        service={service}
                    ></HomeCart>)
                }
            </div>

        </section>

    );
};

export default Home;