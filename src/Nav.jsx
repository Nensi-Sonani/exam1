import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';

const Nav = () => {
  return (
    <div>
        <header className='header'>
            <div className="logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" alt="" className='image'/>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to='/home' className='link'>HOME</Link>
                    </li>
                    <li>
                        <Link to='/product' className='link'>PRODUCT</Link>
                    </li>
                    <li>
                        <Link to='/cart' className='link'>CART</Link>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Nav