'use client';
import * as React from 'react'
import { useRef } from 'react'
import { useTheme } from 'next-themes';
import Image from 'next/image';
// import { Transition } from '@headlessui/react';
import SectionAnimationProvider from './fullPageSnappyScrolling/sectionAnimationProvider'
import iOSImageLight from "/src/images/iOS/documentsList_light_iOS_iPhone_14_pro_web.png"
import macOSImageLight from "/src/images/macOS/mainWindowWithEditView_light_macOS-front-web.png"
import iOSImageDark from "/src/images/iOS/documentsList_dark_iOS_iPhone_14_pro_web.png"
import macOSImageDark from "/src/images/macOS/mainWindowWithEditView_dark_macOS-front-web.png"

const IntroSection = () => {
    const animationRef = useRef();
    const {theme, setTheme} = useTheme();
    console.log('theme ' + theme)
    const iOSImage = theme === 'light' ? iOSImageLight : iOSImageDark
    const macOSImage = theme === 'light' ?  macOSImageLight: macOSImageDark

    return (

    <SectionAnimationProvider animationRef={animationRef}>
    
        <div className='sectionDefault justify-end items-center'>
     
            <div className='title mt-12'>
                It&apos;s that simple.
            </div>

            <div className="textBox mt-2 mx-8">
                Archivist is an AI-powered document archiving app for iOS, iPadOS and MacOS. It safely stores your documents
                in your iCloud Drive folder and the document data in Apple&apos;s CloudKit database. 
                All you need is an iCloud account.   
            </div>
        
            <div ref={animationRef} className='flex flex-row mt-4 items-baseline justify-around'>
                <Image className='object-scale-down max-h-[68dvh] portrait:max-h-[70dvh] mobileLandscape:max-h-[50dvh] landscape:pl-12 portrait:px-auto' src={iOSImage} alt="Dr. Archiver documents list view" />
                <Image className='object-scale-down max-h-[75dvh] mobileLandscape:max-h-[55dvh] hidden landscape:block' src={macOSImage}  alt="Dr. Archiver main window" />  
            </div>

     
        </div>
  
    

    </SectionAnimationProvider>
 
    )
}

export default IntroSection
