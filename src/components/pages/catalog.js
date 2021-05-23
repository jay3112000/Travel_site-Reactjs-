import React from 'react'
import '../../components/catalog.css'
import '../../App.css';
import Catalogcards from './catalog_cards';

const catalogs=({catalogdis})=> {
    {
        return (
            <div className='catalog-container'>
                <div className='h3_forest'>
                    <h2  >
                        Forests
                    </h2>
                </div>
                <Catalogcards name='Amazon Rainforest' image='images/card1_amazon.jpg' content='The Amazon rainforest, alternatively, the Amazon jungle or Amazonia, is a moist broadleaf tropical rainforest '/>
                <Catalogcards name='Dantree' image='images/forest2.jpg' content='As the oldest rainforest in the world, Daintree Forest commands a level of respect that Australian locals are happy to provide in the form of non-invasive tourism '/>
                <Catalogcards name='Sundarbans' image='images/forest3.jpg' content='Located in the coastal regions of the Bay of Bengal at the delta region of the Padma, Meghna and Brahmaputra River basins'/>
                <div className='h3_couple_tours'>
                    <h2 >
                        Couple Tours
                    </h2>
                </div>
                <Catalogcards name='Bali' image='images/bali.jpg' content='This could be the perfect romantic holiday for a unique marriage proposal. Will you say “I do” to a holiday in Bali? '/>
                <Catalogcards name='Paris' image='images/paris.jpg' content='Take a walk and feel the pulse of the city. Indulge your sweet tooth at one of the many patisseries dotted around the cobbled streets'/>
                <Catalogcards name='Hawai' image='images/hawai.jpg' content='Share a smooch on one of the benches of the Foster Botanical Gardens, then join a beach party and relax.'/>
                <div className='h3_museums'>
                    <h2 >
                        Museums
                    </h2>
                </div>
                <Catalogcards name='National Museum of China ' image='images/m1.jpg' content='The National Museum of China in Beijing is one of the most visited museums in the world, receiving more than 7 million annual visitors'/>
                <Catalogcards name='Metropolitan Museum' image='images/m2.jpg' content='Besides the Smithsonian, the Metropolitan Museum of Art in New York is the largest museum in the USA. It is also one of the most all-encompassing galleries in the world'/>
                <Catalogcards name='Vatican Museums' image='images/m3.jpg' content='This is the most famous and popular museum in Italy. It is composed of twenty-two separate collections, with each one more remarkable than the next.'/>
          
          </div> 
          
        );
    }
   
};

export default catalogs;
