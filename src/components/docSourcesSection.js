'use client';
import * as React from 'react'
import { useRef } from 'react'
import { useTheme } from 'next-themes';
import Image from 'next/image';
import SectionAnimationProvider from './fullPageSnappyScrolling/sectionAnimationProvider'
import iOSImageLight from "/src/images/iOS/documentScanner_light_iOS.png"
import macOSImageLight from "/src/images/macOS/dropFileToCreate_light_macOS.png"
import iOSImageDark from "/src/images/iOS/documentScanner_dark_iOS.png"
import macOSImageDark from "/src/images/macOS/dropFileToCreate_dark_macOS.png"

const DocSourcesSection = () => {
    const animationRef = useRef();
    const {theme, setTheme} = useTheme();

    // const ref1 = useRef();
    // const isVisible1 = useIsVisible(ref1);

    // const ref2 = useRef();
    // const isVisible2 = useIsVisible(ref2);

    return (
     <SectionAnimationProvider animationRef={animationRef}>
    
        <div className="sectionDefault">

            <div className='flex flex-col'>

                <div className='title mt-2'> Go paperless</div>
                
                <div ref={animationRef} className='flex items-baseline mt-10'>
                        <div className='justify-center items-baseline' >
                            <Image className='galleryImg align-middle' src={theme === 'light' ? iOSImageLight: iOSImageDark} alt="iOS document scanner" />
                            <div className='textBox text-center mx-6 mt-2'>On iPhone and iPad, scan pages with your camera. Or import images and files.</div>

                        </div>

                        <div className='hidden landscape:inline-block justify-center'>
                            <Image className='galleryImg align-middle' src={theme === 'light' ? macOSImageLight : macOSImageDark}  alt="MacOS drop file to create document" />
                            <div className='textBox text-center mx-12 mt-2'>On your Mac, simply drag and drop a file into the documents list or click the import button to select files.</div>
                        </div>
                </div>
            </div>

        </div>
  
    

     </SectionAnimationProvider>
    )
}

// study later: tailwind animation with custom react hook 
//transition-opacity ease-in duration-500 ${isVisible1 ? "opacity-100" : "opacity-0"}`

export default DocSourcesSection