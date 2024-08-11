import React from 'react'
import StepCard from '../StepCard/StepCard';

interface ProcessProps {
  id?: string;
}

const stepCardItems = [
  {
    num: "1",
    title: 'Discovery',
    description: 'We immerse ourselves in your vision, explore the needs of your target users, and align with your business objectives. This deep dive sets the foundation for a tailored AI solution.',
    cardClass: 'shadow-md shadow-red-500',
  },
  {
    num: "2",
    title: "Product Requirements",
    description: 'We collaborate with you to define and refine your product concept, ensuring it is not only marketable but also technologically feasible.',
    cardClass: 'shadow-md shadow-red-500',
  }
]

const Processes: React.FC<ProcessProps> = ({id}) => {
  return (
    <div id={id} className='bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] lg:px-24'>
      <div className='container mx-auto'>
        <h2 className='text-center text-5xl sm:text-6xl font-bold tracking-tighter'>AI development simplified</h2>
        <div className='sm:max-w-5xl mx-auto'>
          <p className='text-xl text-justify sm:text-center text-white/70 mt-5'>Our team partners with you from concept to market-ready MVP, ensuring your AI solutions are strategically designed and meticulously built to meet your unique needs. Think of AI development as building a house: it requires careful planning and execution with defined steps. While we follow a standard process, we remain flexible to adapt to your specific requirements.</p>
        </div>
        <div className='mt-14'>
          <div className='w-full inline-flex justify-center items-center gap-2'>
            <h2 className='text-xl text-white'>Building the <span className='w-10 pb-[2px] bg-[linear-gradient(180deg,#00000000_50%,#ee374ecf_50%)] font-bold'> <i>right thing</i> </span> </h2>
            <div className='flex-1 text-white bg-white/70 h-[1px]'></div>
          </div>
          <div className='mt-5 flex flex-wrap items-center gap-4'>
            <StepCard num={stepCardItems[0].num} title={stepCardItems[0].title} description={stepCardItems[0].description} cardClass={`lg:h-[150px] lg:w-[450px] ${stepCardItems[0].cardClass}`} className='' />
            <StepCard num={stepCardItems[1].num} title={stepCardItems[1].title} description={stepCardItems[1].description} cardClass={`lg:h-[150px] lg:w-[450px] ${stepCardItems[1].cardClass}`} className='' />
          </div>
          <div className='w-full inline-flex justify-center items-center gap-2'>
            <h2 className='text-xl text-white'>Building the <span className='w-10 pb-[2px] bg-[linear-gradient(180deg,#00000000_50%,#ee374ecf_50%)] font-bold'> <i> thing right </i> </span> </h2>
            <div className='flex-1 text-white bg-white/70 h-[1px]'></div>
          </div>
          <div className='mt-5 flex flex-wrap items-center gap-4'>
            <StepCard num={stepCardItems[0].num} title={stepCardItems[0].title} description={stepCardItems[0].description} cardClass={`lg:h-[150px] lg:w-[450px] ${stepCardItems[0].cardClass}`} className='' />
            <StepCard num={stepCardItems[1].num} title={stepCardItems[1].title} description={stepCardItems[1].description} cardClass={`lg:h-[150px] lg:w-[450px] ${stepCardItems[1].cardClass}`} className='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Processes