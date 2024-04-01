'use client';
import * as React from 'react'
import { useRef } from 'react'
import { useTheme } from 'next-themes';
import Image from 'next/image';
import SectionAnimationProvider from './fullPageSnappyScrolling/sectionAnimationProvider'
import iOSImageLight from "/src/images/iOS/documentScanner_light_iOS.png"
import macOSImageLight from "/src/images/macOS/dropFileToCreate_light_macOS-front-web.png"
import iOSImageDark from "/src/images/iOS/documentScanner_dark_iOS.png"
import macOSImageDark from "/src/images/macOS/dropFileToCreate_dark_macOS-front-web.png"

const DocSourcesSection = () => {
    const animationRef = useRef();
    const {theme, setTheme} = useTheme();

    // const ref1 = useRef();
    // const isVisible1 = useIsVisible(ref1);

    // const ref2 = useRef();
    // const isVisible2 = useIsVisible(ref2);

    return (
     <SectionAnimationProvider animationRef={animationRef}>
    
        <div className="sectionDefault justify-end items-center">

           

                <div className='title mt-4'> Go paperless</div>
                
                <div ref={animationRef} className='flex flex-row items-baseline mt-4'>
                        <div className='items-baseline' >
                            <div className='text-sm mobileLandscape:text-xs font-normal md:text-base text-center mx-6 portrait:mx-20 mt-2'>On iPhone and iPad, scan pages with your camera. Or import images and files.</div>
                            <Image className='object-scale-down max-h-[68dvh] portrait:max-h-[70dvh] mobileLandscape:max-h-[50dvh]  px-4 mt-4 pb-4' src={theme === 'light' ? iOSImageLight: iOSImageDark} alt="iOS document scanner" />
                            

                        </div>

                        <div className='hidden landscape:inline-block items-baseline justify-center'>
                            <div className='text-sm mobileLandscape:text-xs  font-normal md:text-base text-center mx-6 mt-2'>On your Mac, simply drag and drop a file into the documents list or click the import button to select files.</div>
                            <Image className='galleryImgLandscape align-middle' src={theme === 'light' ? macOSImageLight : macOSImageDark}  alt="MacOS drop file to create document" />
                            
                        </div>
                </div>
        

        </div>
  
    

     </SectionAnimationProvider>
    )
}

// study later: tailwind animation with custom react hook 
//transition-opacity ease-in duration-500 ${isVisible1 ? "opacity-100" : "opacity-0"}`

export default DocSourcesSection