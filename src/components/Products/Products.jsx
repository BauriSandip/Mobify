import React from 'react'
import Heading from '../Shared/Heading'
import ProductCard from './ProductCard'
import Img1 from '../../assets/product/p-1.jpg'
import Img2 from '../../assets/product/p-3.jpg'
import Img3 from '../../assets/product/p-4.jpg'
import Img4 from '../../assets/product/p-5.jpg'
import Img5 from '../../assets/product/p-7.jpg'
import Img6 from '../../assets/product/p-9.jpg'
import Img7 from '../../assets/product/p-21.jpg'
import Img8 from '../../assets/product/p-11.jpg'
const ProductsData=[
    {
        id:1,
        img:Img1,
        price:"2000",
        title:"boat Headphone",
        aosDelay:"0"
    },
    {
        id:2,
        img:Img2,
        price:"1500",
        title:"Rocky Mountain",
        aosDelay:"200"
    },
    {
        id:3,
        img:Img3,
        price:"1200",
        title:"Goggles",
        aosDelay:"400"
    },
    {
        id:4,
        img:Img4,
        price:"1000",
        title:"Printed",
        aosDelay:"600"
    }
]

const ProductsData2=[
    {
        id:1,
        img:Img5,
        price:"5000",
        title:"Skullcandy",
        aosDelay:"0"
    },
    {
        id:2,
        img:Img6,
        price:"7500",
        title:"Logitech",
        aosDelay:"200"
    },
    {
        id:3,
        img:Img7,
        price:"24500",
        title:"AirPods Max",
        aosDelay:"400"
    },
    {
        id:4,
        img:Img8,
        price:"9000",
        title:"EarPods",
        aosDelay:"600"
    }
]

const Products = () => {
  return (
    <div>
        <div className=' container'>
            {/* head */}
            <Heading title="Our Product" subtitle="Explor Our products" />
            {/* Body */}
            <ProductCard data={ProductsData}/>
            <ProductCard data={ProductsData2}/>
        </div>
    </div>
  )
}

export default Products