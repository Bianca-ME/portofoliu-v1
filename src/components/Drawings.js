import React from 'react';

import DrawingsImages from '../assets/images/drawings';

export default function Drawings() {
    return (
        <main className='margin-from-header'>

            <p>drawingsssss</p>
            <div className='images-container'>
                <img src={DrawingsImages[1]} alt="" className="imgsingrid" />
                <img src={DrawingsImages[2]} alt="" className="imgsingrid" />
                <img src={DrawingsImages[3]} alt="" className="imgsingrid" />
                <img src={DrawingsImages[4]} alt="" className="imgsingrid" />
                <img src={DrawingsImages[5]} alt="" className="imgsingrid" />
                <img src={DrawingsImages[6]} alt="" className="imgsingrid" />
            </div>

        </main>
    )
}