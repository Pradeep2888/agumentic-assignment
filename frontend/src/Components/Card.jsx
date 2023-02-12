import React from 'react'

function Card({icon,title,discription}) {
    // console.log(icon,title,discription)
  return (
    <div className='card'>
        <img src={icon}  alt='icon' />
        <h4>{title}</h4>
        <p>{discription}</p>
    </div>
  )
}

export default Card