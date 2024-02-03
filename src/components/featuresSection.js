'use client';
import * as React from 'react'
import { useRef, useState, useEffect } from 'react'
import { useIsClient } from '@/util/is-client-ctx';
import windowResizingHandler from '@/util/windowSizeListener';
import SectionAnimationProvider from './fullPageSnappyScrolling/sectionAnimationProvider'
import FeatureItem from './featureItem'
import { FilePdf, Clipboard2Check, Robot, Tags, ShieldLock, EmojiSunglasses } from 'react-bootstrap-icons';
import Footer from './footer';



const OtherFeaturesSection = () => {

    const animationRef = useRef();
   
    const isClient = useIsClient();

    const [windowSize, setWindowSize] = useState([
        isClient ? window.innerWidth : 0,
        isClient ? window.innerHeight : 0,
      ]);
    
    
    useEffect(() => {
        return windowResizingHandler(setWindowSize)
    }, [setWindowSize]);

    const width = windowSize[0]
    const height = windowSize[1]
 
    const glyphSize = (width < 768 || height < 480) ?  40 : 72

    return (
    <SectionAnimationProvider animationRef={animationRef}>
       <div className='sectionDefault'>
            <div class="h-5/6 w-full mobileLandscape:w-full inline-grid grid-cols-1 landscape:grid-cols-2 gap-0 ml-3 mb-1 mt-14 px-auto">
           
                <FeatureItem title="PDF Editing" text="Add, move and delete pages."><FilePdf size={glyphSize}/> </FeatureItem>
                <FeatureItem title="OCR" text="Copy the document text to the clipboard."><Clipboard2Check size={glyphSize}  /> </FeatureItem>
                <FeatureItem title="AI Support" text="Harness the power of GPT to automatically set title, doc type and topics."><Robot size={glyphSize}/> </FeatureItem>
                <span className='hidden sm:block'><FeatureItem title="Finder File Tags" text="Set topics and document types as Finder tags (MacOS only)."><Tags  size={glyphSize}/> </FeatureItem></span>
                <FeatureItem title="No user lock-in" text="Even without Archivist, you can access your files anytime in iCloud Drive - with a simple folder structure: Drawer -> topic(s) -> year."><ShieldLock size={glyphSize}/> </FeatureItem>
                <FeatureItem title="No BS" text="No login. No subscription. No ads. No data mining. No data leaks. Yes, we're serious."><EmojiSunglasses  size={glyphSize}/> </FeatureItem>


                
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