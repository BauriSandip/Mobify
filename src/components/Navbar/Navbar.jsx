import React from 'react'
import {IoMdSearch} from 'react-icons/io'
import { FaCaretDown,FaCartShopping} from 'react-icons/fa6'
import DarkMode from '../../../src/components/Navbar/DarkMode'
import mylogo2 from '../../assets/mylogo2.png'


import { useNavigate,NavLink } from 'react-router-dom';
const MenuLinks =[
    {
       id:1,
       name:"Home",
       link:'/', 
    },
    {
        id:2,
        name:"Shop",
        link:"/#shop", 
     },
     {
        id:3,
        name:"About",
        link:"/#about", 
     },
     {
        id:4,
        name:"Blogs",
        link:"/#blog", 
     }
]
const DropdownLinks=[
    {
        id:1,
        name:"Trending Product",
        link:"/#ok",
    },
    {
        id:2,
        name:"Best Selling",
        link:"/#",
    },
    {
        id:3,
        name:"Top Rated",
        link:"/#",
    }
]
const Navbar = ({size,setShow}) => {
   
    const navigate= useNavigate();
    const handleSearch=()=>{
        setShow(true);
        navigate('/search');
    }
   
  return (
    <>
    <div className='bg-white dark:bg-gray-900 dark:text-white  duration-200  relative z-40'>
        <div className='py-4'>
            <div className='container flex justify-between items-center'>
                <div className=' flex  items-center gap-4'>
                    <img  src={mylogo2} alt="" className='max-w-24 sm:w-20 hidden xl:block ' />
                    <NavLink to='/' onClick={()=>setShow(true)} className='text-primary font-semibold tracking-widest text-xl uppercase sm:text-3xl'>mobify</NavLink>
                 {/* {manu}    */}
                <div className='hidden lg:block'>
                    <ul className='flex items-center gap-4'>
                        {
                        MenuLinks.map((data,index) => (
                            <li key={index}>
                                <NavLink to={data.link} onClick={()=>setShow(true)} className=' inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200'>
                                    {" "}
                                    {data.name}</NavLink>
                            </li>
                        ))
                        }
                        {/* dropdown */}
                        <li className=' relative cursor-pointer group'>
                           <a href="#" className=' flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2'>
                            Quick links
                            <span>
                                <FaCaretDown className=' group-hover:rotate-180 duration-300'  />
                            </span> 
                            </a> 
                              {/* ....Dropdown link */}
                            <div className=' absolute z-[9999] hidden group-hover:block w-[200px] rounded-md  bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white'>
                                <ul className=' space-y-2'>
                                    { DropdownLinks.map((data,index)=>(
                                        <li key={index}>
                                        <NavLink to={data.link}
                                        
                                        className='text-gray-500 hover:text-black dark:hover:text-white duration-200 p-2 inline-block w-full hover:bg-primary/20 rounded-md font-semibold '
                                        >{data.name}</NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                </div>
            {/* {Navbar right} */}
            <div className='flex justify-between items-center gap-4'>
                {/* search bar */}
            <div className=' relative group '>
            {/* <input type="text" placeholder='Search' autoComplete='none'  
            className='search-bar'  onChange={(e)=>{setsearchTerm(e.target.value)}} /> */}
            <IoMdSearch onClick={()=>handleSearch() }
            className='text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200'
            />
            </div>
            {/* order button */}
                <button className=' relative p-3' onClick={()=>setShow(false)}>
                    <FaCartShopping className=' text-xl text-gray-600 dark:text-gray-400' />
                    <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>
                       {size} {/* 4 dinamicaly change */}
                    </div>
                </button>

                {/* dark mode */}
                <div>
                    <button className=' rounded-2xl bg-slate-500 text-white dark:text-black dark:bg-slate-100 font-light text-sm p-2' onClick={(e)=>{navigate('/login')}}>LogIn</button>
                </div>
                <div className=' hidden sm:block'>
                  <DarkMode /> 
                </div>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar