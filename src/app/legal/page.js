'use client';
import * as React from "react"
import { Tab } from '@headlessui/react'
import Layout from "/src/components/pageLayout"
import Privacy from '/src/content/privacy-policy.mdx'
import TermsAndConditions from '/src/content/terms-and-conditions.mdx'


const PrivacyPolicy = () => {

    return(
        <Layout displayFooter={true}>
            <div className='mt-12'>
            <Tab.Group>
                <Tab.List className="fixed pt-4 w-full bg-white dark:bg-stone-900 ">
  
                    <Tab className="no-underline ui-selected:scale-105 px-2 border-2 ui-not-selected:text-blue-500 ui-not-selected:border-blue-500 ui-selected:border-stone-900 dark:ui-not-selected:text-indigo-500 dark:ui-selected:border-stone-50 dark:ui-not-selected:border-indigo-500 rounded-sm mx-2 mb-2">Terms & Conditions</Tab>
                    <Tab className="no-underline ui-selected:scale-105 px-2 border-2 ui-not-selected:text-blue-500 ui-not-selected:border-blue-500  ui-selected:border-stone-900 dark:ui-not-selected:text-indigo-500 dark:ui-selected:border-stone-50 dark:ui-not-selected:border-indigo-500 rounded-sm mx-2 mb-2">Privacy Policy</Tab>
                </Tab.List>
                <Tab.Panels>
         
                <Tab.Panel>
                    <article className='longArticle'>
                        <TermsAndConditions />
                    </article>
                </Tab.Panel>

                <Tab.Panel>
                    <article className='longArticle'>
                    <Privacy />
                    </article>
                </Tab.Panel>


      
                </Tab.Panels>
            </Tab.Group>
            </div>
        </Layout>
    )
}

export default PrivacyPolicy