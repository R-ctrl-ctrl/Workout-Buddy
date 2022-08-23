import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="Navbar">
        <div className='heading'><Link style={{textDecoration:"none"}} to="/"><p className='p'>Workout Buddy</p></Link></div>
      </div>
    </div>
  )
}

export default Navbar
