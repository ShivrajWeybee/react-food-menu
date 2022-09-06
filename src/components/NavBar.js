import React from 'react'
import { useState } from 'react';
import { Food } from './Food';

export const NavBar = () => {

    const [targetValue, setTargetValue] = useState(0)

    return (
        <div className='main-container'>
            <nav className='navbar'>
                <ul className='flex'>
                    <li><button onClick={(e) => setTargetValue(e.target.value)} value='burgers'>Burgers</button></li>
                    <li><button onClick={(e) => setTargetValue(e.target.value)} value='pizzas'>Pizzas</button></li>
                    <li><button onClick={(e) => setTargetValue(e.target.value)} value='sandwiches'>Sandwiches</button></li>
                    <li><button onClick={(e) => setTargetValue(e.target.value)} value='chocolates'>Chocolates</button></li>
                </ul>
            </nav>
            <hr className='header-hr' />
            {
                targetValue ? <Food foodName={targetValue}/> : ''
            }
        </div>
    )
}
