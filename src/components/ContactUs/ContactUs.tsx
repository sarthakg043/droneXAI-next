import React from 'react'
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Image from 'next/image';
import { poiretOne } from '@/fonts';

interface ContactProps {
    id?: string;
}

const ContactUs: React.FC<ContactProps> = ({id}) =>{
  return (
    <div id={id} className='bg-black text-white py-[72px] sm:py-24 text-center'>
        <div className="container max-w-xl lg:max-w-5xl relative">
            <Image 
                src={"https://framerusercontent.com/images/UaehuySGbAQUD7LaqLmpmo71Y4.png?scale-down-to=512"} 
                alt='' 
                width={200} 
                height={200}
                draggable="true" 
                className='absolute w-[150px] top-[-120px] right-[calc(70%+24px)] sm:w-[200px] sm:right-[calc(80%+24px)] lg:w-[300px] lg:top-[-220px] lg:right-[calc(90%+24px)]' 
            /> 
            <Image 
                src={"https://framerusercontent.com/images/SqHU6Ili7ACWk8dhvEPmdfXEPDA.png?scale-down-to=512"} 
                alt='' 
                width={200} 
                height={200}
                draggable="true" 
                className='absolute w-[150px] top[220px] mt-20 left-[calc(70%+24px)] sm:w-[200px] sm:left-[calc(80%+24px)] lg:w-[300px] lg:mt-14 lg:left-[calc(90%+48px)]' 
            /> 
            <h2 className='font-bold text-5xl sm:text-6xl' style={{fontFamily: poiretOne.style.fontFamily}}>
                Let&apos;s Create your next Big Idea Together
            </h2>
            <p className='text-xl text-white/70 mt-5'>
                We are here to help you with your next project. Let&apos;s talk about your idea and make it a reality.
            </p>
            <form action="" className='mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row '>
                <Input type='email' placeholder='your@email.com' className='h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] flex-1' />
                <Button type='submit' className='h-12 bg-primary text-black font-bold rounded-lg px-5'>Get in Touch</Button>
            </form>
        </div>
    </div>
  )
}

export default ContactUs