// import React, {useState} from 'https://cdn.skypack.dev/react';
// import ReactDOM from 'https://cdn.skypack.dev/react-dom';
import {TiChevronLeftOutline, TiChevronRightOutline} from 'https://cdn.skypack.dev/react-icons/ti';

import React, { useState } from "react";
import "./Carousel.css"

let CARDS
const MAX_VISIBILITY = 3;

const Image = ({src, alt}) => (
  <div className='card'>
    <img src = {src} alt = {alt}/>
  </div>
);

const Carousel = ({children}) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);
  
  return (
    <div className='carousel'>
      {active > 0 && <button className='nav left' onClick={() => setActive(i => i - 1)}><TiChevronLeftOutline/></button>}
      {React.Children.map(children, (child, i) => (
        <div key = {i} id='card-container' style={{
            '--active': i === active ? 1 : 0,
            '--offset': (active - i) / 3,
            '--direction': Math.sign(active - i),
            '--abs-offset': Math.abs(active - i) / 3,
            'pointerEvents': active === i ? 'auto' : 'none',
            'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
            'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
          }}>
          {child}
        </div>
      ))}
      {active < count - 1 && <button className='nav right' onClick={() => setActive(i => i + 1)}><TiChevronRightOutline/></button>}
    </div>
  );
};

export const AppCarousel = ({src, alt}) => {
  CARDS = src.length
  return (
  <div id="carouselPage">
    <div className='app'>
      <Carousel>
        {[...new Array(CARDS)].map((_, i) => (
          <Image key = {i} src = {src[i]} alt = {alt}/>
        ))}
      </Carousel>
    </div>
  </div>
)};

// ReactDOM.render(
//   <AppCarousel/>,
//   document.body
// );