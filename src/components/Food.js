import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { FoodDetails } from './FoodDetails';

export const Food = ({ foodName }) => {

  const [post, setPost] = useState({})
  // const [catName, setCatName] = useState('')
  const [catArr, setCatArr] = useState([])
  let cat = [];

  useEffect(() => {

    // Initial Click
    if (catArr.length === 0 || catArr.findIndex(el => el.foodName === foodName) === -1) {
      console.log(`API call`)
      axios
        .get(`https://ig-food-menus.herokuapp.com/${foodName}`)
        .then(res => {
          setPost(res.data)
          setCatArr(prevArr => [...prevArr, { foodName: foodName, data: [...res.data] }])
        })
    }

    // Onwards Click
    else {
      console.log(`API dosen't call`)
      const index = catArr.findIndex(el => el.foodName === foodName);
      setPost(catArr[index].data)
    }

  }, [foodName])

  return (
    <div className='display-food-container'>
      {
        post.length > 0 ?
          post.map(i => <FoodDetails foodItem={i} key={i.id} />)
          : 'No Food items...'
      }
    </div>
  )
}