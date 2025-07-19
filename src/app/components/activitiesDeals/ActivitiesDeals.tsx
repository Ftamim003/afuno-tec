import Image from 'next/image'
import React from 'react'

export default function ActivitiesDeals() {
  return (
    <div>
        <div className="mt-20 mb-12 flex items-center justify-center">
        <div className="flex items-center justify-center  md:mb-0">
                      <Image
                        src="/activitiesImage.png"
                        width={9}
                        height={9}
                        alt="Tours Icon"
                        className="inline md:mr-9 size-6 md:size-9 "
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-4xl font-bold text-center text-black leading-11 ">
                        
                        <span className="text-[#5F9111] text-center"> Activities deals</span>
                      </h2>
                    </div>
      </div>
    </div>
  )
}
