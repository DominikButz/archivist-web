'use client';
import * as React from "react"
import Layout from "/src/components/pageLayout"
import Privacy from '/src/content/privacy-policy.mdx'

const PrivacyPolicy = () => {

    return(
        <Layout displayFooter={true}>
             <article className="longArticle"> 
              
                    <Privacy />
              
            </article>
            
        </Layout>
    )
}

export default PrivacyPolicy