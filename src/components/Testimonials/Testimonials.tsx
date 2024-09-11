"use client"
import React from 'react'
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { TestimonialCard } from './TestimonialCard'
import BillImg from '@/assets/images/people/bill.jpg'
import AlexImg from '@/assets/images/people/alex.jpg'


interface TestimonialsProps {
    id?: string;
}

const testimonials = [
    {
        img: BillImg,
        name: 'John Doe',
        position: 'CEO',
        company: 'Google',
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        url: '',
    },
    {
        img: AlexImg,
        name: 'Alex George',
        position: 'CEO',
        company: 'Microsoft',
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        url: '',
    },
    {
        img: null,
        name: 'Katty Perry',
        position: 'CEO',
        company: 'Vox',
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        url: '',
    },
    {
        img: null,
        name: 'Paul',
        position: 'CEO',
        company: 'Apple',
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        url: '',
    },
    {
        img: null,
        name: 'Paul',
        position: 'CEO',
        company: 'Apple',
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        url: '',
    },
    {
        img: null,
        name: 'Paul',
        position: 'CEO',
        company: 'Apple',
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        url: '',
    },
]

const Testimonials: React.FC<TestimonialsProps> = ({id}) => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000 })
      )

    return (
        <div id={id} className='bg-black text-white bg-gradient-to-b from-[#5D2CA8] to-black'>
            <div className='container'>
                <h2 className='text-center text-5xl font-bold tracking-tighter mb-7'>Testimonials</h2>
                <div>
                    <Carousel
                        plugins={[plugin.current]}
                        className="w-full max-w-64 md:max-w-6xl mx-auto"
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}
                    >
                        <CarouselContent>
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3 xl:basis-1/4'>
                                    <div className="p-1">
                                        <Card className='bg-transparent border-none'>
                                            <CardContent className="flex aspect-square items-center justify-center bg-inherit">
                                                <TestimonialCard name={testimonial.name} company={testimonial.company} position={testimonial.position} message={testimonial.message} img={testimonial.img ?? undefined} />
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Testimonials