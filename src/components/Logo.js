import React from 'react';

// assets
import logoimg from '../assets/images/logo/bi.svg';
import self_portrait1 from '../assets/images/self_portraits/me_b.jpg';
import self_portrait1_crop1 from '../assets/images/self_portraits/me_b_crop1.jpg';
import self_portrait1_crop2 from '../assets/images/self_portraits/me_b_crop2.jpg';
// import self_portrait1_crop3 from '../assets/images/self_portraits/me_b_crop3.jpg';

export default function Logo () {
    return (
        <main className='logo-container'>
        
            <img className='logo' src={self_portrait1_crop2} alt="img can.t be seen"></img>
            {/* <p>Maghiar Engelmann Bianca</p> */}
            
        </main>
    )
}