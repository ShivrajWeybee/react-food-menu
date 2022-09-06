import React, { useState, useEffect, Suspense } from 'react'
import axios from 'axios'
import { FoodDetails } from './FoodDetails';
import { PageLoader } from './PageLoader';

// const FoodDetails = React.lazy(() => import('./FoodDetails'))

export const Food = ({ foodName }) => {

  const [post, setPost] = useState({})
  const [loading, setLoading] = useState(true)
  const [catArr, setCatArr] = useState([])

  useEffect(() => {
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
      {/* {post.length > 0 && post.map(i => <Suspense fallback={<PageLoader />}><FoodDetails foodItem={i} key={i.id} /></Suspense>)} */}
    </div>
  )
}