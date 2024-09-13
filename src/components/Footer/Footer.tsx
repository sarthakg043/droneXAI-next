import { InstagramIcon, LucideLinkedin, TwitterIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='py-5 bg-black text-white/60 border-t border-white/20 '>
        <div className="container">
            <div className='flex flex-col gap-4 sm:flex-row sm:justify-between'>
                <div className='text-center'>
                    &copy; DroneX AI 2021, Inc. All rights reserved.
                </div>
                <ul className='flex justify-center gap-2.5'>
                    <li>
                        <Link href='https://x.com'>
                            <TwitterIcon size={24} />
                        </Link>
                    </li>
                    <li>
                        <Link href='https://instagram.com'>
                            <InstagramIcon size={24} />
                        </Link>
                    </li>
                    <li>
                        <Link href='https://linkedin.com'>
                            <LucideLinkedin size={24} />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer