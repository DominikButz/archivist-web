'use client';
import React from 'react'
import { useState, Fragment } from 'react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Listbox, Transition } from '@headlessui/react'




export default function ListBoxDocumentation({sections}) {

    const [selectedSection, setSelectedSection] = useState(sections[0])

    return (
    <div>
      <div className="fixed top-8 pl-4 pt-6 pb-2 w-full  bg-white dark:bg-black ">
      <Listbox value={selectedSection} onChange={setSelectedSection}>
        <div className="relative mt-1">
          <Listbox.Button className="relative cursor-default rounded-lg  py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selectedSection.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-x-hidden rounded-md bg-white dark:bg-stone-900 py-1 text-base  shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {sections.map((section) => (
                <Listbox.Option
                  key={section.id}
                  className={
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      section.id === selectedSection.id ? 'bg-amber-100 text-amber-900' : 'text-gray-900 dark:text-stone-100'
                    }`
                  }
                  value={section}
                >
                  {({ active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          active ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {section.name}
                      </span>
                      {active ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
      <article className='longArticle mt-8 portrait:mt-12 mobilePortrait:mt-16'>  
        <selectedSection.content />
      </article>
    </div>

    )
  
}
