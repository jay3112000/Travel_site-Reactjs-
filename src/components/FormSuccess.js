import React from 'react';
import { Link } from 'react-router-dom';
import './Form.css';

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request!</h1>
      <img className='form-img-2' src='images/traveller2.jpg' alt='success-image' />
      <Link to='/catalogs'>
      <button className='form-catalog-btn' type='submit'>
          GO TO CATALOGS!
        </button>
      
      </Link>
      
    </div>
  );
};

export default FormSuccess;