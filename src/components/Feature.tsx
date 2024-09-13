import React, { useEffect, useRef } from 'react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card'
import { LeafIcon } from 'lucide-react'
import {motion, useMotionTemplate, useMotionValue} from 'framer-motion'

interface FeatureProps {
    title: string
    description: string
    img?: React.ReactNode  // Make img optional and type it as React.ReactNode
    isExpanded: boolean
    index: number
    toggleExpand: (i: number) => void
}

export const Feature: React.FC<FeatureProps> = ({ title, description, img, isExpanded, index, toggleExpand }) => {
    const borderRef = useRef<HTMLDivElement>(null)
    const offsetX = useMotionValue(-100)
    const offsetY = useMotionValue(-100)
    const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;

    useEffect(() => {
        window.addEventListener('mousemove', (e:MouseEvent)=>{
            const rect = borderRef.current?.getBoundingClientRect()
            offsetX.set(e.x - rect!.x);
            offsetY.set(e.y - rect!.y);
        })

        // When Feature component is unmounted, remove the event listener
        return () => {
            window.removeEventListener('mousemove', ()=>{})
        }
    }, [])
    return (
        <div key={index} className='sm:max-w-[430px] xl:max-w-[400px] 2xl:max-w-[322px] border border-white/30 px-5 py-10 text-center rounded-xl relative'>
            <motion.div 
                className='absolute inset-0 border-2 border-purple-400 rounded-xl'
                style={{
                    WebkitMaskImage: maskImage,
                    maskImage,
                    pointerEvents: 'none' // Make the border not block mouse events
                }}
                ref={borderRef}
            >
            </motion.div>
            <div className='inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg'>{(img ? (img): (<LeafIcon />))}</div>
            <h3 className='mt-6 font-bold'>{title.toUpperCase()}</h3>
            <p className='mt-2 text-white/70 text-justify sm:text-center'>
                {isExpanded ? description : (description.length > 240 ? description.substring(0, 240) + "..." : description)}
                <span className='sm:hidden underline underline-offset-4 text-white/90 hover:text-white cursor-pointer' onClick={() => toggleExpand(index)}>{" "}
                {description.length > 240 ? (isExpanded ? "show less" : "read more") : ""}
                </span>
                <span className='hidden sm:inline'>
                <HoverCard>
                    <HoverCardTrigger className='underline underline-offset-4 text-white/90 hover:text-white cursor-pointer'>
                        {description.length > 240 ? "read more" : ""}
                    </HoverCardTrigger>
                    <HoverCardContent className='w-80'>
                        {description}
                    </HoverCardContent>
                </HoverCard>
                </span>
            </p>
        </div>
    )
}