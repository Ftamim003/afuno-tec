

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from 'react-icons/md'

export const HeaderCoursel = () => {
  const [loaded, setLoaded] = useState(false)
    
  const sliderImages = [
    {
      id: 1,
      src: '/heroImage1.png',
      alt: 'Beautiful Beach View',
    },
    {
      id: 2,
      src: '/resort2.png',
      alt: 'Luxury Resort View',
    },
    {
      id: 3,
      src: '/resort4.jpg',
      alt: 'Mountain Side Resort',
    },
  ]  

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    mode: 'snap',
    created() {
      setLoaded(true)
    },
  })

//   const images = ['/heroImage1.png', '/resort2.png', '/resort4.jpg']

  useEffect(() => {
    const slider = instanceRef.current
    if (!slider) return

    const interval = setInterval(() => {
      slider.next()
    }, 5000) // autoplay every 5 seconds

    return () => clearInterval(interval)
  }, [instanceRef])

  return (
    <div className="relative  mx-auto overflow-hidden ">
      <div ref={sliderRef} className="keen-slider">
        {sliderImages.map((image, index) => (
          <div key={index} className="keen-slider__slide">
            <Image
              src={image.src}
              alt={`Slide ${index + 1}`}
              width={1200}
              height={500}
              className="w-full h-[400px]  md:h-[600px] object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {loaded && (
        <>
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black/40  text-5xl text-white  rounded-full z-10"
          >
            {/* <MdOutlineKeyboardArrowLeft /> */}
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black/40 text-white text-5xl  rounded-full z-10"
          >
            {/* <MdKeyboardArrowRight /> */}
          </button>
        </>
      )}
    </div>
  )
}
