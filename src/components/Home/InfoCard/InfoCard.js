import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './InfoCard.css'
const InfoCard = ({info}) => {

    return (
        <div className='col-md-4 '>
           <div className={`d-flex justify-content-center info-container info-${info.backgroun}`}> 
           <div className='mr-2'>
            <FontAwesomeIcon className='info-icon' icon={info.icon} />
            </div>
            
            <div>
                <h6>{info.title}</h6>
                <small>{info.des}</small>     
            </div>
           </div>
            
        </div>
    );
};

export default InfoCard;