'use client';
import * as React from "react"
import Layout from "/src/components/pageLayout"
import TermsAndConditions from '/src/content/terms-and-conditions.mdx'

const Terms = () => {

    return(
        <Layout displayFooter={true}>
            <article className="longArticle"> 
            {/* see global.css */}
              
                    <TermsAndConditions />
              
            </article>
            
        </Layout>
    )
}

export default Terms