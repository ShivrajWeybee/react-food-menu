<<<<<<< HEAD
import React, { Suspense } from 'react'
import { useState } from 'react';
import { Food } from './Food';

export const NavBar = () => {

=======
import axios from 'axios';
import React, { useRef } from 'react'
import { useState, useEffect } from 'react';
import { Food } from './Food';

export const NavBar = () => {
    
>>>>>>> adb13aff46cad3cdf242c1e41eb51b9c5a7a5046
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
<<<<<<< HEAD
=======
            {/* {loading ? <PageLoader /> : initial ? <Food foodName='burgers' /> : ''} */}
>>>>>>> adb13aff46cad3cdf242c1e41eb51b9c5a7a5046
            {targetValue ? <Food foodName={targetValue} /> : ''}
        </div>
    )
}
