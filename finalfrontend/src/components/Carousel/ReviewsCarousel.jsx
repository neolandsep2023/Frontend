import {TiChevronLeftOutline, TiChevronRightOutline} from 'https://cdn.skypack.dev/react-icons/ti';

import React, { useState } from "react";
import "./ReviewsCarousel.css"

let CARDS
const MAX_VISIBILITY = 3;

const Review = ({src, alt, name, lastname, textComment}) => (
  <div className='cardReview'>
    <img src = {src} alt = {alt}/>
    <h4>{name}{lastname}</h4>
    <p>{textComment}</p>
  </div>
);

const Carousel = ({children}) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);
  
  return (
    <div className='carouselReview'>
      {active > 0 && <button className='navReview leftreview' onClick={() => setActive(i => i - 1)}><TiChevronLeftOutline/></button>}
      {React.Children.map(children, (child, i) => (
        <div key = {i} id='card-containerReview' style={{
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
      {active < count - 1 && <button className='navReview rightreview' onClick={() => setActive(i => i + 1)}><TiChevronRightOutline/></button>}
    </div>
  );
};

export const AppCarouselReview = ({comments}) => {
  CARDS = comments?.length
  return (
  <div id="carouselPage">
    <div className='appReview'>
      <Carousel>
        {[...new Array(CARDS)].map((_, i) => (
          <>
          <Review key={i} src={comments[i].creator?.image} alt={comments[i].creator?.name} name={comments[i].creator?.username} lastname={comments[i].creator?.lastName} textComment={comments[i].textComment} />
          {console.log(comments[i].creator)}
          </>
        ))}
      </Carousel>
    </div>
  </div>
)};