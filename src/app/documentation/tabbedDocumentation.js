import React from 'react'
import { Tab } from '@headlessui/react'


export default function TabbedDocumentation({sections}) {

  return (
    <Tab.Group>
    <Tab.List className="fixed pt-4 w-full bg-white dark:bg-stone-900 ">
    {sections.map((section) => (    
        <Tab key={section.id} className="no-underline ui-selected:scale-105 px-2 border-2 ui-not-selected:text-indigo-600 ui-not-selected:border-indigo-600  ui-selected:border-stone-900 dark:ui-not-selected:text-indigo-500 dark:ui-selected:border-stone-50 dark:ui-not-selected:border-indigo-500 rounded-sm mx-2 mb-2">{section.name}</Tab>
    ))}
    </Tab.List>
    <Tab.Panels>
        {sections.map((section) => (   
            <Tab.Panel key={section.id}>
                <article className='longArticle mt-8 portrait:mt-12 mobilePortrait:mt-18'>
                    <section.content />
                </article>
            </Tab.Panel>
        ))}
    </Tab.Panels>
  </Tab.Group>
  )
}
