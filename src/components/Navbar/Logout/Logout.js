import React from 'react';
import './Logout.css';
import power from '../../../assets/power.svg';

const Logout = (props) => {
    return (
        <div>
            <img id="logout" className="logout" src={power} alt="powerbutton" />
        </div>
    )
}

export default Logout;