"use client"
import React, { useRef } from 'react'
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Image from 'next/image';
import { poiretOne } from '@/fonts';
import { useScroll, useTransform, motion } from 'framer-motion';

interface ContactProps {
    id?: string;
}

const ContactUs: React.FC<ContactProps> = ({id}) =>{
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end end'],
    });

    const translateY = useTransform(scrollYProgress, [0, 1], [80, -80]);
    // const translateY2 = useTransform(scrollYProgress, [0, 1], [-60, 60]);

    return (
        <div id={id} className='bg-black text-white py-[72px] sm:py-24 text-center' ref={containerRef}>
            <div className="container max-w-xl lg:max-w-5xl relative">
                <motion.div
                    style={{
                        translateY,
                    }}
                    transition={{
                        ease: 'easeInOut',
                    }}
                    dragTransition={{
                        bounceDamping: 10,
                        bounceStiffness: 100,
                    }}

                    drag
                    dragConstraints={containerRef}
                    >
                    <Image 
                        src={"https://framerusercontent.com/images/UaehuySGbAQUD7LaqLmpmo71Y4.png?scale-down-to=512"} 
                        alt='' 
                        width={200} 
                        height={200}
                        draggable="false" 
                        className='absolute w-[150px] top-[-120px] right-[calc(70%+24px)] sm:w-[200px] sm:right-[calc(80%+24px)] lg:w-[300px] lg:top-[-220px] lg:right-[calc(90%+24px)]' 
                    />
                </motion.div>
                <motion.div
                    style={{
                        translateY,
                    }}
                    transition={{
                        ease: 'easeInOut',
                    }}
                    dragTransition={{
                        bounceDamping: 10,
                        bounceStiffness: 100,
                    }}
                    drag
                    dragConstraints={containerRef}
                > 
                    <Image 
                        src={"https://framerusercontent.com/images/SqHU6Ili7ACWk8dhvEPmdfXEPDA.png?scale-down-to=512"} 
                        alt='' 
                        width={200} 
                        height={200}
                        draggable="false" 
                        className='absolute w-[150px] top[220px] mt-20 left-[calc(70%+24px)] sm:w-[200px] sm:left-[calc(80%+24px)] lg:w-[300px] lg:mt-14 lg:left-[calc(90%+48px)]' 
                    /> 
                </motion.div>
                <h2 className='font-bold text-5xl sm:text-6xl' style={{fontFamily: poiretOne.style.fontFamily}}>
                    Let&apos;s Create your next Big Idea Together
                </h2>
                <p className='text-xl text-white/70 mt-5'>
                    We are here to help you with your next project. Let&apos;s talk about your idea and make it a reality.
                </p>
                <div className='mx-auto mt-10'>
                    <button
                        className="text-black bg-white/80 hover:bg-white px-8 py-4 rounded-xl transition text-2xl"
                        onClick={() => window.open("https://calendly.com/dronex-ai/dronex-ai-discovery-call", "_blank")}
                    >
                        Book Now
                    </button>
                </div>
                {/* <form action="" className='mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row '>
                    <Input type='email' placeholder='your@email.com' className='h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] flex-1' />
                    <Button type='submit' className='h-12 bg-primary text-black font-bold rounded-lg px-5'>Get in Touch</Button>
                </form> */}
            </div>
        </div>
    )
}

export default ContactUs