'use client';
import * as React from 'react'
import { useRef } from 'react'
import { useIsClient } from '@/util/is-client-ctx';
import windowSizeProvider from '@/util/windowSizeListener';
import SectionAnimationProvider from './fullPageSnappyScrolling/sectionAnimationProvider'
import FeatureItem from './featureItem'
import { FilePdf, Clipboard2Check, Robot, Tags, ShieldLock, EmojiSunglasses } from 'react-bootstrap-icons';
import Footer from './footer';



const OtherFeaturesSection = () => {

    const animationRef = useRef();
   
    const isClient = useIsClient();

    const currentWindowSize = windowSizeProvider(isClient)
 
    const glyphSize = currentWindowSize[0] < 768 ?  48 : 72

    return (
    <SectionAnimationProvider animationRef={animationRef}>
       <div className='sectionDefault'>
            <div class="h-5/6 md:h-5/6 w-5/6 inline-grid grid-cols-1 md:grid-cols-2 gap-0 mb-1 md:mt-14">
            {/* h-5/6 md:h-5/6 w-5/6 */}
                <FeatureItem title="PDF Editing" text="Add, move and delete pages."><FilePdf size={glyphSize}/> </FeatureItem>
                <FeatureItem title="OCR" text="Copy the document text to the clipboard - page by page or all pages."><Clipboard2Check size={glyphSize}  /> </FeatureItem>
                <FeatureItem title="AI Support" text="Harness the power of GPT to automatically set title, doc type and topics."><Robot size={glyphSize}/> </FeatureItem>
                <span className='hidden sm:block'><FeatureItem title="Finder File Tags" text="Set topics and document types as Finder tags (MacOS only)."><Tags  size={glyphSize}/> </FeatureItem></span>
                <FeatureItem title="No user lock-in" text="Even without using Archivist, you can access your files anytime in iCloud Drive - with a simple folder structure: Drawer -> topic(s) -> year."><ShieldLock size={glyphSize}/> </FeatureItem>
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