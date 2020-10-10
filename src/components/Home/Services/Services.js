import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/Cavity-Filling.png'
import whitening from '../../../images/Teeth-Whitening.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import './Services.css'
const Services = () => {
    const serviceData = [
        {
            name: 'Fluoride Treatment',
            img: fluoride
        },
        {
            name: 'Cavity Filling',
            img: cavity
        },
        {
            name: 'Teeth Whitening',
            img: whitening
        }
    ]
    return (
        <section className="services-container ">
        <div className="text-center ">
            <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
            <h2>Services We Provide</h2>
        </div>
        <div className="d-flex justify-content-center">
        <div className="w-75 row mt-5">
            {
                serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
            }
        </div>
    </div>
    </section>
    );
};

export default Services;