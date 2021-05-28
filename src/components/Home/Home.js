import React from 'react'
import home from '../../Assets/home.png';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
    return (
        <div className="home">
            <Link to='/shop'><img src={home} alt='banner' className='hero-image' /></Link>
            <h2 className='headings'>Featured Categories</h2>

      <div className='categories-container'>
        <Link to='/shop' className='card-link' >
          <div className='category-card'>
            <img alt='category-img' src='https://res.cloudinary.com/dkavbodkk/image/upload/v1622022289/landing-page-images/sweatshirt.svg' className='category-img' />
            <h3 className='category-label'>Sweatshirts</h3>
          </div>
        </Link>
        <Link to='/shop' className='card-link' >
          <div className='category-card' >
            <img alt='category-img' src='https://res.cloudinary.com/dkavbodkk/image/upload/v1622022289/landing-page-images/trackpants.svg' className='category-img' />
            <h3 className='category-label'>Trackpants</h3>
          </div>
        </Link>
        <Link to='/shop' className='card-link' >
          <div className='category-card' >
            <img alt='category-img' src='https://res.cloudinary.com/dkavbodkk/image/upload/v1622022290/landing-page-images/tshirt.svg' className='category-img' />
            <h3 className='category-label'>Shirts</h3>
          </div>
        </Link>
        <Link to='/shop' className='card-link' >
          <div className='category-card' >
            <img alt='category-img' src='https://res.cloudinary.com/dkavbodkk/image/upload/v1622022289/landing-page-images/shoe.svg' className='category-img' />
            <h3 className='category-label'>Shoes</h3>
          </div>
        </Link>
      </div>
        </div>
    )
}

export default Home
