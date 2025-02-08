import React from "react";
import { Poppins } from "next/font/google";

const poppins4 = Poppins({
  subsets: ["latin"],
  weight: "400",
});
const poppins5 = Poppins({
  subsets: ["latin"],
  weight: "500",
});
const Footer = () => {
  return (
    // <div>flex flex-wrap justify-between items-start gap-8
    //   <footer className="text-[#fafafa] body-font bg-[#000000]">
    //     <div className="container px-5 py-24 mx-auto">
    //       <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
    //         <h2 className="title-font font-medium text-[#fafafa] tracking-widest text-sm mb-3">
    //           Links
    //         </h2>
    //         <nav className="list-none mb-10 space-y-3">
    //           <li>
    //             <a className="text-[#fafafa]"> Home</a>
    //           </li>
    //           <li>
    //             <a className="text-[#fafafa]">Shop</a>
    //           </li>
    //           <li>
    //             <a className="text-[#fafafa]">About</a>
    //           </li>
    //           <li>
    //             <a className="text-[#fafafa]">Contact</a>
    //           </li>
    //         </nav>
    //       </div>
    //       <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
    //         <h2 className="title-font font-medium text-[#fafafa] tracking-widest text-sm mb-3">
    //              Help  
    //         </h2>
    //         <nav className="list-none mb-10 space-y-3">
    //        <li>
    //          <a className="text-[#fafafa]">Payment Options </a>
    //        </li>
    //        <li>
    //          <a className="text-[#fafafa]">Returns</a>
    //        </li>
    //        <li>
    //          <a className="text-[#fafafa]">Privacy Policies</a>
    //        </li>
    //      </nav>
    //       </div>
    //       <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
    //       <h2 className="title-font font-medium text-[#fafafa] tracking-widest text-sm mb-3">
    //            Newsletter
    //       </h2>
    //       <input
    //       type="email"
    //       placeholder="Enter your email"
    //       className=" px-4 py-2 underline "
    //       />
    //       <button>SUBSCRIBE</button>
    //       </div>
    //     </div>
    //     <div>
    //         <div>
    //         <p className="text-gray-500 text-sm text-center sm:text-left">
    //             2022 Meubel House. All rights reverved
    //         </p>
    //         </div>
    //     </div>
    //   </footer>
    // </div>
    <footer className="bg-white py-10 px-4 w-full max-w-6xl mx-auto">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap md:text-left text-center order-first justify-between   ">
        <div className="lg:w-1/4 md:w-1/2 w-full px-4 items-center">
          
        <p
              className={`${poppins4.className} text-sm text-[#9F9F9F]  leading-relaxed`}
            >
              400 University Drive Suite 200 Coral Gables,
              <br />
              FL 33134 USA
            </p>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
          <h2 className="title-font font-medium text-[#9F9F9F] tracking-widest text-sm mb-3 ">
            Links
          </h2>
          <nav className="list-none mb-10 space-y-9">
            <li>
              <a className="text-[#000000] hover:text-gray-800">Home</a>
            </li>
            <li>
              <a className="text-[#000000] hover:text-gray-800">Shop</a>
            </li>
            <li>
              <a className="text-[#000000] hover:text-gray-800">About</a>
            </li>
            <li>
              <a className="text-[#000000] hover:text-gray-800">Contact</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-[#9F9F9F] tracking-widest text-sm mb-3">
            Help
          </h2>
          <nav className="list-none mb-10 space-y-9">
            <li>
              <a className="text-[#000000] hover:text-gray-800">Payment Options</a>
            </li>
            <li>
              <a className="text-[#000000] hover:text-gray-800">Returns</a>
            </li>
            <li>
              <a className="text-[#000000] hover:text-gray-800">Privacy Policies</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-[#9F9F9F] tracking-widest text-sm mb-3">
             Newsletter
          </h2>
          <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
            <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
              
              <input
                type="email"
                id="footer-field"
                name="footer-field"
                placeholder="Enter Your Email Address"
                className="w-full min-w-[200px] max-w-[250px] bg-[#ffffff] focus:bg-transparent text-base outline-none text-[#9F9F9F] py-1 px-2 leading-6 transition-colors border-b-2 border-black "
                />
            </div>
            <button className="lg:mt-2 xl:mt-0  inline-block text-[#000000] font-medium py-1 px-2 focus:outline-none border-b-2 border-black  w-fit ">
                SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-white">
      <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col border-t border-[#D9D9D9] pt-4 text-center sm:text-left">
        <p className="text-sm text-black sm:ml-6 sm:mt-0 mt-4 ${poppins4.className} text-sm text-[#9F9F9F]">
        2022 Meubel House. All rights reserved.
        </p>
        
      </div>
    </div>
  </footer>
  
  );
};

export default Footer;
