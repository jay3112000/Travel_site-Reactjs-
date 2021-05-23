import React from 'react'
import '../../components/catalog.css'
const Catalogcards=(props)=>{
    return (
      <>
        <div className='catalog-card'>
        <div className='catalog-card-image'>
           <img src={props.image} alt='no-image'/>
        </div>
        <div className='catalog-card-content'>
          <div className='catalog-card-title'>
            <h3>
               {props.name}
            </h3>
          </div>
          <div >
            <p>
              {props.content}
            </p>
          </div>
        </div>
      </div>
      </>
    );
}

export default Catalogcards;
