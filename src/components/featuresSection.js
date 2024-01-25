'use client';
import * as React from 'react'
import { useRef, useState, useEffect } from 'react'
import { useIsClient } from '@/util/is-client-ctx';
import SectionAnimationProvider from './fullPageSnappyScrolling/sectionAnimationProvider'
import FeatureItem from './featureItem'
import { FilePdf, Clipboard2Check, Robot, Tags, ShieldLock, FolderCheck } from 'react-bootstrap-icons';
import Footer from './footer';



const OtherFeaturesSection = () => {
    const isClient = useIsClient();
    const animationRef = useRef();

    const [windowSize, setWindowSize] = useState([
        isClient ? window.innerWidth : 0,
        isClient ? window.innerHeight : 0,
      ]);
    
      useEffect(() => {
        const handleWindowResize = () => {
          setWindowSize([window.innerWidth, window.innerHeight]);
        };
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);

    const glyphSize = windowSize[0] < 768 ?  48 : 72
    const glyphColor = 'whitesmoke'
    return (
    <SectionAnimationProvider animationRef={animationRef}>
       <div className='sectionDefault'>
            <div class="h-5/6 md:h-5/6 w-5/6 inline-grid grid-cols-1 md:grid-cols-2 gap-0 mb-1 md:mt-14">
        
                    <FeatureItem title="PDF Editing" text="Add, move and delete pages"><FilePdf color={glyphColor} size={glyphSize}/> </FeatureItem>
                    <FeatureItem title="OCR" text="Copy the document text to the clipboard"><Clipboard2Check color={glyphColor} size={glyphSize}  /> </FeatureItem>
                
                
        
                    <FeatureItem title="AI Support" text="Harness the power of GPT to automatically set title, doc type and topics"><Robot color={glyphColor} size={glyphSize}/> </FeatureItem>
                   <FeatureItem title="Finder File Tags" text="Set topics and document types as Finder tags (MacOS only)"><Tags color={glyphColor} size={glyphSize}/> </FeatureItem>
        
                   <FeatureItem title="No user lock-in" text="Your files are always yours. Even without using Archivist, you can access all files anytime in iCloud Drive."><ShieldLock color={glyphColor} size={glyphSize}/> </FeatureItem>

                   <FeatureItem title="Simple file paths" text="Even without opening Archivist, find your files in a simple folder structure: Drawer -> topic(s) -> year"><FolderCheck color={glyphColor} size={glyphSize}/> </FeatureItem>
                
                {/* <img className='h-12 justify-self-center' src={AppStore} alt="Get Archivist on iOS App Store"/>
                
                <img className='h-12 justify-self-center hidden lg:block' src={MacOSAppStore} alt="Get Archivist on Mac App Store"/>
             */}

                
            </div>
            {/* footer */}
            <Footer position={'absolute'} />
            </div>
    </SectionAnimationProvider>
    )
}

export default OtherFeaturesSection


// PDF editing - add, move and delete pages
 
// Finder file tags - set topics and/ or document types as finder tags

// AI document labeling - harness the power of GPT to automatically set doc type and topics

// OCR - copy the document text to the clipboard

// download on iOS App store

// download on mac app store