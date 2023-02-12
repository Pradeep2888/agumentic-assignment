import axios from 'axios'
import React, { useState } from 'react'

function Requestadmin() {

    const [request, setRequest] = useState({})

    const updateUser = e => {
        setRequest({
            ...request,
            [e.target.name]: e.target.value
        })
    }

    const handlerequest = e => {
        e.preventDefault()
        console.log(request)
        getdata()
    }

    const getdata=(()=>{
        axios.post(`http://localhost:4000/estudee/register`,request)
        .then((r)=>{
              if(r.data.msg==="sign in succefully"){
                alert("Request created Successfully")
              }
        })
        .catch((e)=>{
           console.log(e)
        })
    })

  return (
    <div>
         <h2>Request for Admin login</h2>
      <form onSubmit={handlerequest}>
        <label>Name</label>
            <input
                name="name"
                type="text"
                onChange={updateUser}
            />
            <label>Email</label>
            <input
                name="email"
                type="email"
                onChange={updateUser}
            />
            <label>Password</label>
            <input
                name="password"
                type="password"
                onChange={updateUser}
             />
            <button>Create Admin Request</button>
        </form>
    </div>
  )
}

export default Requestadmin