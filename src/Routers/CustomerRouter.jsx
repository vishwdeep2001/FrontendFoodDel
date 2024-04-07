import React from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Restaurant } from '@mui/icons-material'
import RestaurantDetails from '../components/Restaurant/RestaurantDetails'
import Cart from '../components/Cart/Cart'
import Profile from '../components/Profile/Profile'
import { Home } from '../components/Home/Home'
import { Auth } from '../components/Auth/Auth'

export const CustomerRouter = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/account/:register' element={<Home/>} />
            <Route path='/restaurant/:city/:title/:id' element={<RestaurantDetails/>} />
            <Route path='cart' element={<Cart/>} />
            <Route path='/my-profile/*' element={<Profile/>} />

        </Routes>
        <Auth/>
    </div>
  )
}

