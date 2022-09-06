import React from 'react'

export const FoodDetails = ({ foodItem }) => {

    return (
        <div className='food-item-container flex'>
            <img
                src={foodItem.img}
                onError={event => {
                    event.target.src = "https://bookmychefs.com/uploads/dish/default_food.jpg"
                    event.onerror = null
                }}
                className='food-item-image' />

            <div className='food-item-info flex'>
                <span className='food-item-rating'>{foodItem.rate} &#9733;</span>
                <h3 className='food-item-name'>{foodItem.name}</h3>
                <p className='food-item-dsc'>{foodItem.dsc}</p>
                <div className='price-wrapper'>
                    <p className='food-item-price'>{foodItem.price}  &#36;</p>
                </div>
                <p className='food-item-country'>Famous in : {foodItem.country}</p>
            </div>
        </div>
    )
}