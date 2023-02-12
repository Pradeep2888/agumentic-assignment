import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from '../Pages.jsx/Contact'
import Home from '../Pages.jsx/Home'

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/'  element={<Home/>} />
            <Route path='/contact' element={<Contact/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes