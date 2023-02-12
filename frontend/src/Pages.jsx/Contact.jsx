import React, { useRef, useState } from 'react'
import Adminlogin from '../Components/Contact/Adminlogin'
import Contactus from '../Components/Contact/Contactus'
import Requestadmin from '../Components/Contact/Requestadmin'
import "../Styles/contact.css"

function Contact() {
  return (
    <div className='container4'>
      <div className='box1'>
      <Contactus/>
      </div>


      <div className='box2'>
     <Requestadmin/>
      </div>

      <div className='box3'>
    <Adminlogin/>
      </div>
    </div>
  )
}

export default Contact