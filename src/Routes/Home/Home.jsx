import React from 'react'
import product from '../../JSON/product.js'
import Categories from '../../Components/categories-items/Categories.jsx'
import { Outlet } from 'react-router-dom'
function Home() {
  return (
    <div>
      <Outlet />
      <Categories product={product} />
    </div>
  )
}

export default Home
