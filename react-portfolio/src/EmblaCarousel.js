import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import './EmblaCarousel.css'
import ImageByIndex from './ImageByIndex';
import Autoplay from 'embla-carousel-autoplay'

import AnimatedBlock from "./AnimatedBlock";
import csharp from './images/c-sharp logo.png'
import webdev from './images/html5-logo-31816.png'
import python from './images/Python-Logo.png'
import unity from './images/unitylogo.png'
import sql from './images/sql.png'
import node from './images/nodejs-1-logo.png'
import figma from './images/Figma-1-logo.png'
import reactlogo from  './images/reactlogo.svg';

const EmblaCarousel = (props) => {
    const { slides, options, autoplayOptions } = props
    const [emblaRef] = useEmblaCarousel(options, [Autoplay(autoplayOptions)])
  
    return (
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((index) => (
              <div className="embla__slide" key={index}>
                <img
                  className="embla__slide__img"
                  src={ImageByIndex(index)}
                  alt="Logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  export default EmblaCarousel