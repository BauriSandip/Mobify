import React from 'react'
import { useState } from 'react'
import { Data } from '../assets/appdata/Assets'
const Search = ({handleClick}) => {
    const[searchTerm,setsearchTerm]= useState("")
    
  return (
    <div className='mb-10 '>
        <div className=' flex items-center justify-center  '>
        <input className='Search outline-none rounded-lg  w-[200px] sm:w-[500px] font-bold bg-gray-200 dark:bg-black '  type="text" placeholder='Search here.' onChange={(e)=>{setsearchTerm(e.target.value);}} />
        </div>
    <div className='mb-10 p-10'>
    <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center'>
        {/* Card section */}
        {
            Data.filter((data) =>{
                if(searchTerm==""){
                  return ;
                }
                else if(data.name.toLowerCase().includes(searchTerm.toLowerCase())){
                  return data;}
              })
            
            .map((data) => (
                <div data-aos="fade-up" data-aos-delay={data.aosDelay} className=' group' key={data.id}>
                    <div  className=' relative '>
                        <img src={data.image} alt="" className='h-[180px] w-[260px]  rounded-md'/>
                        {/* hover button */}
                        <div className=' hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200'>
                            {/* <Button text={"Add To Cart"} bgColor={"bg-primary"} textColor={"text-white"}
                            /> */}
                            <button onClick={()=>handleClick(data)} className='bg-primary text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10'>Add To Cart </button>
                        </div>
                    </div>
         
                    <div className=' leading-7'>
                        <h2 className=' font-semibold'>{data.name}</h2>
                        <h2 className=' font-semibold'>{data.desc}</h2>
                        <h2 className=' font-bold'>Rs.{data.price}</h2>
                    </div>
                </div>

            ))
        }
    </div>
</div>

</div>
  )
}

export default Search