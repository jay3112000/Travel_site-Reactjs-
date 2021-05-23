import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Link } from 'react-router-dom';
function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            
            <Link  to='/amazon'>
            <CardItem
              src='images/img-4.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              
            />
            </Link>

           
         <Link  to='/bali'>
         <CardItem
              src='images/img-7.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
         
         </Link>
            
          </ul>
          <ul className='cards__items'>
            <Link to='/atlantic'>
            <CardItem
              src='images/img-6.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            </Link>
            <Link to='/mountain'>
            <CardItem
              src='images/img-5.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            </Link>
           <Link to='/sahara'>
           <CardItem
              src='images/img-1.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
           </Link>
           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
