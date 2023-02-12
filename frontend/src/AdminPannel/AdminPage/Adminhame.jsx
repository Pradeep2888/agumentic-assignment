import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AdminNavbar from '../AdminComponent/AdminNavbar'
import Visitar from '../AdminComponent/Visitar'

function Adminhame() {
  const [state,setState]=useState()

  const getData=()=>{
    axios.get(`http://localhost:4000/estudee/visitors`)
    .then((r)=>{
    setState(r.data.data)
    })
    .catch((e)=>{
      console.log(e)
    })
  }

  useEffect(()=>{
  getData()
  },[])
console.log(state)
  return (
    <div>
        {/* <AdminNavbar/> */}
        {/* {
          state.map((item)=>(
            <Visitar name={item.name} />
          ))
        } */}
    </div>
  )
}

export default Adminhame