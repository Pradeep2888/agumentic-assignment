import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Adminhame from '../AdminPannel/AdminPage/Adminhame'
import User from '../AdminPannel/AdminPage/User'
import PrivateRoute from '../Components/PrivateRoute'
import Contact from '../Pages.jsx/Contact'
import Home from '../Pages.jsx/Home'

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/'  element={<Home/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/adminrequest' element={<User/>} />
            <Route path='/adminhome' element={ <PrivateRoute> <Adminhame/></PrivateRoute>} />
        </Routes>
    </div>
  )
}

export default AllRoutes