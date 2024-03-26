'use client';
import React from 'react'
import Layout from '@/components/pageLayout';
import { Tab } from '@headlessui/react'
import AddingDocuments from '/src/content/documentation/Adding Documents.md'
import EditingDocuments from '/src/content/documentation/Editing Documents.md'
import SortingFiltering from '/src/content/documentation/SortingFiltering.md'
import DocAttributeLabels from '/src/content/documentation/DocAttributeLabels.md'
import Sharing from '/src/content/documentation/Sharing.md'
import Settings from '/src/content/documentation/Settings.md'

export default function Documentation() {

    return (
        <Layout>
        <div className='mt-12'>
        <Tab.Group>
          <Tab.List className="fixed pt-6 w-full bg-white dark:bg-stone-900 ">
            <Tab className="tab">Adding Documents</Tab>
            <Tab className="tab">Editing Documents</Tab>
            <Tab className="tab">Filtering</Tab>
            <Tab className="tab">Doc Labels</Tab>
            <Tab className="tab">Sharing</Tab>
            <Tab className="tab">Settings</Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
                <article className='longArticle mt-8 portrait:mt-12'>
                    <AddingDocuments/>
                </article>
            </Tab.Panel>
            <Tab.Panel>
                <article className='longArticle mt-8 portrait:mt-12'>
                    <EditingDocuments/>
                </article>
            </Tab.Panel>
            <Tab.Panel>
                <article className='longArticle mt-8 portrait:mt-12'>
                    <SortingFiltering/>
                </article>
            </Tab.Panel>
            <Tab.Panel>
                <article className='longArticle mt-8 portrait:mt-12'>
                    <DocAttributeLabels/>
                </article>
            </Tab.Panel>
            <Tab.Panel>
                <article className='longArticle mt-8 portrait:mt-12'>
                    <Sharing/>
                </article>
            </Tab.Panel>
            <Tab.Panel>
                <article className='longArticle mt-8 portrait:mt-12'>
                    <Settings/>
                </article>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
        </div>
        </Layout>
      )


}