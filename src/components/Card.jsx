import React from 'react'
import { reason } from '../constants'
import { Monitor } from 'lucide-react';
import { ArrowDownToLine } from 'lucide-react';
import { Telescope } from 'lucide-react';
import { Laugh } from 'lucide-react';

const Card = () => {
  return (
    <div>
      <h1 className="mt-20 text-xl md:text-2xl font-bold md:ml-28 mb-10 ml-10">More reasons to join</h1>
      <div className='flex flex-wrap items-center text-2xl flex-row ml-[60px] mr-[60px] '>
        <div className='bg-gradient-to-b from-gray-900 via-indigo-1000 to-purple-900 p-10 md:flex-[20%] flex-[100%] mr-10 mb-10 lg:flex-[30%] xl:flex-[20%] rounded-lg '>
          <div>
            {reason.slice(0,1).map((item, index)=>(
              <div>
                <h1 className='text-sm md:text-2xl'>{item.label}</h1>
                <p className='text-base text-neutral-500 '>{item.text}</p>
                <div className='relative md:left-36 md:top-[20px] lg:h-[95px]'>
                  <Monitor className='md:h-[135px] md:w-[70px]'/>

                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='bg-gradient-to-b from-gray-900 via-indigo-1000 to-purple-900 p-10 md:flex-[20%] flex-[100%] mr-10 mb-10 lg:flex-[30%] xl:flex-[20%] rounded-lg'>
        <div>
            {reason.slice(1,2).map((item, index)=>(
              <div>
                <h1 className='text-sm md:text-2xl'>{item.label}</h1>
                <p className='text-base text-neutral-500 '>{item.text}</p>
                <div className='relative md:left-36 md:top-[20px]'>
                  <ArrowDownToLine className='md:h-[100px] md:w-[70px] lg:h-[110px]'/>

                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='bg-gradient-to-b from-gray-900 via-indigo-1000 to-purple-900 p-10 md:flex-[20%] flex-[100%] mr-10 mb-10 lg:flex-[30%] xl:flex-[20%] rounded-lg'>
        <div>
            {reason.slice(2,3).map((item, index)=>(
              <div>
                <h1 className='text-sm md:text-2xl'>{item.label}</h1>
                <p className='text-base text-neutral-500 '>{item.text}</p>
                <div className='relative md:left-32 md:top-[28px]'>
                  <Telescope className='md:h-[120px] md:w-[70px] '/>

                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='bg-gradient-to-b from-gray-900 via-indigo-1000 to-purple-900 p-10 md:flex-[20%] flex-[100%] mr-10 mb-10 lg:flex-[30%] xl:flex-[20%] rounded-lg'>
        <div>
            {reason.slice(3,4).map((item, index)=>(
              <div>
                <h1 className='text-sm md:text-2xl'>{item.label}</h1>
                <p className='text-base text-neutral-500 '>{item.text}</p>
                <div className='relative md:left-[140px] md:top-[20px]'>
                  <Laugh className='md:h-[90px] md:w-[50px] lg:h-[70px]'/>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card