import React, { useState } from "react";
import Steper from "./Stepper";
import Image from "next/image";
import { useRouter } from "next/router";
import messageLogo from "src/assets/logos/message.svg";

const MobileVerify = () => {
  const router = useRouter();
  const [verify, setVerify] = useState(true);

  const handleVarify = () => {
    setVerify(false);
  };

  const handleEdit = () => {
    // Then navigate to a back page
    router.back();
  };

  const handleOtp = () => {
    router.push("/Register/Student/DetailVerification");
  };
  return (
    <section>
      <div className="mx-auto md:bg-[#0089ED] min-h-screen  text-white lg:px-3 ">
        <div className="pt-12">
          <p className="md:hidden text-[#1F3D94] text-center leading-7  text-[20px] font-bold">
            Verify Mobile Number
          </p>
          <Steper active1={true} verify1={false} />
        </div>
        {verify ? (
          <>
            <div className="flex justify-center lg:mt-10 px-[24px]">
              <div className=" p-6  md:w-[560px] md:h-[437px]  bg-white border border-gray-200 rounded-lg sm:shadow">
                <div className="">
                  <label className="block mb-2 text-[#1F3D94] text-[24px] font-bold  ">
                    Mobile Number<span className="text-[#FF3B3B]"> *</span>
                  </label>
                  <input
                    type="text"
                    name="mobileNumber"
                    maxLength={10}
                    id="phone"
                    className="w-full rounded-lg border border-solid border-[#BFDAF9] py-[14px] px-5 focus:outline-none "
                    placeholder="+919069773998"
                    pattern="\d{10}"
                    required
                  />
                </div>
                <div className="flex mt-2">
                  <input
                    id="checked-checkbox"
                    type="checkbox"
                    className="w-[18px] h-[18px] m-1 text-blue-600 bg-gray-100 border-gray-300 rounded "
                  />
                  <label
                    htmlFor="checked-checkbox"
                    className="ml-2 text-sm text-justify font-normal text-[#1F3D94] leading-6 opacity-[50%]"
                  >
                    I hereby consent to Capital Setu being appointed as my
                    authorised representative to receive my Credit Information
                    from Experian for the purpose of Credit assessment and
                    providing you multiple options of pre-approved Trade finance
                    limits(“End Use Purpose”). I hereby agree to{" "}
                    <span className="text-[#2B84EA] font-[600] text-[14px] leading-6">
                      Terms and Conditions.
                    </span>
                  </label>
                </div>
                <div className="block  px-3 gap-2 py-5 ">
                  <div className="flex justify-center">
                    <button
                      onClick={handleVarify}
                      type="submit"
                      className="w-[90%] cursor-pointer text-white bg-[#2B84EA]   focus:outline-none font-semibold text-base rounded-lg  px-[20px] py-[14px] text-center"
                    >
                      Get OTP
                    </button>
                  </div>
                  <div className="flex justify-center mt-5">
                    <span className="text-base font-[400] text-gray-400  leading-5">
                      Have an account?
                      {/* <NavLink href="/"> */}
                      <a className="text-base font-[600] text-[#2B84EA] hover:underline  leading-[20px] mx-1">
                        Login
                      </a>
                      {/* </NavLink> */}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-center lg:mt-10 px-[24px] ">
              <div className="md:w-[560px] md:h-[447px] py-[60px] px-[100px]  bg-white border border-gray-200 rounded-lg shadow">
                <div className=" 2xl:w-[338px] w-full flex flex-col justify-center items-center">
                  <p className="2xl:text-[24px] text-[16px] font-[700] text-[#1F3D94] leading-[24px]">
                    Verify Mobile Number
                  </p>
                  <p className="2xl:text-[16px] 2xl:mt-2 mt-5 text-gray-400  text-[16px]">
                    Enter the OTP sent to{" "}
                    <span className="text-[16px] font-[700] text-[#1F3D94] ">
                      85610**6*9{" "}
                    </span>
                    <Image
                      alt="edit"
                      src={messageLogo}
                      onClick={handleEdit}
                      width={10}
                      height={10}
                    />
                  </p>
                </div>

                <div className="flex justify-center mt-10">
                  <input
                    type="text"
                    maxLength={1}
                    className="2xl:mr-[6px] border-[1px] ml-[5px] mr-[5px] text-center border-[#BFDAF9]  2xl:w-[80px] 2xl:h-[80px] w-[76px] h-[76px] bg-[#BFDAF9] focus:outline-none"
                  />
                  <input
                    type="text"
                    maxLength={1}
                    className=" 2xl:ml-[6px] 2xl:mr-[6px] ml-[5px] mr-[5px] border-[1px] text-center  border-[#BFDAF9]  2xl:w-[80px] 2xl:h-[80px] w-[76px] h-[76px] bg-[#BFDAF9]  focus:outline-none"
                  />
                  <input
                    type="text"
                    maxLength={1}
                    className=" 2xl:mr-[6px] 2xl:ml-[6px] mr-[5px] ml-[5px] border-[1px]  text-center border-[#BFDAF9]   2xl:w-[80px] 2xl:h-[80px] w-[76px] h-[76px] bg-[#BFDAF9]  focus:outline-none"
                  />
                  <input
                    type="text"
                    maxLength={1}
                    className=" 2xl:ml-[6px] border-[1px] ml-[5px] text-center border-[#BFDAF9]  2xl:w-[80px] 2xl:h-[80px] bg-[#BFDAF9] w-[76px] h-[76px]  focus:outline-none"
                  />
                </div>
                <div className="2xl:w-[360px] 2xl:h-[48px] h-[40px] w-full mt-5">
                  <button
                    onClick={handleOtp}
                    type="submit"
                    className="w-full cursor-pointer text-white bg-[#2B84EA]  text-[16px] font-[600] leading-[24px] px-[20px] 2xl:py-[14px] py-[10px] hover:bg-primary-700  focus:outline-none  rounded-lg text-center"
                  >
                    Verify
                  </button>
                  <div className=" flex flex-col items-center justify-center">
                    <p className="2xl:text-[16px] text-[14px] font-[400] leading-[24px] text-gray-400 mt-4">
                      Didn’t you receive any code?
                    </p>
                    <p className="2xl:text-[16px] curser-pointer text-[14px] font-[600] leading-[20px] text-[#1F3D94] mt-2">
                      Resend code
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default MobileVerify;
