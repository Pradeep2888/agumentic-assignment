import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AdminNavbar from '../AdminComponent/AdminNavbar'
import Userdetail from '../AdminComponent/Userdetail'

function User() {
  const [arr,setArr]=useState()

  const getData=()=>{
    axios.get(`http://localhost:4000/estudee/users`)
    .then((r)=>{
    setArr(r.data.data)
    })
    .catch((e)=>{
      console.log(e)
    })
  }
  
  const handelChange=(id,admin)=>{
    let status=admin?"false":"true"
    let obj={
     "_id":id,
     "admin":status
    }
    // console.log(obj)
    axios.patch("http://localhost:4000/estudee/usersupdate",obj)
    .then((r)=>{
      
      getData()
      })
      .catch((e)=>{
        console.log(e)
      })
 }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    getData()
  }, [arr])




  return (
    <div>
      <AdminNavbar/>
      {
          arr?.map((item)=>(
            <Userdetail key={item._id} name={item.name} admin={item.isAdmin} handelChange={handelChange} mail={item.email}  id={item._id} />
          ))
        }
    </div>
  )
}

export default User