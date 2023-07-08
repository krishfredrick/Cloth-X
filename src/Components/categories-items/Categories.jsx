import React from 'react'
import './categories.styles.scss'
import Cateagory from '../category-item/Cateagory'



function Categories({product}) {
  return (
    <div className='categories_container'>
    { product.map(({title, id, imageUrl})=>(
      <Cateagory title={title} imageUrl={imageUrl} key={id}  />
      )
    )}   
  </div>
  )
}

export default Categories
