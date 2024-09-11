"use client"
import React from 'react'

interface TestimonialCardProps {
  name: string;
  position: string;
  company: string;
  message: string;
  url?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({name, position, company, message, url}) => {
  return (
    <div className='h-full w-full mt-10'>
      <div className=' w-full flex flex-col items-center justify-center space-y-4 bg-card border-1 border rounded-lg'>
        <div className='w-20 h-20 rounded-full bg-gray-300 -translate-y-10'>

        </div>
        <div className='w-full -translate-y-10'>
          <div className='flex flex-col items-center space-y-1'>
            <h3 className='text-xl font-semibold'>{name}</h3>
            <p className='text-sm text-muted-foreground'>{position} at {company}</p>
          </div>
          <p className='text-center text-sm text-muted-foreground'>{message}</p>
        </div>
      </div>
    </div>    
  )
}
