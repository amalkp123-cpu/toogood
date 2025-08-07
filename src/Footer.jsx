import React from 'react'
import './Footer.css'
import xox from './assets/logo.png'
const Footer = () => {
  return (
    <div className='footer'>
      <hr />
      <div className="foot">
        <div className="foot1">
              <p className='connect'>CONNECT WITH US</p>
              <p>Facebook</p>
               <p>Instagram</p>
                <p>Twitter</p>
                 <p>Linkedin</p>
                  <p>YouTube</p>
        </div>
        <div className="foot2">
            <img src={xox} alt="" className="xox" />
            <div className="good">
              <p>© TWO CO.2025</p>
              <p>TERMS OF USE</p>
              <p>PRIVACY POLICY</p>
            </div>
            <p className='foot-content'>
               We are proud and privileged to have our home on this land, and to be able to continue the long tradition of community 
coming together around food, begun thousands of years ago by First Nations peoples. As we stand together on this unceded 
land, we acknowledge our First Nations people, are the original custodians of this land, and we recognise their deep 
connection to land, water, sky and community which continues today. We pay our deep respects to community elders, past, 
present and emerging, for they hold the memories, the traditions, the culture and hopes of Aboriginal and Torres Strait 
Islander peoples. Always was, always will be Aboriginal land
            </p>
        </div>
        <div className="foot3">
          <p className='nitty'>THE NITTY GRITTES</p>
          <p> Good Things FAQs</p>
          <p> Good Food FAQs</p>
          <p> Good Places</p>
          <p> Pathways</p>
          <p> Careers</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
