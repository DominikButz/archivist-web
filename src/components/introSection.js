'use client';
import * as React from 'react'
import { useRef } from 'react'
import { useTheme } from 'next-themes';
import Image from 'next/image';
import SectionAnimationProvider from './fullPageSnappyScrolling/sectionAnimationProvider'
import iOSImageLight from "/src/images/iOS/documentsList_light_iOS.png"
import macOSImageLight from "/src/images/macOS/mainWindowWithEditView_light_macOS.png"
import iOSImageDark from "/src/images/iOS/documentsList_dark_iOS.png"
import macOSImageDark from "/src/images/macOS/mainWindowWithEditView_dark_macOS.png"

const IntroSection = () => {
    const animationRef = useRef();
    const {theme, setTheme} = useTheme();
    console.log('theme ' + theme)
    const iOSImage = theme === 'light' ? iOSImageLight : iOSImageDark
    const macOSImage = theme === 'light' ?  macOSImageLight: macOSImageDark

    return (

    <SectionAnimationProvider animationRef={animationRef}>
    
        <div className='sectionDefault'>
     
            <div className='title mt-12'>
                It&apos;s that simple.
            </div>

            <div className="textBox mt-2 mx-8">
                Archivist is an AI-powered document archiving app for iOS, iPadOS and MacOS. It safely stores your documents
                in your iCloud Drive folder and the document data in Apple&apos;s CloudKit database. 
                All you need is an iCloud account.   
            </div>
      
            <div ref={animationRef} className='flex mt-4  mx-auto'>
                <Image className='galleryImg' src={iOSImage} alt="Dr. Archiver documents list view" />
                <Image className='galleryImg hidden landscape:block' src={macOSImage}  alt="Dr. Archiver main window" />  
            </div>

     
        </div>
  
    

    </SectionAnimationProvider>
 
    )
}

export default IntroSection
