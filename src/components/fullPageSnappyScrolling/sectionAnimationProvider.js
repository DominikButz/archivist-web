'use client';
import * as React from "react"
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useEffect} from "react";
gsap.registerPlugin(ScrollTrigger);

const SectionAnimationProvider = ({animationRef, children}) => {

    useEffect(()=> {
      gsap.fromTo(
        animationRef.current, 
        {
          autoAlpha: 0,
          y: -40
  
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            scroller: ".fullPageContainer",
            trigger: animationRef.current,
            start: "top 60%",
            end: "bottom 0%",
            toggleActions: "play none restart reverse"
          }
        }
      )
    }, [])
    
    return (
    <>
       {children}
    </>
    )
}


export default SectionAnimationProvider

