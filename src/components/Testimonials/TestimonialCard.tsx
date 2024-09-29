import { Link2Icon } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react'

interface TestimonialCardProps {
  name: string;
  position: string;
  company: string;
  message: string;
  img?: StaticImageData | string;
  url?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({name="Alex George", position="CEO", company="Microsoft", message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.", img="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1800&t=st=1726044612~exp=1726045212~hmac=348e4d978e5f5a3c759377ddbe5d38401c2b661c648fc522642f5b95a91cc69a", url="https://www.google.com"}) => {
  const limit = 200;
  // Message should not exceed 82 characters including spaces
  if (message.length > limit) {
    // find index of space from last
    let index = message.slice(0, limit).lastIndexOf(' ')
    // slice the message till the last space
    message = message.slice(0, index) + '...'
  }

  // Handle Image component based on the type of `img`
  const imageSrc = typeof img === 'string' ? img : img.src;
  
  return (
    <div className='h-full w-full mt-10'>
      <Link href={url}>
        <div className='h-5/6 w-full flex flex-col items-center justify-center space-y-4 bg-card border-1 border rounded-lg'>
          <div className='w-20 h-20 rounded-full bg-gray-300 -translate-y-10'>
            <Image src={imageSrc} alt={name} className='w-full h-full object-cover rounded-full' width={80} height={80} />
          </div>
          <div className='w-full h-full -translate-y-10 px-4'>
            <div className='flex flex-col items-center space-y-1'>
              <h3 className='text-xl font-semibold'>{name}</h3>
              <p className='text-sm text-muted-foreground text-center'>{position}</p>
              <p className='text-sm text-muted-foreground text-center'> @ {company}</p>
            </div>
            <p className='text-justify text-sm text-muted-foreground'>{message}</p>
          </div>
        </div>
      </Link>
    </div>    
  )
}
