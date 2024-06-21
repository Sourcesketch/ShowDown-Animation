import React, { useState } from 'react';
import Wheel from '../Wheel';
import data from '../data';
// assets for spin wheel
import spinBtn from '../assets/images/wheel/btn-spin.png';
import marker from '../assets/images/wheel/marker.png';
const Test2 = () => {
    const [spin, setSpin] = useState(false);
    const [position, setposition] = useState(null);
    const handleSpinClick = () => {
      setSpin(true);
      console.log(data[0].position);
      setposition(data[0].position)
    };
    return (
        <div className='spin-wheel-container'>
            <img src={marker} alt='marker' className='marker' />
            <div id='wheel' className='wheel'>
                <Wheel spin={spin} position={position} />
            </div>
            <button onClick={handleSpinClick}>
                <img src={spinBtn} alt='marker' className='spin-btn' />
            </button>
        </div>
    )
}

export default Test2