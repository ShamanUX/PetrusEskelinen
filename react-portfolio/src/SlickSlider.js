import React, { Component } from "react";

import AnimatedBlock from "./AnimatedBlock";
import csharp from './images/c-sharp logo.png'
import webdev from './images/html5-logo-31816.png'
import python from './images/Python-Logo.png'
import unity from './images/unitylogo.png'
import sql from './images/sql.png'
import node from './images/nodejs-1-logo.png'
import figma from './images/Figma-1-logo.png'
import reactlogo from  './images/reactlogo.svg';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import "./styles.css";



export default function App() {
  return (
    <Splide
      options={{
        type: "slide",
        gap: "10px",
        drag: "free",
        arrows: false,
        pagination: false,
        perPage: 3,
      }}
      extensions={{  }}
    >                               
      <SplideSlide>
         <AnimatedBlock delay={200} source={reactlogo}/>
      </SplideSlide>
      <SplideSlide>
        <AnimatedBlock delay={250} source={webdev}/>
      </SplideSlide>
      <SplideSlide>
        <AnimatedBlock delay={300} source={figma}/>   
      </SplideSlide>
      <SplideSlide>
        <AnimatedBlock delay={350} source={unity}/>
      </SplideSlide>
      <SplideSlide>
        <AnimatedBlock delay={400} source={node}/>
      </SplideSlide>
      <SplideSlide>
        <AnimatedBlock delay={450} source={sql}/>
      </SplideSlide>
      <SplideSlide>
        <AnimatedBlock delay={500} source={csharp}/>
      </SplideSlide>
      <SplideSlide>
        <AnimatedBlock delay={550} source={python}/>
      </SplideSlide>
    </Splide>
  );
}
