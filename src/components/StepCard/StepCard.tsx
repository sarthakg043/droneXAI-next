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
}

const StepCard: React.FC<StepCardProps> = ({num, title, description}) => {
  return (
    <div className='relative'>
        <Card className="step-card after:tracking-tighter" style={{ '--card-after-content': `"${num}."`} as React.CSSProperties}>
            <CardHeader>
                <CardTitle className='mb-2'>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
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
