import React from 'react'
import Header from '../components/Header'
import ServicesHero from './components/ServicesHero'
import ServicesList from './components/ServicesList'
import RecommendedByLeaders from '../components/services/RecommendedByLeaders'
import PartOfPackage from '../components/services/PartOfPackage'
import LeadChange from '../components/LeadChange'
import Footer from '../components/Footer'
import ExpandReady from '../components/ExpandReady'

const ServicesPage = () => {
  return (
    <>
      <Header />
      <main>
        <ServicesHero />
        <ServicesList />
        <LeadChange />
        <PartOfPackage />
        <RecommendedByLeaders />
       <ExpandReady />
        <Footer />
      </main>
    </>
  )
}

export default ServicesPage
