import React from 'react'
import './About.css'
import rect from './assets/Rectangle.jpg'
import rect1 from './assets/Rectangle2.avif'
import rect2 from './assets/Rectangle3.avif'
import rect3 from './assets/Rectangle220.avif'
import vector from './assets/Vector.svg'

const About = () => {
  return (
    <div className='about'>
      <div className="headu">
        <h1 className='heading'>CHANGE <br />THE COURSE</h1>
      </div>

      <img src={rect} alt="" className='rectangle' />

      <div className='im'>
        <div className='im1'>
          <img src={rect2} alt="" className='rect1' />
          <div className='button1'>
            <ul className='unorder'>
              <li>
                <b>NEW GODDIES</b>
                <img src={vector} alt="" className='vect' />
                <p className="hidden">shop</p>
              </li>
            </ul>
          </div>
        </div>

        <div className='im2'>
          <img src={rect1} alt="" className='rect2' />
          <div className='button2'>
            <ul className='unorder'>
              <li>
                <b>PANTRY</b>
                <img src={vector} alt="" className='vect' />
                <p className="hidden">shop</p>
              </li>
            </ul>
          </div>
        </div>

        <div className='im3'>
          <img src={rect3} alt="" className='rect3' />
          <div className='button3'>
            <ul className='unorder'>
              <li>
                <b>BATH</b>
                <img src={vector} alt="" className='vect' />
                <p className="hidden">shop</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='content'>
        <div className="bold-text">
          <h1>WE BELIEVE IN PEOPLE,<br />UNTILL THEY BELIEVE IN<br />THEMSELVES AGAIN.</h1>
        </div>
        <div className="para">
          <div className="para1">
            <p>
              Everything we do is designed to rebuild <br />
              self worth and independence, in order to <br />
              break free from the cycle of <br />
              disadvantage.
            </p>
          </div>
          <div className="para2">
            With every purchase you make with us, <br />
            you're helping to change the course of <br />
            someone's life; you're walking alongside <br />
            vulnerable women as they find their way <br />
            home again.
          </div>
          <a href="#" className='link'>SHOP TO SUPPORT</a>
        </div>
      </div>
    </div>
  )
}

export default About
