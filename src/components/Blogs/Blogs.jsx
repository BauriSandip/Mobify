import React from 'react'
import Heading from '../Shared/Heading'
import Img1 from '../../assets/blogs/blog-1.jpg'
import Img2 from '../../assets/blogs/blog-2.jpg'
import Img3 from '../../assets/blogs/blog-3.jpg'
 const BlogData=[
    {
        id:1,
        title:"How To Choose Smartphone. ",
        subtitle:"In today's fast-paced world, a smartphone has become an essential tool that keeps us connected, informed, and entertained. With the ever-evolving technology landscape, choosing the right phone to meet your needs and budget can be a daunting task. This guide will help you navigate the sea of options and make an informed decision when selecting the perfect phone for you.",
        published:"3 jul ,2024",
        image:Img2,
        aosDelay:"0",
        
    },
    {
        id:2,
        title:"How To Choose Smartwatch. ",
        subtitle:"Before buying a smartwatch, make sure to check its compatibility with your smartphone. Style and comfort: Look for options with different watch faces, customizable bands, and designs that suit your taste. Comfort is crucial, so choose a watch with a lightweight and breathable band that sits comfortably on your wrist.",
        published:"23 May ,2024",
        image:Img1,
        aosDelay:"200",
        
    },
    {
        id:3,
        title:"How To Choose VR ",
        subtitle:"If your purpose is to watch movies and enjoy videos in an immersive then you should buy a normal streaming VR headset to which you can attach your smartphone. But, if you are looking for a VR headset on which you can enjoy gaming then a high-end VR gaming headset might be the pick for you.",
        published:"6 Jun ,2024",
        image:Img3,
        aosDelay:"400",
        
    },
 ]
const Blogs = () => {
  return (
    <div className='my-12'>
        <div className=' container'>
            {/* Heading section */}
            <Heading title={"Recent News"} subtitle={"Explor Our Blogs"}/>
            {/* blog section */}
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
            {/* blog card */}
            {
                BlogData.map((data) =>(
                    <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.id} className='bg-white dark:bg-gray-900'>
                        {/* image section */}
                        <div className=' overflow-hidden rounded-2xl mb-2'>
                        <img src={data.image} alt=""  className=' w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500'/>
                        </div>
                        {/* content section */}
                        <div className=' space-y-2'>
                            <p className=' text-xs text-gray-500'>{data.published}</p>
                            <p className=' font-bold line-clamp-1'>{data.title}</p>
                            <p className=' line-clamp-2 text-xs text-gray-600 dark:text-gray-400'>{data.subtitle}</p>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default Blogs