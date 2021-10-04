import React from 'react';
import './About.css';
import imageA from '../../Images/aboutImage/mission.jpg';
import imageB from '../../Images/aboutImage/vision.jpg';
import imageC from '../../Images/aboutImage/objective.jpg';
const About = () => {
    return (
        <div className="about-section-bg">
            <div className="container about-section py-5">
                {/* Mission part */}
                <div className="">
                    <h2 className="text-center">Mission</h2>
                    <img className="image-size" src={imageA} alt="" />
                    <p>Our Mission is, as an alternative training method, Adventurous Training effectively cultivates leadership, develops robustness, improves physical fitness, enhances teamwork and spearheads courage amongst Service personnel.</p>
                </div>
                {/* Vision Part  */}
                <div>
                    <h2 className="text-center">Vision</h2>
                    <img className="image-size" src={imageB} alt="" />
                    <p>Our vision is, To provide challenging outdoor training for Service personnel in specified adventurous activities that incorporates controlled exposure to risk, in order to develop: leadership; teamwork; physical fitness; moral and physical courage; as well as other personal attributes and skills that are vital to the delivery of operational capability</p>

                </div>
                {/* Objective Part */}
                <div>
                    <h2 className="text-center">Objective</h2>
                    <img className="image-size" src={imageC} alt="" />
                    <p>The objective of lone survivor is,benefit of AT concerns its ability to provide balance in the lives of Service personnel who are subject to the pressures of military commitments and periods of high tempo operations, thus it provides an invaluable opportunity for decompression that plays an important part in Service life. </p>

                </div>
            </div>
        </div>
    );
};

export default About;