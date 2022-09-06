import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Burgers = () => {

    const [post, setPost] = useState({})
    useEffect(() => {
        axios
            .get('https://ig-food-menus.herokuapp.com/burgers')
            .then(res => {
                setPost(res.data)
            })
    }, [])

    return (
        <div className='display-food-container'>
            {
                post.length > 0 ?
                    post.map(foodItem => {
                        return (
                            <div className='food-item-container flex'>
                                <img src={foodItem.img} className='food-item-image' />
                                <div className='food-item-info flex'>
                                    <h3 className='food-item-name'>{foodItem.name}</h3>
                                    <p className='food-item-price'>Price : {foodItem.price}</p>
                                    <p className='food-item-rating'>Rating : {foodItem.rate}</p>
                                    <p className='food-item-country'>Made in : {foodItem.country}</p>
                                </div>
                            </div>
                        )
                    })
                    :
                    'No Food Items...'
            }
        </div>
    )
}
