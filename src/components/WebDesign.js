import React from 'react';
import website1 from './../assets/images/websites/ufr_current_version.png';
import website2 from './../assets/images/websites/ufr_old_version2.png';
import website3 from './../assets/images/websites/homepage_sketch1.png';
import website4 from './../assets/images/websites/homepage_sketch2.png';

export default function WebDesign() {
    return (
        <main className='margin-from-header'>
            <p className="page-header">_web design projects_</p>
            <div className='general-text-padding-container'>
                <p className='medium-header'>project _ultrafilter_</p>
                <br />
                <p>A website makeover request for a client in the industrial domain. The challenge was to create a design and website structure so that the users can easily find the product they are searching for.</p>
                <br />
                <br />
                <br />
            </div>
            <p>current version - see below or <a href='https://654288e9e53f790083af8d54--stunning-beignet-3638a9.netlify.app/' target='_blank' rel='appendix'>open in new tab</a></p>
            <br />
            {/* <iframe width="100%" height="1000px" src="https://654288e9e53f790083af8d54--stunning-beignet-3638a9.netlify.app/" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            <img src={website1} alt="notes" className="notes" />
            <br />
            <br />
            <br />
            <p>previous version - see below or <a href='https://t20-v1-1-2--effortless-baklava-0b0295.netlify.app/' target='_blank' rel='appendix'>open in new tab</a></p>
            <br />
            <img src={website2} alt="notes" className="notes" />
            {/* <iframe width="100%" height="1000px" src="https://t20-v1-1-2--effortless-baklava-0b0295.netlify.app/" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            <br />
            <br />
            <br />
            <p>sketch made in Figma</p>
            <br />
            <img src={website3} alt="notes" className="notes" />
            <br />
            <br />
            <br />
            <p>sketch made in Procreate</p>
            <br />
            <img src={website4} alt="notes" className="notes" />

        </main>
    )
}