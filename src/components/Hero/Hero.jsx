import React from 'react'
import Slider from "react-slick"
import Image1 from "../../assets/hero/headphone.png"
import Image2 from "../../assets/hero/vr.png"
import Image3 from "../../assets/hero/mac.png"
import Image4 from "../../assets/hero/i-15.png"
import Button from '../Shared/Button'

import { useNavigate } from 'react-router-dom';
const HeroData=[
    {
        id:1,
        Image:Image4,
        subtitle:"A16 Bionic chip",
        title:"Face Id",
        title2:"Phone",
        description: "Best Phone ever in the India",
        path:"/phone"
    },
    {
        id:2,
        Image:Image1,
        subtitle:"Beats Solo",
        title:"Wireless",
        title2:"Headphone",
        description: "Best headphone ever in the India",
        path:"/headphone"
    },
    {
        id:3,
        Image:Image2,
        subtitle:"Beats Solo",
        title:"Wireless",
        title2:"Virtual",
        description: "Best VR ever in the India",
        path:"/vr"

    },
    {
        id:4,
        Image:Image3,
        subtitle:"4K Display",
        title:"Branded",
        title2:"Laptops",
        description: "Best headphone ever in the India",
        path:"/laptop"

    }
]

const Hero = ({handleOrderPopup}) => {
    const navigate= useNavigate();

    const settings={
        dots: true,
        arrows:false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlaySpeed:4000,
    cssEase:"ease-in-out",
    pauseOnHover:false,
    pauseOnFocus:true,
    };
  return (
    <div className=' container'>
        <div className=' overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center '>
            <div className=' container pb-8 sm:pb-0'>
            {/* Hero */}
         <Slider {...settings}>
            {HeroData.map((data)=>( 
                <div key={data.id}>
                    <div className=' grid grid-cols-1 sm:grid-cols-2'>
                        {/* text contener */}
                        <div className='flex justify-center flex-col gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-1000 '>
                        <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className=' text-2xl sm:text-6xl lg:text-2xl font-bold'>{data.subtitle}</h1>
                        <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className=' text-5xl sm:text-6xl lg:text-7xl font-bold sm:p-10 '>{data.title}</h1>
                        <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='text-4xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[80px] xl:text-[150px] font-bold'>{data.title2}</h1>
                        <div data-aos="fade-up" data-aos-offset="0" data-aos-duration="500" data-aos-delay="300" className='pt-10 sm:pt-40'>
                            {/* <Button text="shop now" 
                                bgColor="bg-primary"
                                textColor="text-white"
                                onClick={()=> navigate('/phone')} 
                            /> */}
                            <button onClick={()=> navigate(data.path)}  className='bg-primary text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10'>Shop Now</button>
                        </div>
                        </div>
                        {/* img section */}
                        <div className=' order-1 sm:order-2'>
                            <div data-aos="zoom-in" data-aos-once="true">
                                <img src={data.Image} alt="" 
                                className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto  drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40'/>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            </Slider>  
            </div> 
        </div>
    </div>
  )
}

export default Hero