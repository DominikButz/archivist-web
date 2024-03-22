'use client';
import * as React from "react"
import { useRef, useEffect } from "react"
import Layout from "/src/components/pageLayout"
import IntroSection from "/src/components/introSection"
import AIDetectionSection from "/src/components/aiDetectionSection"
import DocSourcesSection from "/src/components/docSourcesSection"
import OtherFeaturesSection from "/src/components/featuresSection"
import FullPageSection from "/src/components/fullPageSnappyScrolling/fullPageSection"
import FullPageContainer from "/src/components/fullPageSnappyScrolling/fullPageContainer"
import { IsClientCtxProvider } from "@/util/is-client-ctx";
import { initializeGoogleTagManager } from "@/util/gtagManager";
const gtagId = process.env.GTAGID

const IndexPage = () => {

  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef()

  const scrollTo = (section) => {
    section.current.scrollIntoView({behavior:"smooth"})
  }

  useEffect(() => {
    // Initialize Google Tag Manager with your GTM ID
    initializeGoogleTagManager(gtagId);
  }, []);

  return (
  
    <Layout displayFooter={false}>
      <IsClientCtxProvider>
        <FullPageContainer>
    
          <FullPageSection reference={section1} showArrow={true} scrollTo={scrollTo} scrollToRef={section2}>
            <IntroSection/>
          </FullPageSection>
          <FullPageSection reference={section2} showArrow={true} scrollTo={scrollTo}  scrollToRef={section3}>
            <DocSourcesSection  />
          </FullPageSection>
    
          <FullPageSection reference={section3}  showArrow={true} scrollTo={scrollTo}  scrollToRef={section4}>
          <AIDetectionSection />
          </FullPageSection>

          <FullPageSection reference={section4} showArrow={false} scrollTo={scrollTo}  scrollToRef={section1}>
            <OtherFeaturesSection  />
          </FullPageSection>
  
      
        </FullPageContainer>
        </IsClientCtxProvider>
   </Layout>

  
   )
  }

export default IndexPage
