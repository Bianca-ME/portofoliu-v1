import React from 'react';

// demo img
import ImgDemo from '../assets/images/photographs/index';

export default function Photography() {
    return (
        <main className='margin-from-header'>

            <p>photographs</p>
            <div className='images-container'>
                <img src={ImgDemo[1]} alt="" className="imgdemo" />
                <img src={ImgDemo[2]} alt="" className="imgdemo" />
                {/* <img src={ImgDemo[3]} alt="" className="imgdemo" /> */}
                <img src={ImgDemo[4]} alt="" className="imgdemo" />
                {/* <img src={ImgDemo[10]} alt="" className="imgdemo" /> */}
                <img src={ImgDemo[5]} alt="" className="imgdemo" />
                <img src={ImgDemo[6]} alt="" className="imgdemo" />
                <img src={ImgDemo[17]} alt="" className="imgdemo" />
                <img src={ImgDemo[7]} alt="" className="imgdemo" />
                <img src={ImgDemo[8]} alt="" className="imgdemo" />
                <img src={ImgDemo[20]} alt="" className="imgdemo" />
                <img src={ImgDemo[9]} alt="" className="imgdemo" />
                <img src={ImgDemo[10]} alt="" className="imgdemo" />
                <img src={ImgDemo[11]} alt="" className="imgdemo" />
                <img src={ImgDemo[12]} alt="" className="imgdemo" />
                <img src={ImgDemo[13]} alt="" className="imgdemo" />
                {/* <img src={ImgDemo[15]} alt="" className="imgdemo" /> */}
                <img src={ImgDemo[16]} alt="" className="imgdemo" />
                <img src={ImgDemo[18]} alt="" className="imgdemo" />
                <img src={ImgDemo[19]} alt="" className="imgdemo" />
                <img src={ImgDemo[21]} alt="" className="imgdemo" />
                <img src={ImgDemo[22]} alt="" className="imgdemo" />
                {/* <img src={ImgDemo[23]} alt="" className="imgdemo" /> */}
                {/* <img src={ImgDemo[24]} alt="" className="imgdemo" /> */}
                <img src={ImgDemo[24]} alt="" className="imgdemo" />
            </div>
            <img src={ImgDemo[19]} alt="" className="imgdemo" />
            <img src={ImgDemo[3]} alt="" className="imgdemo" />
            <img src={ImgDemo[14]} alt="" className="imgdemo" />

        </main>
    )
}