import axios from 'axios'
import React from 'react'

function Userdetail({admin,name,mail,id,handelChange}) {

  

  return (
    <div>
         <ul>
        <li>{`Name:${name}  Email:${mail} ${admin}`} 
        <button onClick={()=>handelChange(id,admin)} >Change Status As {admin?"User":"Admin"}</button>
         </li>
        
      </ul>
    </div>
  )
}

export default Userdetail