import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Partners from "./components/Partners/Partners.jsx";

import headphone from "./assets/hero/headphone.png";
import smartwatch2 from "./assets/category/smartwatch2-removebg-preview.png";

import Products from "./components/Products/Products";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer.jsx";
import Popup from "./components/Popup/Popup.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import Display from "./Display/Display";
import { useState } from "react";
import Cart from "./Display/Cart";


const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  // const handleOrderPopup = () => {
  //   setOrderPopup(!orderPopup);
  // };
  const[show,setShow]=useState(true)
  const [warning,setWarning]=useState(false)
  const [cart,setCart]=useState([])
 const handleClick=(item)=>{
  let isPresent=false;
  cart.forEach((product)=>{
    if(product.id===item.id)
    isPresent=true;
    })
    if (isPresent){
      setWarning(true)
      setTimeout(()=>{
        setWarning(false)
      },2000)
      return ;
    }
    
    setCart([...cart,item])
 }

  const handleChange=(item,d)=>{
  let ind=-1;
  // console.log(item,d);
  cart.forEach((data,index)=>{
    if(data.id===item.id){
      ind=index;
    }
  });
   const tempArr=cart;
  //  tempArr[ind] += d;
   console.log(tempArr[ind])
   
   if(tempArr[ind].amount===0){
   tempArr[ind].amount=1;
   setCart([...tempArr])
   console.log(tempArr[ind])}
   else{
    tempArr[ind].amount+=d;
    setCart([...tempArr])
    console.log(tempArr[ind])
   }
  }


  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <React.Fragment>
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden no-scrollbar">
      <Navbar size={cart.length} setShow={setShow} />{
        show ?<Display handleClick={handleClick}/>:<Cart  cart={cart} setCart={setCart} handleChange={handleChange}   />
      }
     
     {
      warning && <div className="h-[80px] sm:h-[70px] w-[250px] sm:w-[300px] fixed rounded-2xl right-10 top-[20%] text-white bg-red-400 font-semibold p-5"> Item is already added to your cart</div>
     }
    </div>
    </React.Fragment>
  );
};

export default App;
