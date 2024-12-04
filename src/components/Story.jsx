import React, { useRef } from 'react'
import AnimatedTitle from './AnimatedTitle'
const Story = () => {
    const frameref=useRef(null);
    const handleMouseLeave=()=>{

    }
    const handleMouseMove=()=>{

    }
  return (
    <section id='story'
        className='min-h-dvh w-screen bg-black text-blue-50'>
        <div className='flex size-full flex-col items-center py-10 pb-24'>
            <p className='font-general text-sm uppercase md:text-[10px]'>the multiversal ip world
            </p>
        </div>

        <div className='relative size-full'>
            <AnimatedTitle
            title="the st<b>o</b>ry of <br /> a hidden real<b>m</b>"
            sectionId="#story"
            containerClass={"mt-5 pointer-events-none mix-blend-difference relative z-10"}
            />

            <div className='story-img-container'>
                <div className='story-img-mask'>
                    <div className='story-img-content'>
                        <img 
                        ref={frameRef}
                        src="/img/entrance.webp" 
                        alt="entrance img"
                        className='object-contain'
                        onMouseEnter={handleMouseLeave}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseLeave}
                        onMouseMove={handleMouseMove}
                        />
                    </div>
                </div>
            </div>

        </div>


    </section>
  )
}

export default Story