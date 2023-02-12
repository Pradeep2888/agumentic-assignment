import React from 'react'
import Bottom from '../Components/Bottom'
import Middle from '../Components/Middle'
import Navbar from '../Components/Navbar'
import Upper from '../Components/Upper'

function Home() {
  return (
    <div>
      <Navbar/>
        <Upper/>
        <Middle/>
        <Bottom/>
    </div>
  )
}

export default Home