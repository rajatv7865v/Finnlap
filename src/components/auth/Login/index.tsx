import React from "react";
import Image from "next/image";
import loginImage from "src/assets/images/loginImage.png";
import messageLogo from "src/assets/logos/message.svg";
import padlockLogo from "src/assets/logos/padlock.svg";
import invisibleLogo from "src/assets/logos/invisible.svg";
import finnlapLogo from "src/assets/logos/finnlap.svg";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  return (
    <section>
      <div className="flex ">
        <div className=" w-[50%] h-14">
          <Image
            src={finnlapLogo}
            alt="background"
            width={240}
            height={240}
            className="pt-2"
          />
          <div className="px-[15%] py-[20%]">
            <h2 className="font-bold text-2xl py-4">SignIn</h2>
            <div className="flex flex-col py-2">
              <span>If you don’t have an account register</span>
              <div className="">
                <span>You can </span>
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={() => router.push("/Register")}
                >
                  {" "}
                  Register here!
                </span>
              </div>
            </div>
            <form>
              <div className="flex flex-col w-[429px] h-[64px]  ">
                <label htmlFor="" className="text-gray-400">
                  Email
                </label>
                <div className=" flex border-b-2 border-black">
                  <Image
                    src={messageLogo}
                    alt="background"
                    width={15}
                    height={18}
                  />
                  <input
                    placeholder="Enter your email address"
                    type="text"
                    className="placeholder-[#000842] px-3 outline-none w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col w-[429px] h-[64px]">
                  <label htmlFor="" className="text-gray-400">
                    Password
                  </label>
                  <div className=" flex border-b-2 border-black">
                    <Image
                      src={padlockLogo}
                      alt="background"
                      width={15}
                      height={18}
                    />
                    <input
                      placeholder="Enter your Password"
                      type="password"
                      className="w-full placeholder-[#000842] px-3 outline-none"
                    />
                    <Image
                      src={invisibleLogo}
                      alt="background"
                      width={15}
                      height={18}
                    />
                  </div>
                </div>
                <div className="flex justify-between w-[429px] py-[5px]">
                  <div>
                    <span>
                      <input type="checkbox" name="" id="" />
                    </span>{" "}
                    <span>Remember</span>
                  </div>
                  <span
                    className="text-blue-500 cursor-pointer"
                    onClick={() => router.push("/Register/College")}
                  >
                    Forgot Password?
                  </span>
                </div>
              </div>
              <button className="w-[429px] h-[53px] bg-[#0C21C1] rounded-[32px] text-white mt-4 ">
                Sign In
              </button>
            </form>
          </div>
        </div>
        <div className="w-[50%] bg-[#0089ED] h-[100vh] rounded-[16px] hidden md:block ">
          <div>
            <Image src={loginImage} alt="background" width={521} height={521} />
            <div className="flex flex-col text-white px-[10%] pt-[5%]">
              <span className="text-[40px] font-[600]">SignIn to Finnlap</span>
              <span className="text-[20px] font-[300]">
                A think for your relief!
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;
