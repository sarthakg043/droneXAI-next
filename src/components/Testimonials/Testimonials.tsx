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
import { poiretOne } from '@/fonts'
import AmitGuptaImg from '@/assets/images/people/Amit_Gupta.jpeg'
import AshishKumarImg from '@/assets/images/people/Ashish_Kumar.jpeg'
import AshishPoddar from '@/assets/images/people/Ashish_Poddar.jpeg'
import NikhilAggarwalImg from '@/assets/images/people/Nikhil_Aggarwal.jpeg'
import SahilDixitImg from '@/assets/images/people/Sahil_Dixit.jpeg'
import SidharthaSauravImg from '@/assets/images/people/Sidhartha_Saurav.jpeg'



interface TestimonialsProps {
    id?: string;
}

const testimonials = [
    {
        img: AmitGuptaImg,
        name: 'Amit Gupta',
        position: 'Managing Director & CEO',
        company: 'Chaster IT Solutions',
        message: 'Their communication has been excellent. DroneX AI has successfully created a functional app. Their communicative, organized, and proactive approach ensures a smooth collaboration. Overall, their flexibility and adaptability complement their technical expertise.',
        url: '',
    },
    {
        img: AshishKumarImg,
        name: 'Ashish Kumar',
        position: 'Director',
        company: 'OptiValueTek',
        message: 'Excellence and speed. It’s rare to get both, and DroneX AI delivers.',
        url: '',
    },
    
    {
        img: NikhilAggarwalImg,
        name: 'Nikhil Aggarwal',
        position: 'CEO',
        company: 'VectoScalar Technologies Pvt. Ltd.',
        message: 'They’re really customer-friendly and provide good coaching. ​​DroneX AI has provided valuable guidance and technical expertise in the collaboration so far. Their workflow has been extremely effective, and they’ve proven to be very customer-oriented. While they could focus on further developing their internal workshops, they’ve been a pleasure to work with.',
        url: '',
    },
    {
        img: SahilDixitImg,
        name: 'Sahil Dixit',
        position: 'Founder',
        company: 'Dixit Global Tech IT Solutions Pvt Ltd.',
        message: 'Let me put it this way: we have built a grand and impressive building. But without DroneX AI’s insights, we would be stuck on the ground-floor forever.',
        url: '',
    },
    {
        img: SidharthaSauravImg,
        name: 'Sidhartha Saurav',
        position: 'Partner',
        company: 'Zendesk',
        message: 'They offer a high-quality service that is extremely flexible to our business as a startup needs changes very fast. Thanks to DroneX AI, we save time from the automated testing process and have improved the quality of our products. The team’s workflow has been effective and they communicate via Slack and calls. So far, we are happy with the team’s quality service, adjusting to our needs.',
        url: '',
    },
    {
        img: AshishPoddar,
        name: 'Ashish Poddar',
        position: 'Co FounderCo Founder',
        company: 'Kadambri Teas',
        message: 'DroneX AI has been the best agency we\'ve worked with so far.',
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
                <h2 className='text-center text-5xl font-bold mb-7' style={{fontFamily: poiretOne.style.fontFamily}}>Testimonials</h2>
                <div>
                    <Carousel
                        plugins={[plugin.current]}
                        className="w-full max-w-md md:max-w-6xl mx-auto"
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}
                    >
                        <CarouselContent>
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3 xl:basis-1/3'>
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