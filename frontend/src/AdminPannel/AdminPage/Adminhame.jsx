import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AdminNavbar from '../AdminComponent/AdminNavbar'
import Visitar from '../AdminComponent/Visitar'

function Adminhame() {

  const [arr,setArr]=useState()

  const getData=()=>{
    axios.get(`https://backend-argumentic.onrender.com/estudee/visitors`)
    .then((r)=>{
    setArr(r.data.data)
    })
    .catch((e)=>{
      console.log(e)
    })
  }
  // console.log(arr)
  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
        {<AdminNavbar/> }
     
        {
          arr?.map((item)=>(
            <Visitar name={item.name} phone={item.number} mail={item.email} />
          ))
        }
        
    </div>
  )
}

export default Adminhame