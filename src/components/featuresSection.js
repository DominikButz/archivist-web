'use client';
import * as React from 'react'
import { useRef } from 'react'
import { useMediaQuery } from 'react-responsive';
import { DocumentTextIcon, ClipboardIcon, LightBulbIcon, TagIcon, LockOpenIcon, CheckBadgeIcon} from '@heroicons/react/24/outline'
import SectionAnimationProvider from './fullPageSnappyScrolling/sectionAnimationProvider'
import FeatureItem from './featureItem'
import { FilePdf, Clipboard2Check, Robot, Tags, ShieldLock, EmojiSunglasses } from 'react-bootstrap-icons';
import Footer from './footer';

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
</svg>


const OtherFeaturesSection = () => {

    const animationRef = useRef();
   
    const largeGlyphSize = useMediaQuery({ query: `(min-width: 768px) or (min-height: 768px)`});
    const glyphSize = largeGlyphSize ?  72 : 40

    return (
    <SectionAnimationProvider animationRef={animationRef}>
       <div className='sectionDefault justify-around items-center'>
            <div class="h-5/6 w-full inline-grid grid-cols-1 landscape:grid-cols-2 gap-0 ml-12 mobileLandscape:ml-1 mobilePortrait:ml-3 mb-1 mt-14 mx-auto">
           
                <FeatureItem title="PDF Editing" text="Add, move and delete pages."><DocumentTextIcon className="h-10 w-10 md:h-12 md:w-12 lg:w-14 lg:h-14 text-black dark:text-white" /> </FeatureItem>
                <FeatureItem title="OCR" text="Copy the document text to the clipboard."><ClipboardIcon className="h-10 w-10 md:h-12 md:w-12 lg:w-14 lg:h-14 text-black dark:text-white"   /> </FeatureItem>
                <FeatureItem title="AI Support" text="Harness the power of GPT to automatically set title, doc type and topics."><LightBulbIcon className="h-10 w-10 md:h-12 md:w-12 lg:w-14 lg:h-14 text-black dark:text-white"   /> </FeatureItem>
                <span className='hidden sm:block'><FeatureItem title="Finder File Tags" text="Set topics and document types as Finder tags (MacOS only)."><TagIcon className="h-10 w-10 md:h-12 md:w-12 lg:w-14 lg:h-14 text-black dark:text-white"   /> </FeatureItem></span>
                <FeatureItem title="No user lock-in" text="Even without Archivist, you can access your files anytime in iCloud Drive - with a simple folder structure: Drawer -> topic(s) -> year."><LockOpenIcon className="h-10 w-10 md:h-12 md:w-12 lg:w-14 lg:h-14 text-black dark:text-white"   /></FeatureItem>
                <FeatureItem title="No BS" text="No login. No subscription. No ads. No data mining. No data leaks. Yes, we're serious."><CheckBadgeIcon className="h-10 w-10 md:h-12 md:w-12 lg:w-14 lg:h-14 text-black dark:text-white"   /> </FeatureItem>
   
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