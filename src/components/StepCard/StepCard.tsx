import React from 'react'
import {Quicksand} from 'next/font/google'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import "./StepCard.css"

const quicksand = Quicksand({
    subsets: ['latin'],
})

interface StepCardProps {
    num: string;
    title: string;
    description: string;
    className?: string;
    cardClass?: string;
}

const StepCard: React.FC<StepCardProps> = ({num, title, description, className, cardClass}) => {
  return (
    <div className={`relative m-5 ${className}`}>
        <Card className={`step-card max-w-[500px] after:tracking-tighter ${cardClass} `} style={{ '--card-after-content': `"${num}."`} as React.CSSProperties}>
            <CardHeader>
                <CardTitle className='mb-2'>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            {/* <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter> */}
        </Card>

    </div>
  )
}

export default StepCard
