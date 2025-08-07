import React from 'react'
import './Contnent.css'
import image1 from './assets/Christina-Maria-Jes-Lindsay-9143.avif'
import image2 from './assets/Patricia-Work-Work-Good-Stories-Two-Good-Co.avif'

const Content = () => {
  return (
    <div>
        <div className="text">
            <h1>
                THANK YOU SO MUCH FOR 
THE BEAUTIFUL CATERING; IT 
MEANS A LOT WORKING WITH 
A COMPANY SUCH AS TWO 
GOOD CO.
            </h1>
            <button className='button'>SEND YOU OWN MESSAGE</button>
            <p> Sometimes it’s the smallest actions 
that can make the biggest impact.</p>
        </div>
        <div className="text-img">
            <div className="impact">
                <h1> OUR IMPACT.</h1>
                <p> The thing is, we don't save anyone</p>
                <p> What we do is provide a safe space for women to change the course of their own lives</p>
                <p className='long'>
                     After many years of living in crisis, abuse and complex trauma, restoring self-worth is foundational for independence. We believe that through experiences that promote love and respect, we can spark and nurture a sense of self-worth for those on the path of healing
                </p>
                <a href="#"> HERE'S HOW WE DO IT</a>
            </div>
            <div className="hello">
                <img src={image1} alt="" className="image1" />
                <img src={image2} alt="" className="image2" />
            </div>
        </div>
      
    </div>
  )
}

export default Content
