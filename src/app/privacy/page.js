'use client';
import * as React from "react"
import Layout from "/src/components/pageLayout"
import Privacy from '/src/content/privacy-policy.mdx'

const PrivacyPolicy = () => {

    return(
        <Layout displayFooter={true}>
            <div className="mr-4 ml-4 mt-16 pb-20">
              
                    <Privacy />
              
            </div>
            
        </Layout>
    )
}

export default PrivacyPolicy