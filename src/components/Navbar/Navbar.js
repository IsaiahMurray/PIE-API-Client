import React from 'react';
import './Navbar.css';
import piePic from '../../assets/pie.svg';
import Logout from './Logout/Logout';

const Navebar = (props) => {
    return(
        <div>
            <nav>
                <img id="piePic" src={piePic} alt="pie"/>
                <Logout clearToken={props.clearToken}/>
            </nav>
        </div>
    )
}

export default Navebar;