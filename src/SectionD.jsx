
import React from 'react'

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

function SectionD()
{
return(
<section id="work-a" className = "text-center py-1">
<div className = "container">
<h2 className = "section-title frost">
    <span className = "red"> > [ </span>
    Some of my works
<span className = "red">]</span>
    <div className = "bottom-line"></div>  
    <p className = "lead">
    Check GitHub profile for others
    </p>
</h2>
<div className = "items py-4">
    <div className = "item">
    <div className = "item-image">
        <img 
        data-src="img/items/prew-a10.jpg"
        src="img/items/prew-a10-lazy.jpg"
        className = "lazy-img"
        alt=""
        />
    </div>
    <div className = "item-text">
        <div className = "item-text-wrap">
        <p className = "item-text-category">Web Site Example</p>
        <h2 className = "item-text-title"><a href="https://elegant-spence-1f45ba.netlify.app/" target="_blank">A-10 LAB</a></h2>
        </div>
    </div>
    </div>
    <div className = "item">
    <div className = "item-image">
        <img 
        data-src="img/items/prew-bukee.jpg"
        src="img/items/prew-bukee-lazy.jpg"
        className = "lazy-img"
        alt=""
        />
    </div>
    <div className = "item-text">
        <div className = "item-text-wrap">
        <p className = "item-text-category">Web Site Example</p>
        <h2 className = "item-text-title"><a href="https://cranky-wescoff-fb4651.netlify.com" target="_blank">Bukee</a></h2>
        </div>
    </div>
    </div>

    <div className = "item">
    <div className = "item-image">
        <img
        data-src="img/items/prew-B152-black.jpg"
        src="img/items/prew-B152-black-lazy.jpg"
        className = "lazy-img"
        alt=""
        />
    </div>
    <div className = "item-text">
        <div className = "item-text-wrap">
        <p className = "item-text-category">Web Site Example</p>
        <h2 className = "item-text-title"><a href="https://cocky-spence-cedba8.netlify.app/" target="_blank">B125 (black version)</a></h2>
        </div>
    </div>
    </div>

    <div className = "item">
    <div className = "item-image">
        <img
        data-src="img/items/prew-bankist.jpg"
        src="img/items/prew-bankist-lazy.jpg"
        className = "lazy-img"
        alt=""
        />
    </div>
    <div className = "item-text">
        <div className = "item-text-wrap">
        <p className = "item-text-category">Web Site Example</p>
        <h2 className = "item-text-title"><a href="https://vibrant-stonebraker-718e7f.netlify.app/" target="_blank">Bankist</a></h2>
        </div>
    </div>
    </div>

    <div className = "item">
    <div className = "item-image">
        <img
        data-src="img/items/prew-edgeledger.jpg" 
        src="img/items/prew-edgeledger-lazy.jpg"
        className = "lazy-img"
        alt=""
        />
    </div>
    <div className = "item-text">
        <div className = "item-text-wrap">
        <p className = "item-text-category">Web Site Example</p>
        <h2 className = "item-text-title"><a href="https://ecstatic-poincare-15b597.netlify.com" target="_blank">EdgeLedger</a></h2>
        </div>
    </div>
    </div>

    <div className = "item">
    <div className = "item-image">
        <img
        data-src="img/items/prew-grid.jpg"
        src="img/items/prew-grid-lazy.jpg"
        className = "lazy-img"
        alt=""
        />
    </div>
    <div className = "item-text">
        <div className = "item-text-wrap">
        <p className = "item-text-category">Web Site Example</p>
        <h2 className = "item-text-title"><a href="https://competent-banach-9fdd6d.netlify.com" target="_blank">Grid News</a></h2>
        </div>
    </div>
    </div>

    <div className = "item">
    <div className = "item-image">
        <img
        data-src="img/items/prew-hw-b.jpg" 
        src="img/items/prew-hw-b-lazy.jpg"
        className = "lazy-img"
        alt=""
        />
    </div>
    <div className = "item-text">
        <div className = "item-text-wrap">
        <p className = "item-text-category">Web Site Example</p>
        <h2 className = "item-text-title"><a href="https://practical-curie-6a7c54.netlify.com" target="_blank">HW-B Hotel</a></h2>
        </div>
    </div>
    </div>

    <div className = "item">
    <div className = "item-image">
        <img
        data-src="img/items/prew-presentation.jpg" 
        src="img/items/prew-presentation-lazy.jpg"
        className = "lazy-img"
        alt=""
        />
    </div>
    <div className = "item-text">
        <div className = "item-text-wrap">
        <p className = "item-text-category">Web Site Example</p>
        <h2 className = "item-text-title"><a href="https://zen-hopper-2ebf1f.netlify.com/" target="_blank">Base 4 Simple Presentation</a></h2>
        </div>
    </div>
    </div>

    <div className = "item">
    <div className = "item-image">
        <img
        data-src="img/items/prew-timeline.jpg"
        src="img/items/prew-timeline-lazy.jpg"
        className = "lazy-img"
        alt=""
        />
    </div>
    <div className = "item-text">
        <div className = "item-text-wrap">
        <p className = "item-text-category">Web Site Example</p>
        <h2 className = "item-text-title"><a href="https://competent-bhaskara-328919.netlify.com" target="_blank">Base 4 Timeline</a></h2>
        </div>
    </div>
    </div>
    
    <div className = "item">
    <div className = "item-image">
        <img
        data-src="img/items/prew-KittyLab.jpg" 
        src="img/items/prew-KittyLab-lazy.jpg"
        className = "lazy-img"
        alt=""
        />
    </div>
    <div className = "item-text">
        <div className = "item-text-wrap">
        <p className = "item-text-category">Bootstrap Example</p>
        <h2 className = "item-text-title"><a href="https://confident-banach-cc4a1e.netlify.com/" target="_blank">KittyLab</a></h2>
        </div>
    </div>
    </div>

    <div className = "item">
    <div className = "item-image">
        <img
        data-src="img/items/prew-B152.jpg" 
        src="img/items/prew-B152-lazy.jpg"
        className = "lazy-img"
        alt=""
        />
    </div>
    <div className = "item-text">
        <div className = "item-text-wrap">
        <p className = "item-text-category">Web Site Example</p>
        <h2 className = "item-text-title"><a href="https://confident-mahavira-1727f1.netlify.app/" target="_blank">B125</a></h2>
        </div>
    </div>
    </div>

    <div className = "item">
    <div className = "item-image">
        <img
        data-src="img/items/prew-Re.jpg"
        src="img/items/prew-Re-lazy.jpg"
        className = "lazy-img"
        alt=""
        />
    </div>
    <div className = "item-text">
        <div className = "item-text-wrap">
        <p className = "item-text-category">Web Site Example</p>
        <h2 className = "item-text-title"><a href="https://laughing-poincare-a5b323.netlify.app/" target="_blank">Re:</a></h2>
        </div>
    </div>
    </div>
</div>
</div>
</section>
)}

export default SectionD