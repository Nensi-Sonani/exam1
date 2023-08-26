import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home';
import Cart from './Cart';
import Product from './Products'

const Allrouts = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Cart' element={<Cart />} />
                <Route path='/Product' element={<Product/>}/>
            </Routes>
        </>
    )
}

export default Allrouts
