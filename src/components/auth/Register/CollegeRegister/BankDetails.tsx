
import React, { useState } from "react";
import Link from "next/link";
import edit from "/src/assets/icon/Edit.svg";
import Image from "next/image";

import Steper from "./Stepper"
import {useRouter} from "next/router";
const Bankdetails = () => {
  const router=useRouter()
  return (
    <section>
    <div className="mx-auto md:bg-[#1F3D94] min-h-screen  text-white lg:px-3 ">
      
      <div className="pt-12">
      <Steper  active3={true} verify3={false} verify2={true} verify1={true}/>
      </div>
      <>
            <div className="flex justify-center mt-10 px-[24px]">
              <div className=" p-[60px]  md:w-[668px]   bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <p className="text-center lg:text-[24px] text-[16px] font-[700] text-[#1F3D94] leading-[24px]">
              Bank Account Details
                </p>
                <form  className="mt-10">
                  <div className="mt-5 flex flex-col sm:flex-row sm:space-x-4 ">
                    <div className="md:w-[280px] flex-1 ">
                      <label
                        htmlFor="name"
                        className="block lg:text-[14px]  font-[600] text-[#1F3D94] leading-[20px] "
                      >
                        Account Holder Name(as per PAN) <span className="text-[#FF3B3B] ml-1">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={"Rahul Kumar"}
                        // onChange={handleChange}
                        className="w-full mt-2 h-[48px] border-[1px] border-[#BFDAF9] bg-[#EAF3FD] px-[20px] py-[14px] rounded text-[#1F3D94] text-[14px] font-[600]"
                        required
                      />
                    </div>
                    <div className="flex-1 md:w-[280px]">
                      <label
                        htmlFor="email"
                        className="block lg:text-[14px]  font-[600] text-[#1F3D94] leading-[20px]"
                      >
                       Account Type<span className="text-[#FF3B3B] ml-2">*</span>
                      </label>
                      <input
                        type="text"
                        id="fathername"
                        name="fathername"
                        value={"Saving"}
                        // onChange={handleChange}
                        className="w-full h-[48px] mt-2 border-[1px] border-[#BFDAF9] bg-[#EAF3FD] px-[20px] py-[14px] rounded text-[#1F3D94] text-[14px] font-[600]"
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-5 flex flex-col sm:flex-row sm:space-x-4 ">
                    <div className="md:w-[280px] flex-1 ">
                      <label
                        htmlFor="name"
                        className="block lg:text-[14px]  font-[600] text-[#1F3D94] leading-[20px] "
                      >
                       Account Number<span className="text-[#FF3B3B] ml-2">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        // value={"Rahul Kumar"}
                        // onChange={handleChange}
                        placeholder="Enter Account No."
                        className="w-full mt-2 h-[48px] border-[1px] border-[#BFDAF9] bg-[#EAF3FD] px-[20px] py-[14px] rounded text-[#1F3D94] text-[14px] font-[600]"
                        required
                      />
                    </div>
                    <div className="flex-1 md:w-[280px]">
                      <label
                        htmlFor="email"
                        className="block lg:text-[14px]  font-[600] text-[#1F3D94] leading-[20px]"
                      >
                       Confirm Account Number<span className="text-[#FF3B3B] ml-2">*</span>
                      </label>
                      <input
                        type="text"
                        id="fathername"
                        name="fathername"
                        placeholder="Enter Confirm Account Number"
                        // onChange={handleChange}
                        className="w-full h-[48px] mt-2 border-[1px] border-[#BFDAF9] bg-[#EAF3FD] px-[20px] py-[14px] rounded text-[#1F3D94] text-[14px] font-[600]"
                        required
                      />
                    </div>
                  </div>
                  <div className=" mt-5 flex flex-col sm:flex-row sm:space-x-4 ">
                    <div className="md:w-[280px] flex-1 ">
                      <label
                        htmlFor="name"
                        className="block lg:text-[14px]  font-[600] text-[#1F3D94] leading-[20px] "
                      >
                       IFSC CODE<span className="text-[#FF3B3B] ml-2">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        // value={"Rahul Kumar"}
                        // onChange={handleChange}
                        placeholder="Enter IFSC Code"
                        className="w-full mt-2 h-[48px] border-[1px] border-[#BFDAF9] bg-[#EAF3FD] px-[20px] py-[14px] rounded text-[#1F3D94] text-[14px] font-[600]"
                        required
                      />
                    </div>
                    <div className="flex-1 md:w-[280px]">
                      <label
                        htmlFor="email"
                        className="block lg:text-[14px]  font-[600] text-[#1F3D94] leading-[20px]"
                      >
                       Bank Name<span className="text-[#FF3B3B] ml-2">*</span>
                      </label>
                      <input
                        type="text"
                        id="fathername"
                        name="fathername"
                        placeholder="Select Bank Name"
                        // onChange={handleChange}
                        className="w-full h-[48px] mt-2 border-[1px] border-[#BFDAF9] bg-[#EAF3FD] px-[20px] py-[14px] rounded text-[#1F3D94] text-[14px] font-[600]"
                        required
                      />
                    </div>
                  </div>
                 
                  

                  <div className=" flex justify-center w-full mt-10">
                    <button
                      onClick={()=>{
                        router.push('../../../Invester/dashboard')
                      }}
                      type="submit"
                      className="2xl:w-[360px] 2xl:h-[48px]  h-[40px] text-center w-full cursor-pointer text-white bg-[#2B84EA]  text-[16px] font-[600] leading-[24px] px-[20px] 2xl:py-[14px] py-[10px]  focus:outline-none  rounded-lg "
                    >
                      Next
                    </button>
                  </div>
                </form>
               
              </div>
            </div>
          </>
    </div>
  </section>

      
  )
}

export default Bankdetails

