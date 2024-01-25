'use client';
import * as React from 'react'
import { useRef } from 'react'
import Image from 'next/image';
import SectionAnimationProvider from './fullPageSnappyScrolling/sectionAnimationProvider'
import iOSImageLight from "/src/images/iOS/documentsList_light_iOS.png"
import macOSImageLight from "/src/images/macOS/mainWindowWithEditView_light_macOS.png"


const IntroSection = () => {
    const animationRef = useRef();

    return (

    <SectionAnimationProvider animationRef={animationRef}>
    
        <div className='sectionDefault'>
      
            <div ref={animationRef} className='flex flex-row justify-center items-center'>
                <Image  className="galleryImg" src={iOSImageLight} alt="Dr. Archiver documents list view" />
                <Image className='galleryImg hidden lg:block' src={macOSImageLight}  alt="Dr. Archiver main window" />  
            </div>

            <div className="textBox">
                Dr. Archiver is an AI-powered document archiving app for iOS, iPadOS and MacOS. No subscription. No login. No ads. Dr. Archiver safely stores your documents
                as PDF files in your iCloud Drive folder and the document data in Apple's CloudKit database. Your data is entirely yours - no data mining, no data leaks.
                All you need is an iCloud account. It's that simple.  
            </div>
        </div>
  
    

    </SectionAnimationProvider>
 
    )
}

export default IntroSection
