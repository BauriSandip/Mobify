import React from 'react'
import Button from '../Shared/Button'
import Image1 from '../../assets/category/earphone.png'
import Image2 from '../../assets/category/watch.png'
import Image3 from '../../assets/category/macbook.png'
import { useNavigate } from 'react-router-dom';

const Category = () => {
    const navigate= useNavigate();
  return (
    <div className='py-8'>
        <div className=' container'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* 1st col */}
                <div className=' col-span-2 sm:col-span-1 py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative  h-[320px] flex items-end '>
                    <div>
                        <div className='mb-4'>
                            <p data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='mb-[2px] text-gray-400'>enjoy</p>
                            <p data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='text-2xl font-semibold mb-[2px]'>with</p>
                            <p data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Earphone</p> 
                            {/* <Button text="Browse" 
                                bgColor="bg-primary"
                                textColor="text-white"/> */}
                                <button onClick={()=> navigate('/wired')} className='bg-primary text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10'>Browse</button>
                        </div>
                    </div>
                    <img src={Image1} alt="" className='w-[320px] absolute bottom-0' />
                </div>
                {/* 2nd col */}
                <div className='col-span-2 sm:col-span-1 py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/90 text-white rounded-3xl relative  h-[320px] flex items-end '>
                    <div>
                        <div className='mb-4'>
                            <p data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='mb-[2px] text-white'>enjoy</p>
                            <p data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='text-2xl font-semibold mb-[2px]'>with</p>
                            <p data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Watch</p> 
                            {/* <Button text="Browse" 
                                bgColor="bg-white"
                                textColor="text-brandYellow"/> */}
                                <button onClick={()=> navigate('/watch')} className='bg-white text-brandYellow cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10'>Browse</button>
                        </div>
                    </div>
                    <img src={Image2} alt="" className='w-[320px] absolute -right-4 top-[10px] lg:top-[20px]' />
                </div>

                {/* 3rd col */}
                <div className=' col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative  h-[320px] flex items-end '>
                    <div>
                        <div className='mb-4'>
                            <p data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='mb-[2px] text-white'>enjoy</p>
                            <p data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='text-2xl font-semibold mb-[2px]'>with</p>
                            <p data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Laptop</p> 
                            {/* <Button text="Browse" 
                                bgColor="bg-white"
                                textColor="text-primary"/> */}
                                 <button onClick={()=> navigate('/laptop')} className='bg-white text-primary cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10'>Browse</button>
                        </div>
                    </div>
                    <img src={Image3} alt="" className='w-[170px] sm:w-[250px] absolute -right-0 top-1/2 -translate-y-1/2 ' />
                </div>

            </div>
        </div>
    </div>
  )
}

export default Category