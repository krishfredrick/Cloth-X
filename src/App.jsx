import React from 'react'
import Home from './Routes/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Shop from './Routes/Shop/shop'
import NavigationBar from './Routes/NavigationBar/NavigationBar'
import Authentication from './Routes/Authentication/Authentication'




const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavigationBar />}>
        <Route index={true} element={<Home />}/>
        <Route path='shop' element={<Shop />}/>
        <Route path='auth' element={<Authentication />}/>
      </Route>
    </Routes>
  )
}

export default App
