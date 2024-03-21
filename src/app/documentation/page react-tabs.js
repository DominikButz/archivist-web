'use client';
import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Layout from '@/components/pageLayout';

export default function Documentation() {


  return (
    <Layout>
        <div className='mx-10 mt-20 pb-20'>
        <Tabs>
        <TabList>
        <Tab>Creating Documents</Tab>
        <Tab>Title 2</Tab>
        <Tab>Title 3</Tab>
        <Tab>Title 4</Tab>
        <Tab>Title 5</Tab>
        <Tab>Title 6</Tab>
        <Tab>Title 7</Tab>
        </TabList>

        <TabPanel>
        <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
        <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
        <h2>Any content 3</h2>
        </TabPanel>
        <TabPanel>
        <h2>Any content 4</h2>
        </TabPanel>
        <TabPanel>
        <h2>Any content 5</h2>
        </TabPanel>
        <TabPanel>
        <h2>Any content 6</h2>
        </TabPanel>
        <TabPanel>
        <h2>Any content 7</h2>
        </TabPanel>
    </Tabs>
    </div>
  </Layout>
  )
}