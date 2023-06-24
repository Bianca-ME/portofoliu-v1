import React from 'react';

// demo img
import ImgDemo from '../assets/images/demo/index';

export default function Photography () {
    return (
        <main className='margin-from-header'>
        
            <p>photographs</p>
            <div className='images-container'>
                <img src={ImgDemo[1]} alt="" className="imgdemo" />
                <img src={ImgDemo[2]} alt="" className="imgdemo" />
                <img src={ImgDemo[3]} alt="" className="imgdemo" />
                <img src={ImgDemo[4]} alt="" className="imgdemo" />
                <img src={ImgDemo[10]} alt="" className="imgdemo" />
                <img src={ImgDemo[5]} alt="" className="imgdemo" />
                <img src={ImgDemo[6]} alt="" className="imgdemo" />
                <img src={ImgDemo[7]} alt="" className="imgdemo" />
                <img src={ImgDemo[8]} alt="" className="imgdemo" />
                <img src={ImgDemo[9]} alt="" className="imgdemo" />
            </div>
           
            
        </main>
    )
}