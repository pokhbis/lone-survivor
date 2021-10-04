import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className=" footer-background pt-3">
            {/* Footer Part-1 */}
            <div className="row ms-5">
                <div className="col-md-4">
                    <h3> The Lone Survivor</h3>
                    <p>Lone Survivor is a team of survival expert, who will train you the best to cope up with any natural life threatening events;in case you lost in the wild, mountain or island. </p>
                </div>
                <div className="col-md-4">
                    <h3>Get in touch with us</h3>
                    <p>Know more about our activity from social media!</p>
                    <div>
                        <i class="fab fa-3x icon fa-facebook"></i>
                        <i class="fab fa-3x icon fa-instagram-square"></i>
                        <i class="fab fa-3x icon fa-youtube-square"></i>
                    </div>
                </div>
                <div className="col-md-4">
                    <h3>Legal Issue</h3>
                    <p className="footer-legal">Terms & Conditions</p>
                    <p className="footer-legal">Privacy Policy</p>
                    <p className="footer-legal">Health Insurance</p>
                </div>
            </div>
            <div className="row ">
                {/* Footer Part-2 */}
                <div className="d-flex justify-content-center my-5 ">
                    <div>
                        <h4>Enter the fold!</h4>
                        <p>Signed in on our mailing list.</p>
                    </div>
                    <div>
                        <input className="footer-input" type="text" placeholder="Enter Your Email"></input>
                    </div>

                </div>

            </div>
            {/* Footer Part-3 */}
            <p className="text-center pb-2">@ All Rights Reserved by The Lone Survivor.</p>
        </div>
    );
};

export default Footer;