/* eslint-disable import/no-anonymous-default-export */

import React from 'react'
import WebSitePreview from './WebSitePreview'

// Lazy Loading Images
// const imgTargets = document.querySelectorAll('img[data-src]')
// const loadImg = (entries, observer) =>
// {
//     const [entry] = entries;

//     if (!entry.isIntersecting) return;

//     // Replace src with data-src
//     entry.target.src = entry.target.dataset.src;
//     entry.target.addEventListener('load', () => entry.target.classList.remove('lazy-img'));
//     observer.unobserve(entry.target);
// };

// const imgObserver = new IntersectionObserver(loadImg, 
// {
// root: null,
// threshold: 0,
// rootMargin: '200px',
// });
// imgTargets.forEach(img => imgObserver.observe(img));

export default () =>
(
<section id="work-a" className = "text-center py-1">
<div className = "container">
    {/* <h2 className = "section-title frost"> */}
    <h2 className = "section-title">
        <span className = "red"> ▶ [ </span>
        Some of my works
    <span className = "red">]</span>
        <div className = "bottom-line"></div>  
        <p className = "lead">
        Check GitHub profile for others
        </p>
    </h2>
    <div className = "items py-4">
        <WebSitePreview 
            dataSrc     = "img/items/prew-a10-lazy.jpg"
            src         = "img/items/prew-a10.jpg"
            href        = "https://elegant-spence-1f45ba.netlify.app/"
            WebSiteName = "A-10 LAB"   
        />
        <WebSitePreview 
            dataSrc     = "img/items/prew-bukee-lazy.jpg"
            src         = "img/items/prew-bukee.jpg"
            href        = "https://cranky-wescoff-fb4651.netlify.com"
            WebSiteName = "BUKEE"
        />
        <WebSitePreview 
            dataSrc     = "img/items/prew-B152-black-lazy.jpg"
            src         = "img/items/prew-B152-black.jpg"
            href        = "https://cocky-spence-cedba8.netlify.app/"
            WebSiteName = "B152_Black"
        />
        <WebSitePreview 
            dataSrc     = "img/items/prew-bankist-lazy.jpg"
            src         = "img/items/prew-bankist.jpg"
            href        = "https://vibrant-stonebraker-718e7f.netlify.app/"
            WebSiteName = "BANKIST"
        />
        <WebSitePreview 
            dataSrc     = "img/items/prew-edgeledger-lazy.jpg"
            src         = "img/items/prew-edgeledger.jpg"
            href        = "https://ecstatic-poincare-15b597.netlify.com"
            WebSiteName = "EdgeLedger"
        />
        <WebSitePreview 
            dataSrc     = "img/items/prew-grid-lazy.jpg"
            src         = "img/items/prew-grid.jpg"
            href        = "https://competent-banach-9fdd6d.netlify.com"
            WebSiteName = "GridNews"
        />
        <WebSitePreview 
            dataSrc     = "img/items/prew-hw-b-lazy.jpg" 
            src         = "img/items/prew-hw-b.jpg"
            href        = "https://practical-curie-6a7c54.netlify.com" 
            WebSiteName = "HW-B"
        />
        <WebSitePreview 
            dataSrc     = "img/items/prew-presentation-lazy.jpg" 
            src         = "img/items/prew-presentation.jpg"
            href        = "https://zen-hopper-2ebf1f.netlify.com/"
            WebSiteName = "Presentation"
        />
        <WebSitePreview 
            dataSrc     = "img/items/prew-timeline-lazy.jpg"
            src         = "img/items/prew-timeline.jpg"
            href        = "https://competent-bhaskara-328919.netlify.com"
            WebSiteName = "Timeline"
        />
        <WebSitePreview 
            dataSrc     = "img/items/prew-KittyLab-lazy.jpg" 
            src         = "img/items/prew-KittyLab.jpg"
            href        = "https://confident-banach-cc4a1e.netlify.com/"
            WebSiteName = "KittyLab"
        />
        <WebSitePreview 
            dataSrc     = "img/items/prew-B152-lazy.jpg" 
            src         = "img/items/prew-B152.jpg"
            href        = "https://confident-mahavira-1727f1.netlify.app/"
            WebSiteName = "B152"
        />
        <WebSitePreview 
            dataSrc     = "img/items/prew-Re-lazy.jpg"
            src         = "img/items/prew-Re.jpg"
            href        = "https://laughing-poincare-a5b323.netlify.app/"
            WebSiteName = "Re:"
        />
    </div>
</div>
</section>
)

