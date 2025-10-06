import React from 'react'
import Header from '@/app/components/Header'
import ContactHero from './components/ContactHero'
import ExpandReady from '../components/ExpandReady'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Contact | Expand Marketing',
  description: 'Want to work with us? Get in touch.'
}

const ContactPage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
      
        

        <ContactHero />
        <ExpandReady />
        <Footer />
      </main>
    </>
  )
}

export default ContactPage
