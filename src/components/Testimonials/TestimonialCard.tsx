import React from 'react'

interface TestimonialCardProps {
  name: string;
  position: string;
  company: string;
  message: string;
  url?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({name="Alex George", position="CEO", company="Microsoft", message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.", url="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1800&t=st=1726044612~exp=1726045212~hmac=348e4d978e5f5a3c759377ddbe5d38401c2b661c648fc522642f5b95a91cc69a"}) => {
  // Message should not exceed 100 characters including spaces
  if (message.length > 100) {
    message = message.slice(0, 100) + '...'
  }
  return (
    <div className='h-full w-full mt-10'>
      <div className=' w-full flex flex-col items-center justify-center space-y-4 bg-card border-1 border rounded-lg'>
        <div className='w-20 h-20 rounded-full bg-gray-300 -translate-y-10'>
          <img src={url} alt={name} className='w-full h-full object-cover rounded-full' />
        </div>
        <div className='w-full h-full -translate-y-10 px-4'>
          <div className='flex flex-col items-center space-y-1'>
            <h3 className='text-xl font-semibold'>{name}</h3>
            <p className='text-sm text-muted-foreground'>{position} at {company}</p>
          </div>
          <p className='text-justify text-sm text-muted-foreground'>{message}</p>
        </div>
      </div>
    </div>    
  )
}
