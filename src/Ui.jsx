import React from 'react'
import './index.css'
const Ui = ({id,title,price,category,image}) => {
       
  return (
    <div>  
        <div className='allbox'>
           <img src={image} alt="" className='images'/>
           <h4>{title}</h4>
           <p>{category}</p>
           <p>{price}</p>
        </div>
    </div>
  )
}

export default Ui
