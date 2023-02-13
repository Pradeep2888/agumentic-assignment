import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Visitar({name,mail,phone}) {
  console.log(name,mail,phone)
  
  return (
    <div>
      <ul>
        <li>{`${name} ${mail} ${phone}`}</li>
      </ul>
    </div>
  )
}

export default Visitar