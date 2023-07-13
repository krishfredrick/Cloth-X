import React from 'react'
import Home from './Routes/Home/Home'
import { Route, Routes } from 'react-router-dom'
import NavigationBar from './Routes/NavigationBar/NavigationBar'
import Authentication from './Routes/Authentication/Authentication'
import Checkout from './Routes/Checkout/Checkout'
import Shop from './Routes/Shop/Shop'




const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavigationBar />}>
        <Route index={true} element={<Home />}/>
        <Route path='shop/*' element={<Shop />}/>
        <Route path='checkout' element={<Checkout />}/>
        <Route path='auth' element={<Authentication />}/>
      </Route>
    </Routes>
  )
}

export default App
