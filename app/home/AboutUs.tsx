import React from 'react'
import Image from 'next/image'
import { 
  FaApple, 
  FaMicrosoft, 
  FaGoogle, 
  FaAmazon, 
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaSlack,
  FaSpotify,
  FaDropbox,
  FaPaypal
} from 'react-icons/fa'
import { SiNetflix, SiTesla, SiAdobe, SiSalesforce } from 'react-icons/si'
import Button from '../components/Button'

const AboutUs = () => {
  const logos = [
    FaApple,
    FaMicrosoft,
    FaGoogle,
    FaAmazon,
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaSlack,
    FaSpotify,
    FaDropbox,
    FaPaypal,
    SiNetflix,
    SiTesla,
    SiAdobe,
    SiSalesforce
  ]

  return (
    <div className="bg-black rounded-2xl px-10 py-12 flex flex-col gap-24">
      <div className="flex flex-row w-full gap-10">
        <div className="w-[10%]">
            <p className="text-white text-md tracking-tighter">Working with <br></br>Global Brands</p>

        </div>
        <div className="w-[90%] overflow-hidden relative marquee-edge-blur">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...logos, ...logos].map((Logo, index) => (
              <div key={index} className="mx-24 flex items-center">
                <Logo className="text-white/80 text-5xl hover:text-white transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-10 justify-between">
        <div className="text-2xl font-semibold w-[40%] tracking-tighter leading-tight text-white">
            A global team of search-first content marketers engineering semantic relevancy & category signals for both the internet and people.
        </div>
        <div className="w-[10%]">

        </div>
        <div className="w-[50%] flex flex-col gap-5">
            <div className="text-7xl font-sans text-white tracking-tighter">Driving Demand & Discovery <Image alt="" src={"https://images.unsplash.com/photo-1557804506-669a67965ba0?w=48&h=48&fit=crop"} width={56} height={56} className="rounded-md inline-block align-middle"/></div>
            <div className="flex flex-row gap-5">
                <Button variant="secondary">About Us</Button>
                 <Button variant="primary">How We Work</Button>

            </div>
        </div>

      </div>
    </div>
  )
}

export default AboutUs
