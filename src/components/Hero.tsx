import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <>
    <div className="bg-[#FBEBB5] min-h-screen flex items-center justify-center">
    <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] items-center w-full max-w-6xl mx-auto">
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-[64px] font-medium text-[] leading-tight">
        Rocket single
        <br /> seater
        </h1>
          <button className="lg:mt-2 xl:mt-4  inline-block text-[#000000] font-medium py-1 px-2 focus:outline-none border-b-2 border-black  w-fit">
            Shop Now
          </button>
          
      </div>
      <div className=" flex justify-end items-center">
      <div className="rounded-lg  w-full max-w-[500px] md:max-w-[863px] sm:mx-auto">
      <Image
        src='/sofa.png'
        alt='sofa image'
        className="w-full h-auto rounded-lg"
        width={1000}
        height={1000}
      />
      </div>
      </div>
    </div>
  </div>
  <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img
        alt="ecommerce"
        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
        src="https://dummyimage.com/400x400"
      />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">
          BRAND NAME
        </h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
          The Catcher in the Rye
        </h1>
        
        
     
        <div className="flex">
         
          <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
            Button
          </button>
          
        </div>
      </div>
    </div>
  </div>
</section>

  </>
  )
}


export default Hero
