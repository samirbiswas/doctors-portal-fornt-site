import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
const BusinessInfo = () => {
    const infoData =[{
        title:'Oping Hours',
        des:'We are open in 7 days',
        icon:faClock,
        backgroun:'primary',
    },
    {
        title:'Visit Our Locaton',
        des:'Dlock-D banani,1213',
        icon:faMapMarker,
        backgroun:'dark',
    },
    {
        title:'Call Us Now',
        des:'01700 000 000',
        icon:faPhone,
        backgroun:'primary'
    }


]


    return (
        <div className='d-flex justify-content-center '>
           <div className='row w-75 mb-5'>
           {
                infoData.map(info=> <InfoCard info={info}></InfoCard>)
            }
           </div>
        </div>
    );
};

export default BusinessInfo;