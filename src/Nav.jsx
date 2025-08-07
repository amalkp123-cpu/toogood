import React from 'react'
import './Nav.css'
import logo from './assets/logo.svg'
import logoo from './assets/logo.png'
import nav1 from './assets/nav1.svg'
import nav2 from './assets/nav2.svg'

const Nav = () => {
  return (
    <div>
         <nav>
        <div className='images'>
            
            <img src={logo} alt="" className='logu'/>
            <img src={logoo} alt=""  className='xox'/>
        </div>
      <div className='second'>
         <div className='but'>
     
            <li>SHOP</li>
            <li> CATERING</li>
            <li> DONATE</li>
       </div>
        <div className="nav-img">
          <img src={nav1} alt="" />
          <img src={nav2} alt="" />
        </div>
      </div>
     
     </nav>
    </div>
  )
}

export default Nav
