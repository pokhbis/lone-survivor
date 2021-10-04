import React, { useEffect, useState } from 'react';
import './services.css';
import DisplayServices from '../DisplayServices/DisplayServices';

const Services = () => {
    const [serviceData, setServiceData] = useState([]);
    useEffect(() => {
        fetch('./servicedata.json')
            .then(res => res.json())
            .then(data => setServiceData(data))
        console.log(setServiceData)
    }, [])
    return (
        <div className="container">
            <div className="service-title my-5">
                <h2><strong className="service-title-tag">Featured Courses</strong> of Our Service </h2>
                <p className="fw-bold">Know what people like to explore about !</p>
            </div>

            <div className=" service-container" >
                {
                    serviceData.map(service => <DisplayServices
                        key={service.id}
                        service={service}
                    ></DisplayServices>)
                }

            </div>
        </div>
    );
};

export default Services;