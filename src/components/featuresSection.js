'use client';
import * as React from 'react'
import { useRef } from 'react'
import { useMediaQuery } from 'react-responsive';
import SectionAnimationProvider from './fullPageSnappyScrolling/sectionAnimationProvider'
import FeatureItem from './featureItem'
import { FilePdf, Clipboard2Check, Robot, Tags, ShieldLock, EmojiSunglasses } from 'react-bootstrap-icons';
import Footer from './footer';



const OtherFeaturesSection = () => {

    const animationRef = useRef();
   
    const largeGlyphSize = useMediaQuery({ query: `(min-width: 768px) or (min-height: 768px)`});
    const glyphSize = largeGlyphSize ?  72 : 40

    return (
    <SectionAnimationProvider animationRef={animationRef}>
       <div className='sectionDefault'>
            <div class="h-5/6 w-full inline-grid grid-cols-1 landscape:grid-cols-2 gap-0 ml-12 mobileLandscape:ml-1 mobilePortrait:ml-3 mb-1 mt-14 mx-auto">
           
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