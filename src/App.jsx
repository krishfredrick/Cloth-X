import React from 'react'
import Home from './Routes/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Shop from './Routes/Shop/shop'
import NavigationBar from './Routes/NavigationBar/NavigationBar'
import SignIn from './Components/sign-in/SignIn'




const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavigationBar />}>
        <Route index={true} element={<Home />}/>
        <Route path='shop' element={<Shop />}/>
        <Route path='sign-in' element={<SignIn />}/>
      </Route>
    </Routes>
  )
}

export default App
