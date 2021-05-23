import React,{useState,Component} from 'react';
import '../App.css';
import './Button.css';
import { Button } from './Button';
import './HeroSection.css';
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

import './Form';
import { Modal } from './Form';
function HeroSection() {
  const [modal, setModal] = useState(false);
  const[showModal,setShowModal]=useState(false);
  
  const openform=()=>{
    setShowModal(prev=>!prev);
    console.log ('where am I');
  };


  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Where would you like to go</h1>
     
      <div className='hero-btns'>
        <button
          className='btn--large'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={openform}
        >
          GET STARTED
        </button>
        <button
          className='btn--large'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={()=>setModal(true)}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </button>
        <ModalVideo
            channel="youtube"
            isOpen={modal}
            videoId="fEErySYqItI"
            onClose={() => setModal(false)}
          />
       
       
      </div>
      <Modal
      showModal={showModal}
       setShowModal={setShowModal}
        />

    </div>
  );
}

export default HeroSection;
