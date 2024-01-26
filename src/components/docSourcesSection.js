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
            <div ref={animationRef} className='flex flex-row justify-center items-center'>
                    <div className='flex flex-col items-center' >
                        <Image className='h-[65vh] object-contain drop-shadow-md' src={theme === 'light' ? iOSImageLight: iOSImageDark} alt="iOS document scanner" />
                        <div className='textBox text-center sm:w-1/2 lg:w-3/4 h-[10vh]'>On iPhone and iPad, simply create a document by scanning pages with your camera. Or import images and files.</div>

                    </div>

                    <div className='flex-col items-center justify-center hidden lg:block'>
                        <Image className='h-[65vh] object-contain drop-shadow-md' src={theme === 'light' ? macOSImageLight : macOSImageDark}  alt="MacOS drop file to create document" />
                        <div className='textBox text-center h-[10vh] pt-3 w-5/6'>On your Mac, simply drag and drop a file into the documents list or click the import button to select files.</div>
                     </div>
            </div>

        </div>
  
    

     </SectionAnimationProvider>
    )
}

// study later: tailwind animation with custom react hook 
//transition-opacity ease-in duration-500 ${isVisible1 ? "opacity-100" : "opacity-0"}`

export default DocSourcesSection