import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AppContext';


function Adminlogin() {
    const [login, setLogin] = useState({})
    const {loginUser ,isAuth}=useContext(AuthContext)
    const navigate=useNavigate()
    const updateLogin = e => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    const handlelogin = e => {
        e.preventDefault()
        getData()
    }

    const getData=(()=>{
       
        axios.post("http://localhost:4000/estudee/login",login)
        .then((r)=>{
          console.log( r.data.mesg)
          if(r.data.mesg==="Login sucessfull"){
            loginUser(r.data.token)
            navigate("/adminhome")
          }
          else{
            alert("You are not a Admin")
          }
        })
        .catch((e)=>{
           console.log(e)
        })

    })


  return (
    <div> 
         <h2>Admin Login</h2>
    <form onSubmit={handlelogin}>
          <label>Email</label>
          <input
              name="email"
              type="email"
              onChange={updateLogin}
          />
          <label>Password</label>
          <input
              name="password"
              type="password"
              onChange={updateLogin}
           />
          <button> Admin login</button>
      </form></div>
  )
}

export default Adminlogin