'use client';
import * as React from 'react'
import { useRef } from 'react'
import Image from 'next/image';
import SectionAnimationProvider from './fullPageSnappyScrolling/sectionAnimationProvider'
import iOSImageLight from "/src/images/iOS/gptDetection_light_iOS.png"
import macOSImageLight from "/src/images/macOS/gptDetection_light_macOS.png"
import openAILogo from "/src/images/powered-by-openai-badge-outlined-on-dark.png"

const AIDetectionSection = () => {
    const animationRef = useRef();
    return (
    <SectionAnimationProvider animationRef={animationRef}>
    
        <div className='sectionDefault'>

             <div className="textBox text-center m-3">
        
                Ready for more? Switch on AI document properties detection and ask GPT 3.5 Turbo to set the topic(s), document type and title.
            </div>

            <div className='block lg:hidden' >
                <Image className='h-8 object-contain' src={openAILogo} alt="Powered by OpenAI"/>
            </div>

            <div ref={animationRef} className='flex justify-center items-center'>
                <Image  className='galleryImg' src={iOSImageLight} alt="iOS GPT document properties detection" rounded />
                <Image className='galleryImg hidden lg:block' src={macOSImageLight}  alt="MacOS GPT document properties detection" />  
            </div>

    
        </div>
  
    </SectionAnimationProvider>
    )
}

export default AIDetectionSection