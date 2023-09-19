import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Loader from "/src/assets/logos/loader.svg";
// import created from "/src/assets/icon/created.svg";
import Steper from "./Stepper";

const DetailsVerification = () => {
  const router = useRouter();
  //   const [data, setData] = useState(false);
  const [otp, setOtp] = useState(true);
  const [tabs, setTabs] = useState(1);
  const [formData, setFormData] = useState({
    name: "Rahul Kumar",
    email: "abc@gmail.com",
    date: "25-02-2000",
    gender: "Male",
    panNumber: "+91 8000200200",
    fname: "Anandi Prasad",
  });

  const handleChange = () => {
    // const { name, value } = e.target;
    // setFormData({ ...formData, [name]: value });
  };

  const handlenominee = () => {
    setTabs(2);
  };
  const handlecreated = () => {
    router.push("/Register/College/BankVerification");
  };
  return (
    <section>
      <div className="mx-auto md:bg-[#0089ED] min-h-screen  text-white lg:px-3 ">
        <div className="pt-12">
          <Steper
            active2={true}
            verify3={false}
            verify2={false}
            verify1={true}
          />
        </div>

        {tabs == 1 && (
          <>
            <div className="flex justify-center lg:mt-10 px-[24px] ">
              <div className="md:w-[688px]  py-[40px] px-[48px]  bg-white border border-gray-200 rounded-lg shadow">
                <p className="text-center lg:text-[24px] text-[16px] font-[700] text-[#1F3D94] leading-[24px]">
                  College Details
                </p>
                <form className="mt-10">
                  <div className="mt-5 flex flex-col sm:flex-row sm:space-x-4 ">
                    <div className="md:w-[280px] flex-1 ">
                      <label
                        htmlFor="name"
                        className="block lg:text-[14px]  font-[600] text-[#1F3D94] leading-[20px] "
                      >
                        Registration No.
                        <span className="text-[#FF3B3B] ml-2">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Registration No."
                        onChange={handleChange}
                        className="w-full mt-2 h-[48px] border-[1px] border-[#BFDAF9]  px-[20px] py-[14px] rounded text-[#1F3D94] text-[14px] font-[600]"
                        required
                      />
                    </div>
                    <div className="flex-1 md:w-[280px]">
                      <label
                        htmlFor="email"
                        className="block lg:text-[14px]  font-[600] text-[#1F3D94] leading-[20px]"
                      >
                        College Name
                        <span className="text-[#FF3B3B] ml-2">*</span>
                      </label>
                      <input
                        type="text"
                        id="fathername"
                        name="fathername"
                        placeholder="College Name"
                        onChange={handleChange}
                        className="w-full h-[48px] mt-2 border-[1px] border-[#BFDAF9] px-[20px] py-[14px] rounded text-[#1F3D94] text-[14px] font-[600]"
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
                        College Code
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="College Code"
                        onChange={handleChange}
                        className="w-full mt-2 h-[48px] border-[1px] border-[#BFDAF9]  px-[20px] py-[14px] rounded text-[#1F3D94] text-[14px] font-[600]"
                        required
                      />
                    </div>
                    <div className="flex-1 md:w-[280px]">
                      <label
                        htmlFor="email"
                        className="block lg:text-[14px]  font-[600] text-[#1F3D94] leading-[20px]"
                      >
                        Year LifeCycle
                        <span className="text-[#FF3B3B] ml-2">*</span>
                      </label>
                      <select
                        onChange={handleChange}
                        className="w-full h-[48px] mt-2 border-[1px] border-[#BFDAF9] px-[20px] py-[14px] rounded text-[#1F3D94] text-[14px] font-[600]"
                        required
                        id="fathername"
                        name="fathername"
                      >
                        <option disabled selected>Select One</option>
                        <option value="">May-July</option>
                        <option value="">July-August</option>
                        <option value="">August-September</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-col sm:flex-row sm:space-x-4 ">
                    <div className="md:w-[280px] flex-1 ">
                      <label
                        htmlFor="name"
                        className="block lg:text-[14px]  font-[600] text-[#1F3D94] leading-[20px] "
                      >
                        Zip/Postal Code
                        <span className="text-[#FF3B3B] ml-2">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter Zip/Postal Code"
                        onChange={handleChange}
                        className="w-full mt-2 h-[48px] border-[1px] border-[#BFDAF9]  px-[20px] py-[14px] rounded text-[#1F3D94] text-[14px] font-[600]"
                        required
                      />
                    </div>
                    <div className="flex-1 md:w-[280px]">
                      <label
                        htmlFor="email"
                        className="block lg:text-[14px]  font-[600] text-[#1F3D94] leading-[20px]"
                      >
                        City<span>*</span>
                      </label>
                      <input
                        type="text"
                        id="fathername"
                        name="fathername"
                        placeholder="Enter City"
                        onChange={handleChange}
                        className="w-full h-[48px] mt-2 border-[1px] border-[#BFDAF9] px-[20px] py-[14px] rounded text-[#1F3D94] text-[14px] font-[600]"
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
                        State<span className="text-[#FF3B3B] ml-2">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter State Name"
                        onChange={handleChange}
                        className="w-full mt-2 h-[48px] border-[1px] border-[#BFDAF9]  px-[20px] py-[14px] rounded text-[#1F3D94] text-[14px] font-[600]"
                        required
                      />
                    </div>
                    <div className="flex-1 md:w-[280px]">
                      <label
                        htmlFor="email"
                        className="block lg:text-[14px]  font-[600] text-[#1F3D94] leading-[20px]"
                      >
                        Country<span className="text-[#FF3B3B] ml-2">*</span>
                      </label>
                      <input
                        type="text"
                        id="fathername"
                        name="fathername"
                        placeholder="Enter Country"
                        onChange={handleChange}
                        className="w-full h-[48px] mt-2 border-[1px] border-[#BFDAF9] px-[20px] py-[14px] rounded text-[#1F3D94] text-[14px] font-[600]"
                        required
                      />
                    </div>
                  </div>

                  <div className=" flex justify-center w-full mt-10">
                    <button
                      onClick={handlenominee}
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
        )}
        {tabs == 2 && (
          <>
            <div className="flex justify-center lg:mt-10 px-[24px] ">
              <div className="md:w-[688px] md:h-[534px] py-[60px] px-[20px]  bg-white border border-gray-200 rounded-lg shadow">
                <p className="text-center lg:text-[24px] text-[16px] font-[700] text-[#1F3D94] leading-[24px]">
                  Your account has been created successfully.
                </p>
                <div className="flex justify-center my-[40px]">
                  {/* <Image
                    alt="img"
                    src={created}
                    className="mb-5"
                    width={248}
                    height={221}
                  /> */}
                </div>
                <div className="mt-5 flex justify-center ">
                  <button
                    onClick={handlecreated}
                    type="submit"
                    className="w-[340px] cursor-pointer text-white bg-[#2B84EA]  text-[16px] font-[600] leading-[24px] px-[20px] 2xl:py-[14px] py-[10px]  focus:outline-none  rounded-lg text-center"
                  >
                    Complete Your Profile
                  </button>
                </div>
                <p
                  onClick={() => {
                    router.push("/");
                  }}
                  className="cursor-pointer mt-5 text-center text-[16px] font-[600] text-[#2B84EA] leading-[24px]"
                >
                  Skip
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default DetailsVerification;
