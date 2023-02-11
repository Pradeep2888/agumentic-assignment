import React from 'react'
import "../Styles/upper.css"

function Upper() {
  return (
    <div className='container1' >
        <div className='left' >
            <div className='row1'>
                <h1>Digital platform for all student activity.</h1>
            </div>
            <div className='row2'>
                <span>Networking with lecture and also collegiate</span>
            </div>
            <div className='row3'>
                <button>
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="currentColor" 
                className="w-6h-6">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
                <p>Download App</p>
                </button>
            </div>
            <div className='row4'>
                <div className='box1'>
                     <svg 
                         xmlns="http://www.w3.org/2000/svg" 
                         viewBox="0 0 24 24" 
                         fill="yellow" 
                         class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                   <div>
                    <h3>4,5</h3>
                    <p className='reviews'>reviews</p>
                   </div>
                </div>
                <div className="vl"></div>
                <div className='box2' >
                <svg 
                         xmlns="http://www.w3.org/2000/svg" 
                         viewBox="0 0 24 24" 
                         fill="white" 
                         class="w-6 h-6">
                             <path fill-rule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clip-rule="evenodd" />
                    </svg>
                   <div>
                    <h3>189</h3>
                    <p className='reviews'>Good response</p>
                   </div>
                </div>
            </div>
        </div>

        <div className='right' >
            <img src="https://cdn.dribbble.com/users/1012608/screenshots/15757010/media/b6ae58a128637d55b28fcc7fb9b6dba6.jpg" alt='image' />
        </div>
    </div>
  )
}

export default Upper



// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
//   <path fill-rule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clip-rule="evenodd" />
// </svg>
