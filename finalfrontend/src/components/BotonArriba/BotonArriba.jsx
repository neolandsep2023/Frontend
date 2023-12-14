import React, { useEffect, useState } from 'react'
import { ButtonPrimary } from '../StyleComponents';

export const BotonArriba = () => {
    const [showBackToTop, setShowBackToTop] = useState(false);

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (<>
   {showBackToTop && (
        <ButtonPrimary className="back-to-top" onClick={scrollToTop}>
          Back to Top
        </ButtonPrimary>
      )}</>
   
  )
}
