import Image from 'next/image'
import React from 'react'
import AmazonLogo from "@/assets/images/Amazon-Logo.png"
import GoogleLogo from '@/assets/images/Google-logo.png'
import MicrosoftLogo from '@/assets/images/Microsoft-Logo.png'
import SalesforceLogo from '@/assets/images/Salesforce-Logo.png'
import SamsungLogo from '@/assets/images/Samsung-Logo-2-500x281.png'
import AppleLogo from '@/assets/images/Apple-Logo.png'
import dynamic from 'next/dynamic';

const DynamicImage = dynamic(() => import('next/image'), { ssr: false });

const images = [
    { 
        src: AmazonLogo,
        alt: 'Amazon'
    },
    { 
        src: GoogleLogo,
        alt: 'Google'
    },
    { 
        src: MicrosoftLogo,
        alt: 'Microsoft'
    },
    { 
        src: SalesforceLogo,
        alt: 'Salesforce'
    },
    { 
        src: SamsungLogo,
        alt: 'Samsung'
    },
    { 
        src: AppleLogo,
        alt: 'Apple'
    },
]

const LogoTicker = () => {
  return (
    <div className='bg-black text-white py-[72px] sm:py-24'>
        <div className="contaier">
            <h2 className='text-xl text-center text-white/70'>Trusted by the world&#39;s most innovative teams</h2>
            <div 
                className="overflow-hidden mt-9 before:content-[''] after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 sm:before:w-10 after:w-5 sm:after:w-10 relative after:right-0 before:left-0 before:top-0 after:top-0 before:z-10 after:z-10 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))] "
            >
                <div className='flex items-center gap-16'>
                    {images.map(({src, alt}, index) => (
                        <DynamicImage key={index} src={src} alt={alt} className={`w-auto h-20 flex-none filter grayscale ${(alt === "Amazon")? 'brightmess-150' : 'brightness-50'}`} />
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default LogoTicker