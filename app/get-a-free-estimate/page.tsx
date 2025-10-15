import React from 'react'
import Header from '@/app/components/Header'
import EstimateHero from './components/EstimateHero'
import ExpandReady from '../components/ExpandReady'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Get A Free Estimate | Expand Marketing',
  description: 'Get a custom marketing estimate tailored to your business needs. No obligation, free consultation included.'
}

const GetEstimatePage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <EstimateHero />
        <ExpandReady />
        <Footer />
      </main>
    </>
  )
}

export default GetEstimatePage
