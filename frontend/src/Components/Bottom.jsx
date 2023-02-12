import React from 'react'
import "../Styles/bottom.css"
import Lines from './Lines';

function Bottom() {

    const arr = [
        {
          discription:"Sit donec enim, amet ipsum indummy content lorem ipsum"
        },
        {
          discription:"Sit donec enim, amet ipsum indummy content lorem ipsum"
        },
        {
          discription:"Sit donec enim, amet ipsum indummy content lorem ipsum"
        },
        {
          discription:"Sit donec enim, amet ipsum indummy content lorem ipsum"
        },
        {
          discription:"Sit donec enim, amet ipsum indummy content lorem ipsum"
        },
        {
          discription:"Sit donec enim, amet ipsum indummy content lorem ipsum"
        }
      ];

  return (
    <div className='container3'>
        <div className='side1' >
            <img src='https://pbs.twimg.com/media/FUGK6cBXwAE_MYh.jpg' className='image' alt='image' />
        </div>
        <div className='side2' >
            <div className='row1' >
                <h1>What Think of Benifit from this app</h1>
            </div>
            <div className='row2' >
                <p>Et dignissim porta in molestie quis. Tellus mauris suspendisse sagittis senectus ornare molestie ultrices proin. Id laor</p>
            </div>
            <div className='row3'>
                {
                    arr.map((item)=><Lines key={item.description} discription={item.discription} />)
                }
            </div>
        </div>
    </div>
  )
}

export default Bottom