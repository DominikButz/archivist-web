'use client';
import React from 'react'
import { useMediaQuery } from 'react-responsive';
import Layout from '@/components/pageLayout';
import TabbedDocumentation from './tabbedDocumentation';
import ListBoxDocumentation from './listBoxDocumentation';
import AddingDocuments from '/src/content/documentation/Adding Documents.md'
import EditingDocuments from '/src/content/documentation/Editing Documents.md'
import SortingFiltering from '/src/content/documentation/SortingFiltering.md'
import DocAttributeLabels from '/src/content/documentation/DocAttributeLabels.md'
import Sharing from '/src/content/documentation/Sharing.md'
import Settings from '/src/content/documentation/Settings.md'


const sections = [
    { id: 0, name: 'Adding Documents', content: AddingDocuments},
    { id: 1, name: 'Editing Documents', content: EditingDocuments},
    { id: 2, name: 'Filtering', content: SortingFiltering},
    { id: 3, name: 'Document Labels', content: DocAttributeLabels},
    { id: 4, name: 'Sharing', content: Sharing},
    { id: 5, name: 'Settings', content: Settings }
  ]

export default function Documentation() {
    var isMobilePortrait = useMediaQuery({ query: `(max-width: 480px) or (max-height: 480px)` });

    return (
        <Layout>
        <div className='mt-12'>
        { isMobilePortrait ?  <ListBoxDocumentation sections={sections} /> : <TabbedDocumentation sections={sections}/>} 
        </div>
        </Layout>
      )


}