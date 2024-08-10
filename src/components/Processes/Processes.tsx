import React from 'react'
import StepCard from '../StepCard/StepCard';

interface ProcessProps {
  id?: string;
}

const Processes: React.FC<ProcessProps> = ({id}) => {
  return (
    <div id={id} className='bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] lg:px-24'>
      <div className='container mx-auto'>
        <h2 className='text-center text-5xl sm:text-6xl font-bold tracking-tighter'>AI development simplified</h2>
        <div className='sm:max-w-5xl mx-auto'>
          <p className='text-xl text-justify sm:text-center text-white/70 mt-5'>Our team partners with you from concept to market-ready MVP, ensuring your AI solutions are strategically designed and meticulously built to meet your unique needs. Think of AI development as building a house: it requires careful planning and execution with defined steps. While we follow a standard process, we remain flexible to adapt to your specific requirements.</p>
        </div>
        <div className='mt-14'>
          <StepCard num='3' title='Card Title' description='Card Description' />
        </div>
      </div>
    </div>
  )
}

export default Processes