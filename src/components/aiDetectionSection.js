'use client';
import * as React from 'react'
import { useRef } from 'react'
import Image from 'next/image';
import { useTheme } from 'next-themes';
import SectionAnimationProvider from './fullPageSnappyScrolling/sectionAnimationProvider'
import iOSImageLight from "/src/images/iOS/gptDetection_light_iOS-iphone_14_pro_web.png"
import iOSImageDark from "/src/images/iOS/gptDetection_dark_iOS-iphone_14_pro_web.png"
import MacOSImageLight from "/src/images/macOS/gptDetection_light_macOS-front-web.png"
import MacOSImageDark from "/src/images/macOS/gptDetection_dark_macOS-front-web.png"
import OpenAILogoOnDark from "/src/images/powered-by-openai-badge-filled-on-dark.png"
import OpenAILogoOnLight from "/src/images/powered-by-openai-badge-filled-on-light.png"
// test: new commit to trigger vercel update
const AIDetectionSection = () => {
    const animationRef = useRef();
    const {theme, setTheme} = useTheme();

    return (
    <SectionAnimationProvider animationRef={animationRef}>
    
        <div className='sectionDefault justify-around items-center'>

          <div className='title mt-12'>Ready for more?</div>
            <div className="textBox text-center mx-4">
        
                Switch on AI document properties detection and ask GPT 3.5 Turbo to set the topic(s), document type and title.
            </div>
            <div className='block sm:hidden mx-auto' >
                <Image className='h-8 object-contain my-1' src={ theme === 'light' ? OpenAILogoOnLight : OpenAILogoOnDark} alt="Powered by OpenAI"/>
            </div>

            <div ref={animationRef} className='flex flex-row mx-auto items-baseline'>
                <Image  className='object-scale-down max-h-[68dvh] portrait:max-h-[70dvh] mobileLandscape:max-h-[50dvh] landscape:pl-12 portrait:px-auto' src={theme === 'light' ? iOSImageLight : iOSImageDark} alt="iOS GPT document properties detection" rounded />
                <Image className='object-scale-down max-h-[75dvh] mobileLandscape:max-h-[55dvh] hidden landscape:block' src={theme === 'light' ? MacOSImageLight : MacOSImageDark}  alt="MacOS GPT document properties detection" />  
            </div>



    
        </div>
  
    </SectionAnimationProvider>
    )
}

export default AIDetectionSection