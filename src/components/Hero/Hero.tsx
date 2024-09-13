"use client"
import Spline from '@splinetool/react-spline/next'
import { ChevronsDown } from 'lucide-react'
import './Hero.css'
import Image from 'next/image'
import {useScroll, useTransform, motion} from 'framer-motion'
import { useRef } from 'react'

type HeroProps = {
    id?: string;
    handleSmoothScroll?: (e: React.MouseEvent<HTMLHeadingElement | HTMLButtonElement, MouseEvent>, targetId: string) => void;
}

const Hero: React.FC<HeroProps> = ({id, handleSmoothScroll}) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const translateY = useTransform(scrollYProgress, [0, 1], [0, -1000]);

    return (
    <div id={id} className='bg-black h-screen text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46ED8_82%)] lg:bg-[linear-gradient(to_bottom,#000,#000)] py-[72px]  relative overflow-clip'>
        <div className='absolute left-1/2 -translate-x-1/2 h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]'></div> 
        <div className="hidden lg:block absolute top-0 left-0 w-full h-screen bg-black">
            <Spline scene='https://prod.spline.design/ifrM50UodKoRaIJC/scene.splinecode' />
        </div>
        <div className='relative mx-auto'>
            {/* <div className='flex items-center justify-center'>
                <Link href='/' className='inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30'>
                    <span className='bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text'>Version 2.0 is here</span>
                    <span className='inline-flex gap-1 items-center'>
                        <span>Read More</span>
                        <ChevronsRight />
                    </span>
                </Link>
            </div> */}
            <div className="flex lg:justify-start">
                <div className='w-full inline-flex justify-center relative mt-8'>
                    <h1 className='text-6xl sm:text-8xl font-bold tracking-tighter text-center lg:flex lg:justify-between lg:w-11/12 lg:mx-4'>
                        <div className='max-w-2xl'>
                            <span className='bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text inline-flex mt-0 sm:mt-20 md:mt-0 lg:mt-0'>We Build AI</span>
                            <br /> 
                            <span>Experiences</span>
                        </div> 
                        <div className='mt-5 lg:mt-0 lg:text-left'> Not Just <br /> Products</div>
                    </h1>   
                </div>
                <motion.div 
                    className='absolute hidden sm:inline w-[150px] md:w-[200px] right-[276px] top-[168px] md:right-[616px] lg:right-[1016px]'
                    drag
                    dragSnapToOrigin
                    dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
                    style={{
                        translateY
                    }}
                    transition={{
                        ease: 'easeInOut',
                    }}

                >

                    <Image 
                        src={"https://framerusercontent.com/images/UaehuySGbAQUD7LaqLmpmo71Y4.png?scale-down-to=512"} 
                        alt='' 
                        width={200} 
                        height={200}
                        draggable="false" 
                        className='max-w-none' 
                    /> 
                </motion.div>
                <motion.div
                    className='absolute hidden sm:inline w-[150px] md:w-[200px] top-[196px] left-[298px] md:left-[628px] lg:left-[1120px]'
                    drag
                    dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
                    style={{
                        translateY
                    }}
                    transition={{
                        ease: 'easeInOut',
                    }}
                    // dragSnapToOrigin
                >
                    <Image 
                        src={"https://framerusercontent.com/images/SqHU6Ili7ACWk8dhvEPmdfXEPDA.png?scale-down-to=512"} 
                        alt='' 
                        width={200} 
                        height={200}
                        draggable="false" 
                        className='max-w-none' 
                    /> 
                </motion.div>

            </div>
            <p className='text-center text-xl mt-8 lg:mt-32 max-w-md mx-auto lg:mx-24 tracking-normal px-3 lg:px-0'>Our products support millions of users across hundreds of types of apps. Here&#39;s our work we&#39;re proud to share.</p>
            <div 
                className='flex flex-col lg:mt-32 gap-6 justify-center items-center mt-8 max-w-md mx-auto py-3 px-5'
            >
                <button className="hidden button-85 text-xl bg-opacity-15 font-bold lg:flex items-center gap-2" role="button" onClick={(e) => {handleSmoothScroll?.(e, "partners")}}>Learn More <ChevronsDown className='text-inherit translate-y-[0.06rem]' /></button>
                <button className="lg:hidden bg-white mt-0 sm:mt-3 px-5 py-3 text-lg text-black rounded-lg shadow-lg flex" role="button" onClick={(e) => {handleSmoothScroll?.(e, "partners")}}>Learn More <ChevronsDown className=' text-inherit' /></button>
            </div>
        </div>
    </div>
  )
}

export default Hero