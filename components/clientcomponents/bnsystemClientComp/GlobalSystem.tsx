import BtnWrapper from '@/components/WrapperComponent/BtnWrapper'
import LevelIcon from '@/components/dashboardComponents/LevelIcon'
import React from 'react'
import { IoIosUnlock } from 'react-icons/io'

const GlobalSystem = () => {
  const levels = Array.from({ length: 10 }, (_, i) => i + 1);
  return (
    <div className="bg-[#1f1f1f] flex flex-col lg:flex-row gap-y-5 lg:gap-y-0 items-center justify-between py-8 m-3 rounded-md">
      <div className="text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl  px-3"> Global System &#40;comming soon&#41;</div>
      <div className="flex flex-col lg:flex-row gap-y-6  items-center justify-center gap-x-9 mx-10">
        <div className="h-fit grid grid-cols-5 w-fit  gap-x-2 ">
        {levels.map((index) => (
            <LevelIcon key={index} level={index } id={`globalSystem-level-${index + 1}`} context="globalSystem"/>
          ))}
        </div>
        
        <div className='flex items-center relative'>
        <BtnWrapper
          text="Soon"
          height="py-2"
          width="px-10"
          // path="/dashboard/bnsystem/planetupgrade"
        />
        <IoIosUnlock  className='absolute right-[10%]' />
        </div>
      </div>
    </div>
  )
}

export default GlobalSystem