import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>
                <p className='text-lg sm:text-xl md:text-2xl font-light text-black leading-relaxed mb-6'>
                    Your ultimate fitness companion to help you achieve your goals, one rep at a time.
                </p>
                <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
                    Grind<span className='text-blue-400'>Fit</span>
                </h1>
            </div>
            <p className='text-sm sm:text-base md:text-lg font-light text-black leading-relaxed max-w-[80%] mx-auto mb-8'>
                Start today, <span className='font-semibold text-blue-400'>push your limits,</span> and unlock your full potential. Let's make it happen!
                With every workout, you're building strength, confidence, and a healthier future. Don't wait for the perfect moment—create it.
            </p>
           <Button func={() => {
            window.location.href = '#generate'
           }}text={"Lets Grind"}></Button>
        </div>
    )
}
