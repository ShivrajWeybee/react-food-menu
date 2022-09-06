import axios from 'axios';
import React, { useRef } from 'react'
import { useState, useEffect } from 'react';
import { Food } from './Food';

export const NavBar = () => {
    
    const [targetValue, setTargetValue] = useState('burgers')

    return (
        <div className='main-container'>
            <nav className='navbar'>
                <ul className='flex'>
                    <li>
                        <button
                            onClick={(e) => setTargetValue(e.target.value)}
                            className={targetValue === 'burgers' ? 'active-btn' : ''}
                            value='burgers'>Burgers</button>
                    </li>
                    <li>
                        <button
                            onClick={(e) => setTargetValue(e.target.value)}
                            className={targetValue === 'pizzas' ? 'active-btn' : ''}
                            value='pizzas'>Pizzas</button>
                    </li>
                    <li>
                        <button
                            onClick={(e) => setTargetValue(e.target.value)}
                            className={targetValue === 'sandwiches' ? 'active-btn' : ''}
                            value='sandwiches'>Sandwiches</button>
                    </li>
                    <li>
                        <button
                            onClick={(e) => setTargetValue(e.target.value)}
                            className={targetValue === 'chocolates' ? 'active-btn' : ''}
                            value='chocolates'>Chocolates</button>
                    </li>
                </ul>
            </nav>
            <hr className='header-hr' />
            {/* {loading ? <PageLoader /> : initial ? <Food foodName='burgers' /> : ''} */}
            {targetValue ? <Food foodName={targetValue} /> : ''}
        </div>
    )
}
