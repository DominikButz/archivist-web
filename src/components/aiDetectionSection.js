'use client';
import * as React from 'react'
import { useRef } from 'react'
import Image from 'next/image';
import { useTheme } from 'next-themes';
import SectionAnimationProvider from './fullPageSnappyScrolling/sectionAnimationProvider'
import iOSImageLight from "/src/images/iOS/gptDetection_light_iOS.png"
import iOSImageDark from "/src/images/iOS/gptDetection_dark_iOS.png"
import MacOSImageLight from "/src/images/macOS/gptDetection_light_macOS.png"
import MacOSImageDark from "/src/images/macOS/gptDetection_dark_macOS.png"
import OpenAILogoOnDark from "/src/images/powered-by-openai-badge-filled-on-dark.png"
import OpenAILogoOnLight from "/src/images/powered-by-openai-badge-filled-on-light.png"

const AIDetectionSection = () => {
    const animationRef = useRef();
    const {theme, setTheme} = useTheme();

    return (
    <SectionAnimationProvider animationRef={animationRef}>
    
        <div className='sectionDefault'>

             <div className="textBox text-center m-3">
        
                Ready for more? Switch on AI document properties detection and ask GPT 3.5 Turbo to set the topic(s), document type and title.
            </div>

            <div className='block lg:hidden' >
                <Image className='h-8 object-contain' src={ theme === 'light' ? OpenAILogoOnLight : OpenAILogoOnDark} alt="Powered by OpenAI"/>
            </div>

            <div ref={animationRef} className='flex justify-center items-center'>
                <Image  className='galleryImg' src={theme === 'light' ? iOSImageLight : iOSImageDark} alt="iOS GPT document properties detection" rounded />
                <Image className='galleryImg hidden lg:block' src={theme === 'light' ? MacOSImageLight : MacOSImageDark}  alt="MacOS GPT document properties detection" />  
            </div>

    
        </div>
  
    </SectionAnimationProvider>
    )
}

export default AIDetectionSection