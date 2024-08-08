import React from 'react'
import { ChevronDown } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className='h-screen w-full flex flex-col items-center justify-center relative'>
      <div className='text-center text-white text-3xl md:text-4xl lg:text-5xl font-thin lg:px-52 px-10 sm:px-32 md:px-44'>
        <span>
          I&apos;m Emre, a{" "}
        </span>
        <span className='font-semibold'>Software Engineer</span>
        <span>
          {" "} who turns tech jargon into user-friendly magic.
        </span>
      </div>
      <div className='absolute bottom-10'>
        <ChevronDown size={32} color="white" />
      </div>
    </section>
  )
}

export default HeroSection
