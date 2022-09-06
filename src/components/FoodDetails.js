import React from 'react'

export const FoodDetails = ({ foodItem }) => {

    return (
        <div className='food-item-container flex'>
            {
                foodItem.img ?
                    <img src={foodItem.img} className='food-item-image' /> :
                    <img src='https://bookmychefs.com/uploads/dish/default_food.jpg' className='food-item-image' />
            }
            <div className='food-item-info flex'>
                <span className='food-item-rating'>{foodItem.rate} &#9733;</span>
                <h3 className='food-item-name'>{foodItem.name}</h3>
                <p className='food-item-dsc'>{foodItem.dsc}</p>
                <div className='price-wrapper'>
                    <p className='food-item-price'>{foodItem.price}  &#36;</p>
                </div>
                <p className='food-item-country'>Popular in : {foodItem.country}</p>
            </div>
        </div>
    )
}