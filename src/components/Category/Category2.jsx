import React from 'react'
import Button from '../Shared/Button'
import Image3 from '../../assets/category/gaming.png'
import Image1 from '../../assets/category/vr.png'
import Image2 from '../../assets/category/speaker.png'
import { useNavigate } from 'react-router-dom';
const Category2 = () => {
    const navigate= useNavigate();
  return (
    <div className='py-8'>
        <div className=' container'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                 {/* 1st col */}
                 <div className=' col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative  h-[320px] flex items-end '>
                    <div>
                        <div className='mb-4'>
                            <p data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='mb-[2px] text-white'>enjoy</p>
                            <p data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='text-2xl font-semibold mb-[2px]'>with</p>
                            <p data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>PS-5</p> 
                            {/* <Button text="Browse" 
                                bgColor="bg-primary"
                                textColor="text-white"/> */}
                                <button onClick={()=> navigate('/ps')} className='bg-primary text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10'>Browse</button>
                        </div>
                    </div>
                    <img src={Image3} alt="" className='w-[170px] sm:w-[250px] absolute -right-0 top-1/2 -translate-y-1/2 ' />
                </div>

                {/* 2nd col */}
                <div className=' col-span-2 sm:col-span-1 py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/70 text-white rounded-3xl relative  h-[320px] flex items-end '>
                    <div>
                        <div className='mb-4'>
                            <p data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='mb-[2px] text-white'>enjoy</p>
                            <p data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='text-2xl font-semibold mb-[2px]'>with</p>
                            <p data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>VR</p> 
                            {/* <Button text="Browse" 
                                bgColor="bg-white"
                                textColor="text-brandGreen"/> */}
                                <button onClick={()=> navigate('/vr')} className='bg-white text-brandGreen cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10'>Browse</button>
                        </div>
                    </div>
                    <img data-aos="zoom-out" data-aos-once="true" data-aos-duration="0" src={Image1} alt="" className='w-[320px] absolute bottom-0' />
                </div>
                {/* 3rd col */}
                <div className='col-span-2 sm:col-span-1 py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/90 text-white rounded-3xl relative  h-[320px] flex items-end '>
                    <div>
                        <div className='mb-4'>
                            <p data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='mb-[2px] text-white'>enjoy</p>
                            <p data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='text-2xl font-semibold mb-[2px]'>with</p>
                            <p data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Speaker</p> 
                            {/* <Button text="Browse" 
                                bgColor="bg-white"
                                textColor="text-brandBlue"/> */}
                                <button onClick={()=> navigate('/speaker')} className='bg-white text-brandBlue cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10'>Browse</button>
                        </div>
                    </div>
                    <img src={Image2} alt="" className='w-[200px] absolute -right-3 top-[10px] lg:top-[20px]' />
                </div>

                

            </div>
        </div>
    </div>
  )
}

export default Category2