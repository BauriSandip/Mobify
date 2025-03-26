import React, { useEffect, useState } from 'react'

const Cart = ({cart,setCart,handleChange}) => {
    const[price,setPrice]=useState(0)
    const handlePrice=()=>{
        let ans=0;
        cart.map((item)=>(
            ans += item.amount * item.price
        ))
        setPrice(ans);
    }
    useEffect(()=>{
        handlePrice();
      })

const handleRemove=(id)=>{
    const arr=cart.filter((item)=>item.id !==id);
    setCart(arr);
    
}
  return (
    <article>
        {
            cart?.map((item)=>(
                <div key={item.id} className='flex justify-between gap-3'>
                    <div className='max-h-[200px] sm:max-h-[250px] max-w-[80px] sm:max-w-[200px]' >
                        <img src={item.image} alt=""className='h-[70px] sm:h-[100px] w-[50px] sm:w-[150px]  rounded-md' />
                        <p>{item.name}</p>
                    </div>
                    <div className=' rounded-2xl cursor-pointer flex '>
                        <button onClick={()=>handleChange(item,+1)} key={item.id} className='bg-red-400 dark:bg-red-200 m-1 p-0.5 h-10 w-6 sm:w-10 rounded-3xl'>+</button>
                        <button className='bg-orange-500 dark:bg-orange-300 m-1 p-0.5 h-10 w-6 sm:w-10 rounded'>{item.amount}</button>
                        <button onClick={()=>handleChange(item,-1)} key={item.id+1} className='bg-red-400 dark:bg-red-200 m-1 p-0.5 h-10 w-6 sm:w-10 rounded-3xl'>-</button>
                    </div>
                    <div className='flex flex-rows'>
                        <span className=' mt-2 sm:mt-4 text-green-700 dark:text-green-300' >{item.price}</span>
                        <button onClick={()=>handleRemove(item.id)} className='bg-red-400  dark:bg-red-200 m-1 h-10 sm:h-10 w-14 sm:w-20  text-sm rounded-3xl'>Remove</button>
                    </div>
                </div>
            ))
    }
    <div className='flex justify-center  font-bold text-black dark:text-white gap-5'>
        <span>Total Price Of Your Cart    </span>
        <span className=' text-green-700 dark:text-green-300'>Rs.- {price}</span>
    </div>
    <div className='flex justify-center pb-10 pt-4'>
        <button className='bg-red-400  dark:bg-red-200 dark:text-black hover:bg-red-700 dark:hover:bg-green-200 m-1 h-10 sm:h-10 w-14 sm:w-20  text-sm rounded-3xl'>Buy Now</button>
    </div>
    </article>
  )
}

export default Cart