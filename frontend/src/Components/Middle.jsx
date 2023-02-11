import React from 'react'
import "../Styles/middle.css"
import Card from './Card';

function Middle() {

    const arr = [
        {
          icon: 'https://img.icons8.com/bubbles/512/corgi.png',
          title:"Assignment",
          discription:"Sit donec enim, amet ipsum indummy content lorem ipsum"
        },
        {
          icon: 'https://img.icons8.com/bubbles/512/corgi.png',
          title:"Assignment",
          discription:"Sit donec enim, amet ipsum indummy content lorem ipsum"
        },
        {
          icon: 'https://img.icons8.com/bubbles/512/corgi.png',
          title:"Assignment",
          discription:"Sit donec enim, amet ipsum indummy content lorem ipsum"
        },
        {
          icon: 'https://img.icons8.com/bubbles/512/corgi.png',
          title:"Assignment",
          discription:"Sit donec enim, amet ipsum indummy content lorem ipsum"
        },
        {
          icon: 'https://img.icons8.com/bubbles/512/corgi.png',
          title:"Assignment",
          discription:"Sit donec enim, amet ipsum indummy content lorem ipsum"
        },
        {
          icon: 'https://img.icons8.com/bubbles/512/corgi.png',
          title:"Assignment",
          discription:"Sit donec enim, amet ipsum indummy content lorem ipsum"
        }
      ];


  return (
    <div className='container'>
        <div className='area1'>
            <div className='row1' >
                <h1>Features</h1>
            </div>
            <div className='row2' >
                <p>Parturient purus id nunc, nisl. Varius in pulvinar senectus qis. Lacus nec eleifend id nisl eu gravida tincidunt elementum.</p>
            </div>
            <div className='row3' >
                <button>More Features</button>
            </div>
        </div>
        <div className='area2'>
            {
                arr.map((item)=><Card key={item.title} icon={item.icon} title={item.title} discription={item.discription} />)
            }
        </div>
    </div>
  )
}

export default Middle