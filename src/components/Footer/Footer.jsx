import React from 'react'

const Footer = () => {
  return (
    <div className=' dark:bg-gray-950'>
        <div className=' container'>
            <div className=' grid md:grid-cols-3 pb-20 pt-5'>
            {/* company details */}
            <div className=' py-8 px-4'>
            <a href="#" className='text-primary font-semibold tracking-widest text-xl uppercase sm:text-3xl'> MOBIFY</a>
            <p className='text-gray-600 lg:pr-24 pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptatem quia architecto.</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer