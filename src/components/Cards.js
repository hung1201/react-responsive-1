import React from 'react'
import './Cards.css'
import CardItem from './CardItem'
import Img1 from '../Assets/images/img-1.jpg'
import Img2 from '../Assets/images/img-2.jpg'
import Img3 from '../Assets/images/img-3.jpg'
import Img4 from '../Assets/images/img-4.jpg'
import Img5 from '../Assets/images/img-5.jpg'
const Cards = () => {
    return (
<div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Img1}
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            
            <CardItem
              src={Img2}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={Img3}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src={Img4}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src={Img5}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
    )
}

export default Cards
