import React, { useState } from "react";
import Link from "next/link";
// import edit from "/src/assets/icon/Edit.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import Steper from "./Stepper";

const KycVerification = () => {
  const router = useRouter();
  const handleVerify = () => {
    router.push("/Onboarding/Invester/IndianIndividual/indianKyc");
  };

  return (
    <section>
      <div className="mx-auto md:bg-[#0089ED] min-h-screen  text-white lg:px-3 ">
        <div className="pt-12">
          <Steper active3={true} verify2={true} verify1={true} />
        </div>
        <>
          <div className="flex justify-center mt-10 px-[24px]">
            <div className=" p-[60px]  md:w-[560px] md:h-[300px]  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="">
                <label className="block mb-2 text-[#1F3D94] text-[24px] font-bold  ">
                  PAN<span className="text-[#FF3B3B]"> *</span>
                </label>
                <input
                  type="text"
                  name="pan"
                  id="pan"
                  className="w-full rounded-lg border border-solid border-[#BFDAF9] py-[14px] px-5 focus:outline-none "
                  placeholder="Enter Pan Number"
                />
              </div>
              <div className=" flex justify-center w-full mt-5">
                <button
                  onClick={handleVerify}
                  type="submit"
                  className="2xl:w-[360px] 2xl:h-[48px]  h-[40px] text-center w-full cursor-pointer text-white bg-[#2B84EA]  text-[16px] font-[600] leading-[24px] px-[20px] 2xl:py-[14px] py-[10px]  focus:outline-none  rounded-lg "
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </>
      </div>
    </section>
  );
};

export default KycVerification;
