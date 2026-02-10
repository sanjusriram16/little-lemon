import React from 'react'
import './Cards.css'
import img1 from '../images/lemon dessert.jpg'
import img2 from '../images/restaurant.jpg'
import img3 from '../images/Mario and Adrian b.jpg'

const Cards = () => {

  return (
     <div className="cards">
      <div className="card card1">
        <h3>New Menu</h3>
        <p>Explore our seasonal Mediterranean specials — fresh and delightful!</p>
      </div>
      <div className="card card2">
        <h3>Book a Table</h3>
        <p>Skip the wait and reserve your spot online anytime.</p>
      </div>
      <div className="card card3">
        <h3>Opening Hours</h3>
        <p>Mon – Sun: 10am to 10pm. <br/>Visit us for brunch or dinner!</p>
      </div>
    </div>
  )
}

export default Cards