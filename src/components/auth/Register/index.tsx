import React, { useState } from "react";
import Image from "next/image";
import loginImage from "src/assets/images/loginImage.png";
import ic_baseline from "src/assets/logos/ic_baseline.svg";
import userLogo from "src/assets/logos/user.svg";
import schoolLogo from "src/assets/logos/school.svg";

import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();
  const [registerPath, setRegisterPath] = useState<any>("");

  const handleRegisterPath = (path: string) => {
    console.log(path);
    setRegisterPath(`/Register/${path}`);
  };

  const handleRegister = () => {
    router.push(registerPath);
  };

  return (
    <section>
      <div className="flex ">
        <div className="w-[50%] bg-[#0089ED] h-[100vh] rounded-[16px] hidden md:block ">
          <div>
            <Image src={loginImage} alt="background" width={521} height={521} />
            <div className="flex flex-col text-white px-[10%] pt-[5%]">
              <span className="text-[40px] font-[600]">
                Register to Finnlap
              </span>
              <span className="text-[20px] font-[300]">
                A think for your relief!
              </span>
            </div>
          </div>
        </div>
        <div className=" w-[50%] h-14">
          <div className="flex  justify-around flex-wrap m-5">
            <p className=" text-[#1F3D94] 2xl:text-[24px]  xl:w-[1440] font-bold my-5 text-center md:text-left md:pl-4">
              Let's get started!
            </p>
            <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 items-center px-2 gap-4">
              <div
                className=" p-5 block rounded-lg bg-white border-2 border-[#2B84EA] 2xl:w-[228px]  cursor-pointer  hover:bg-[#EAF3FD]"
                onClick={() =>
                  handleRegisterPath("/Student/MobileVerification")
                }
              >
                <div className=" ">
                  <div className="w-[56px] h-[56px] flex justify-center items-center bg-white rounded-lg border-2 border-[#BFDAF9]">
                    <Image src={userLogo} alt="Student" />
                  </div>
                  <h5 className=" text-[#1F3D94] 2xl:text-[20px] font-[700] cursor-pointer mb-2">
                    Student
                  </h5>
                  <p className="2xl:text-[14px]  text-[#1F3D94] font-[300] opacity-[50%] ">
                    Discover a range of investment options curated specifically
                    to match your financial goals and risk tolerance
                  </p>
                </div>
              </div>
              <div
                className="p-5 block rounded-lg bg-[#EAF3FD] border-2 border-[#2B84EA] 2xl:w-[228px]  cursor-pointer  hover:bg-white"
                onClick={() => handleRegisterPath("/College/EmailVerification")}
              >
                <div className="">
                  <div className="w-[56px] h-[56px] flex justify-center items-center bg-white rounded-lg border-2 border-[#BFDAF9]">
                    <Image
                      src={schoolLogo}
                      className="color-[#1F3D94]"
                      alt="School"
                    />
                  </div>

                  <h5 className=" text-[#1F3D94] 2xl:text-[20px] font-[700] cursor-pointer mb-2">
                    School & College
                  </h5>
                  <p className="2xl:text-[14px]  text-[#1F3D94] font-[300]  opacity-[50%]">
                    Say goodbye to long payment cycles. Convert your outstanding
                    invoices into cash quickly and efficiently
                  </p>
                </div>
              </div>

              <div
                onClick={() =>
                  handleRegisterPath("/Coaching/EmailVerification")
                }
                className=" p-5 block rounded-lg 2xl:w-[228px] border-2 border-[#2B84EA]  bg-[#EAF3FD] cursor-pointer  hover:bg-white "
              >
                <div className="">
                  <div className="w-[56px] h-[56px] flex justify-center items-center bg-white rounded-lg border-2 border-[#BFDAF9]">
                    <Image src={ic_baseline} alt="Coaching" />
                  </div>
                  <h5 className=" text-[#1F3D94] 2xl:text-[20px] font-[700] mb-2">
                    Coaching
                  </h5>
                  <p className=" text-[#1F3D94] 2xl:text-[14px] font-[300]  opacity-[50%] ">
                    Discover a range of investment options curated specifically
                    to match your financial goals and risk tolerance
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 flex justify-center 2xl:h-[48px] h-[40px] w-full">
            <button
              disabled={registerPath == "" ? true : false}
              onClick={handleRegister}
              type="submit"
              className="2xl:w-[360px]  md:w-[360px] w-full cursor-pointer text-white bg-[#0C21C1]  text-[16px] font-[600px] leading-[24px] px-[20px] 2xl:py-[14px] py-[10px] hover:bg-primary-700  focus:outline-none  rounded-lg text-center"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Register;
