import React from 'react'
import product from '../../JSON/product.js'
import { Outlet } from 'react-router-dom'
import Directory from '../../Components/Directory/Directory.jsx'
function Home() {
  return (
    <div>
      <Outlet />
      <Directory categories={product} />
    </div>
  )
}

export default Home
