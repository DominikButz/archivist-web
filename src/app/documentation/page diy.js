'use client';
import React from 'react'
import { useState } from 'react';
import Layout from '@/components/pageLayout';
import AddingDocuments from '/src/content/documentation/Adding Documents.md'
import EditingDocuments from '/src/content/documentation/Editing Documents.md'
import SortingFiltering from '/src/content/documentation/SortingFiltering.md'
import DocAttributeLabels from '/src/content/documentation/DocAttributeLabels.md'
import Sharing from '/src/content/documentation/Sharing.md'

export default function Documentation() {

  const [toggleIndex, setToggleIndex] = useState(0);

  const updateIndex = (index)=> {
    setToggleIndex(index)
  }

  return (
    <Layout>
        <div className='mt-14'>
            <div className='flex bg-white dark:bg-stone-900 pt-2 pb-1'>
            <div onClick={()=>updateIndex(0)} className={toggleIndex === 0 ? 'activeTab' : 'inactiveTab'} >Adding Documents</div> 
            <div onClick={()=>updateIndex(1)} className={toggleIndex === 1 ? 'activeTab' : 'inactiveTab'}>Editing Documents</div> 
            <div onClick={()=>updateIndex(2)} className={toggleIndex === 2 ? 'activeTab' : 'inactiveTab'}>Sorting & Filtering</div>
            <div onClick={()=>updateIndex(3)} className={toggleIndex === 3 ? 'activeTab' : 'inactiveTab'}>Document Labels</div>
            <div onClick={()=>updateIndex(4)} className={toggleIndex === 4 ? 'activeTab' : 'inactiveTab'}>Sharing</div>
            </div>


            <div className={toggleIndex === 0 ? '' : 'hidden'} >
                <article className='longArticle mt-4'>
                    <AddingDocuments/>
                </article>
            </div>

            <div className={toggleIndex === 1 ? '' : 'hidden'}>
                <article className='longArticle mt-4'>
                    <EditingDocuments/>
                </article>
            </div>

            <div className={toggleIndex === 2 ? '' : 'hidden'}>
                <article className='longArticle mt-4'>
                    <SortingFiltering />
                </article>
            </div>

            <div className={toggleIndex === 3 ? '' : 'hidden'}>
                <article className='longArticle mt-4'>
                    <DocAttributeLabels />
                </article>
            </div>

            <div className={toggleIndex === 4 ? '' : 'hidden'}>
                <article className='longArticle mt-4'>
                    <Sharing />
                </article>
            </div>
        </div>

    </Layout>
  )
}
