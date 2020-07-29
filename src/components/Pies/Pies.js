import React, {useState, useEffect} from 'react';
import './Pies.css';

import Pie from './Pie/Pie';

const Pies = (props) => {

    const [pies, setPies] = useState([])

    const pumpkinPie = {
        nameOfPie: 'Pumpkin',
        baseOfPie: 'Pumpkin Puree',
        crust: 'Pastry',
        timeToBake: 50,
        servings: 8,
        rating: 4
    }

    return(
        <table>
            <thead>
                <tr>
                    <th>Name of Pie</th>
                    <th>Base of Pie</th>
                    <th>Crust</th>
                    <th>Bake Time</th>
                    <th>Servings</th>
                    <th>Rating</th>
                </tr>
            </thead>

            <tbody>
                {/* Pie data will go here */}
                <Pie testData={pumpkinPie}/>
            </tbody>
        </table>
    )

}

export default Pies;