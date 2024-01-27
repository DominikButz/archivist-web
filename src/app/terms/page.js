'use client';
import * as React from "react"
import Layout from "/src/components/pageLayout"
import TermsAndConditions from '/src/content/terms-and-conditions.mdx'

const Terms = () => {

    return(
        <Layout displayFooter={true}>
            <div className="pr-4 pl-4 pt-16 pb-20">
              
                    <TermsAndConditions />
              
            </div>
            
        </Layout>
    )
}

export default Terms