import React from 'react'

interface ProcessProps {
  id?: string;
}

const Processes: React.FC<ProcessProps> = ({id}) => {
  return (
    <div id={id}>Processes</div>
  )
}

export default Processes