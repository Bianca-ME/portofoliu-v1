import React from 'react';

// assets
import logoimg from '../assets/images/logo/bi.svg';

export default function Logo () {
    return (
        <main className='logo-container'>
        
            <img className='logo' src={logoimg} alt="img can.t be seen"></img>
            {/* <p>Maghiar Engelmann Bianca</p> */}
            
        </main>
    )
}