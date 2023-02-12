import axios from 'axios'
import React, { useState } from 'react'

function Contactus() {
    const [data, setData] = useState({})

    const updateData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const submit = e => {
        e.preventDefault()
        getData(data)
    }

    const getData=(data)=>{

        axios.post(`http://localhost:4000/estudee/getmail`,data)
        .then((r)=>{
            // console.log(r)
            if(r.data.msg==="you should receive an email"){
                alert("email send successfully")
            }
        })
        .catch((e)=>{
            alert("something went wrong")
        })
    }

  return (
    <div>
             <h2>Contect US</h2>
      <form onSubmit={submit}>
        <label>Name</label>
            <input
                name="name"
                type="text"
                onChange={updateData}
            />
            <label>Email</label>
            <input
                name="email"
                type="email"
                onChange={updateData}
            />
            <label>Phone Number</label>
            <input
                name="number"
                type="number"
                onChange={updateData}
             />
            <button>Create Contact Request</button>
        </form>
    </div>
  )
}

export default Contactus