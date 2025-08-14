import React from 'react';
import aboutPNG from './../assets/images/collages/visual-About-me.PNG';


export default function Bio() {
    return (
        <main className='margin-from-header'>
            {/* idea: by highlighting, reveal sensitive information. anxiety? */}
            <p className='page-header'>_about_</p>
            <div className='general-text-padding-container'>
                <p>My journey began with a brush in my hand and many pencils scattered around me. Drawing and painting have taught me to observe closely and pay attention to details, but I always had a technical side I did not know how to approach. This later led to web design while learning web development which was not to be the final destination, but the beginning of my programming explorations. Having always wanted to understand how things work and getting to the root of things, I'm now driven by a deep interest in electronics, sustainable design, and how things really work under the hood.</p>
                <br />
                <p>I believe in slow, meaningful growth and doing things the right way—whether it's designing an interface, debugging embedded code, or building a life aligned with values like quality, simplicity, and innovation.</p>
                <br />
            </div>
            <div className='centering-container'>
                <img src={aboutPNG} alt="visual About me collage PNG" className="notes"/>
            </div>
            {/* <img src={aboutPNG} alt="visual About me collage PNG"/> */}

        </main>
    )
}
