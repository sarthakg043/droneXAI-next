import React from 'react'

const Services = () => {

  const service_items = [
    {
      title: 'Custom AI Solutions Development',
      description: 'We design and develop custom AI Solutions, from machine learning models to full-scale applications from building RAG pipelines to deploying End-to-End AI Adoption for an enterprise. Our expertise spans various industries, ensuring that your AI solution is optimized for your specific use case and delivers measurable business value.',
      img: '',
    },
    {
      title: 'AI Agents Development',
      description: 'AI-powered omni-channel agents for Webchat, WhatsApp, and Instagram. Achieve higher engagement, lead capturing, and efficient appointment booking with our multilingual, AI-driven solutions. We also build cutting-edge, state-of-the-art AI agents to increase productivity for your organization by automating tasks, integrating your knowledge base, improving communication, enabling analytics and insights, and providing real-time assistance.',
      img: '',
    },
    {
      title: 'AUTONOMOUS AGENT DEVELOPMENT',
      description: 'At DroneX AI, we design agents that can predictively enhance businesses with Workflow Automation, transforming operations through intelligent agents that adapt and optimize tasks. Our Natural Language to SQL solution bridges the gap between human language and database queries, achieving 40% better results. We develop complex data pipelines that ensure data integrity and timely analytics, while our Self-Adaptive Decision Systems enable dynamic, real-time decision-making, keeping your business ahead of the curve.',
      img: '',
    },
    {
      title: 'AI Document Processing Solution',
      description: 'Save time, costs, and personnel hours with AI-enabled intelligent document processin (IDP). Our AI-enabled data capture solutions make document processing a breeze, minimizing the need for manual data entry, exception management, and quality checks. We work with unstructured or semi-structured documents to capture data with high accuracy and a higher percentage of straight-through processing (STP). Our solutions are loaded with AI/ML-powered pre-processing and post-processing features.',
      img: '',
    },
    {
      title: 'AI Integration and Implementation',
      description: 'We assist in integrating AI technologies into your current infrastructure, ensuring smooth and efficient implementation. Our services include system integration, API development, and data pipeline setup for real-time AI functionality. Leverage NLP, AI, and ML to develop customer AI solutions and integrate technology across existing systems. Address business problems with solutions like enterprise content mining, vision analytics, fraud analytics, and claims processing.',
      img: '',
    },
    {
      title: 'AI Strategy Consulting',
      description: 'Build an AI adoption roadmap from assessment to deployment, integrating AI into operations for a scalable and sustainable strategy. We identify opportunities to enhance existing products or create new AI-driven solutions, with strategic planning that includes market analysis and a detailed roadmap. Ensure your AI initiatives align with business goals through our comprehensive approach.',
      img: '',
    },
    {
      title: 'AI Workshops and Training',
      description: 'We offer workshops and training sessions to help your team understand AI technologies and their applications. Our training programs are customized to your needs, covering topics from basic AI concepts to advanced machine learning techniques.',
      img: '',
    },
    {
      title: 'Prototypes and Proof of Concepts',
      description: 'We build prototypes and proof of concepts to validate your AI product ideas. Our iterative approach allows you to test feasibility, gather user feedback, and refine your solution before full-scale development, reducing risk and accelerating time-to-market.',
      img: '',
    },
    {
      title: 'AI-backed Design &amp; Development',
      description: 'AI-backed software development to manage the entire lifecycle from designing, developing, deploying &amp; maintaining customer software. Integrate AI into the software development lifecycle to ensure faster time-to-market, better scale, quality and efficiency.',
      img: '',
    },
    {
      title: 'Data Engineering',
      description: 'Start the AI journey with the data cycle from collection to storage to analytics to business application. Raw data collection, data management, and transformation to convert the enterprise data ready analytics &amp; business problem-solving.',
      img: '',
    },
    {
      title: 'ML Model Development',
      description: 'Deploy machine learning and deep learning models and algorithms to automate complex tasks and enable smarter decision-making. Cater to use cases across industries to address business problems with Predictive Analytics, operational Analytics, prescriptive analytics, etc.',
      img: '',
    },
  ]

  return (
    <div className='bg-black text-white py-[72px] sm:py-24'>
      <div className="container">
        <h2 className='text-center font-bold text-5xl sm:text-6xl tracking-tighter'>Everthing you need</h2>
        <div className='max-w-2xl mx-auto'>
          <p className='text-justify sm:text-center  mt-5 text-xl text-white/70'>As a one-stop shop, we eliminate the need to work with multiple studios or agencies. We combine design and development to deliver seamless, cost-effective AI solutions, crafting bespoke, multi-modal experiences that bring your vision to life.</p>
        </div>

        <div className='mt-16 flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-4 sm:gap-4'>
          {service_items.map(({title, description}, index) => (
            <div key={index} className='sm:max-w-[430px] xl:max-w-[400px] 2xl:max-w-[322px] border border-white/30 px-5 py-10 text-center rounded-xl'>
              <div className='inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg'>{"Logo"}</div>
              <h3 className='mt-6 font-bold'>{title}</h3>
              <p className='mt-2 text-white/70 text-justify'>{description}</p>
            </div>
          ))}
        </div>

      </div>

    </div>
  )
}

export default Services