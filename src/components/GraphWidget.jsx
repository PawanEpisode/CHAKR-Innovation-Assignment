import React from 'react'
import CustomText from './CustomText'

const GraphWidget = ({title}) => {
  return (
    <div className="w-full h-72 bg-white rounded-2xl shadow-xl">
      <CustomText title={title} className={'text-xl font-semibold text-[#131313]'}/>
    </div>
  )
}

export default GraphWidget