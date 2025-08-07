import React from 'react'
import './Product.css'
import kit from './assets/kit.avif'
import bag from './assets/bag.avif'
import handlosh from './assets/handloshon.avif'
import book from './assets/book.avif'

const Product = () => {
  return (
    <div className='container'>
    <div className='product'>
        <div className="product1">
            <img src={kit} alt="" className="kit" />
            <p>LOVE+CAREPACK</p>
            <p>$50</p>
        </div>
        <div className="product2">
            <img src={bag} alt="" className="bag" />
             <p>TWO GOOD TOTE BAG</p>
            <p>$40</p>
        </div>
        <div className="product3">
                <img src={handlosh} alt="" className="hand" />
                 <p>NOURISH & SOOTHE HAND LOTION </p>
            <p>$38</p>
            </div>  
        <div className="product4">
            <img src={book} alt="" className="book" />
              <p>COOKBOOK TWO</p>
                <p>$45</p>   
            
            </div> 
           
    </div>
    </div>
  )
}

export default Product

