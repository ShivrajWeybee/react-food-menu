import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { FoodDetails } from './FoodDetails';
import { PageLoader } from './PageLoader';

export const Food = ({ foodName }) => {

  const [post, setPost] = useState({})
  const [loading, setLoading] = useState(true)
  const [catArr, setCatArr] = useState([])
  let cat = [];

  useEffect(() => {

    // Initial Click
    if (catArr.length === 0 || catArr.findIndex(el => el.foodName === foodName) === -1) {
      setLoading(true)
      axios
        .get(`https://ig-food-menus.herokuapp.com/${foodName}`)
        .then(res => {
          setPost(res.data)
          setCatArr(prevArr => [...prevArr, { foodName: foodName, data: [...res.data] }])
          setLoading(false)
        })
    }

    // Onwards Click
    else {
      const index = catArr.findIndex(el => el.foodName === foodName);
      setPost(catArr[index].data)
    }

  }, [foodName])

  return (
    <div className='display-food-container'>
      {
        loading ? <PageLoader /> :
        post.length > 0 ?
          post.map(i => <FoodDetails foodItem={i} key={i.id} />)
          : 'No Food items...'
      }
    </div>
  )
}