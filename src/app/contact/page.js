'use client';
import React from 'react'
import ContactForm from '/src/components/contactForm'
import Layout from '/src/components/pageLayout'

export default function Contact() {
  return (
    <Layout>
       
        <div className='mx-auto mt-20 w-5/6 md:w-1/2 pb-20'>
            <ContactForm />
        </div>
    </Layout>
  )
}