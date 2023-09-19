import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Loader from "/src/assets/logos/loader.svg";
// import created from "/src/assets/icon/created.svg";
import Steper from "./Stepper";

const DetailVerify = () => {
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

  const handleSubmit = () => {
    // e.preventDefault();
    // // Handle form submission here (e.g., sending data to the server)
    // console.log(formData);
  };
  // useEffect(() => {
  //   setTimeout(() => {
  //     setTabs(2);
  //   }, 4000);
  // }, []);
  const emailsubmit = () => {
    setTabs(2);
  };

  const handleNo = () => {
    setTabs(6);
  };

  const handlenominee = () => {
    setTabs(3);
    useEffect(() => {
      setTimeout(() => {
        router.push("/Register/Student/KycVerification");
      }, 4000);
    }, []);
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
            <div className="flex justify-center lg:mt-10 px-[24px]">
              <div className=" px-[48px] py-[40px]  md:w-[688px] md:h-[488px]  bg-white border border-gray-200 rounded-lg shadow">
                <p className="text-center lg:text-[24px] text-[16px] font-[700] text-[#1F3D94] leading-[24px]">
                  College Details
                </p>
                <form onSubmit={handleSubmit} className="mt-5">
                  <div className="flex flex-col sm:flex-row sm:space-x-4 ">
                    <div className="md:w-[280px] flex-1 ">
                      <label
                        htmlFor="name"
                        className="block lg:text-[14px]  font-[600] text-[#1F3D94] leading-[20px] "
                      >
                        Admission No.
                        <span className="text-[#FF3B3B] ml-2">*</span>
                      </label>
                      <input
                        type="text"
                        id="admission_No"
                        name="admission_No"
                        placeholder="Admission No."
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full mt-2 h-[48px] border-[1px] border-[#BFDAF9] bg-[#EAF3FD] px-[20px] py-[14px] rounded text-[#1F3D94] text-[14px] font-[600]"
                        required
                      />
                    </div>
                    <div className="flex-1 md:w-[280px]">
                      <label
                        htmlFor="email"
                        className="block lg:text-[14px]  font-[600] text-[#1F3D94] leading-[20px]"
                      >
                        Admission Year
                        <span className="text-[#FF3B3B] ml-2">*</span>
                      </label>
                      <input
                        type="text"
                        id="fathername"
                        name="fathername"
                        value={formData.fname}
                        onChange={handleChange}
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
                        State<span className="text-[#FF3B3B] ml-2">*</span>
                      </label>
                      <input
                        type="date"
                        id="name"
                        name="name"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full mt-2 h-[48px] border-[1px] border-[#BFDAF9] bg-[#EAF3FD] px-[20px] py-[14px] rounded text-[#1F3D94] text-[14px] font-[600] appearance-none"
                        required
                      />
                    </div>
                    <div className="md:w-[280px] flex-1 ">
                      <label
                        htmlFor="name"
                        className="block lg:text-[14px]  font-[600] text-[#1F3D94] leading-[20px] "
                      >
                        City<span className="text-[#FF3B3B] ml-2">*</span>
                      </label>
                      <input
                        type="date"
                        id="name"
                        name="name"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full mt-2 h-[48px] border-[1px] border-[#BFDAF9] bg-[#EAF3FD] px-[20px] py-[14px] rounded text-[#1F3D94] text-[14px] font-[600] appearance-none"
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
                        College<span className="text-[#FF3B3B] ml-2">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full mt-2 h-[48px] border-[1px] border-[#BFDAF9] px-[20px] py-[14px] rounded text-[#1F3D94] text-[14px] font-[600]"
                        required
                      />
                    </div>
                    <div className="md:w-[280px] flex-1 "></div>
                  </div>

                  <div className=" flex justify-center w-full mt-5">
                    <button
                      onClick={emailsubmit}
                      type="submit"
                      className="2xl:w-[360px] 2xl:h-[48px]  h-[40px] text-center w-full cursor-pointer text-white bg-[#2B84EA]  text-[16px] font-[600] leading-[24px] px-[20px] 2xl:py-[14px] py-[10px]  focus:outline-none  rounded-lg "
                    >
                      Verify Details
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
              <div className="md:w-[688px]  py-[40px] px-[48px]  bg-white border border-gray-200 rounded-lg shadow">
                <p className="text-center lg:text-[24px] text-[16px] font-[700] text-[#1F3D94] leading-[24px]">
                  Student Details
                </p>
                <form className="mt-10">
                  <div className="mt-5 flex flex-col sm:flex-row sm:space-x-4 ">
                    <div className="md:w-[280px] flex-1 ">
                      <label
                        htmlFor="name"
                        className="block lg:text-[14px]  font-[600] text-[#1F3D94] leading-[20px] "
                      >
                        First Name<span className="text-[#FF3B3B] ml-2">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter First Name"
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
                        Middle Name
                        <span className="text-[#FF3B3B] ml-2">*</span>
                      </label>
                      <input
                        type="text"
                        id="fathername"
                        name="fathername"
                        placeholder="Enter Middle Name"
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
                        Last Name<span className="text-[#FF3B3B] ml-2">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter Last Name"
                        onChange={handleChange}
                        className="w-full mt-2 h-[48px] border-[1px] border-[#BFDAF9]  px-[20px] py-[14px] rounded text-[#1F3D94] text-[14px] font-[600]"
                        required
                      />
                    </div>
                    <div className="md:w-[280px] flex-1 ">
                      <label
                        htmlFor="name"
                        className="block lg:text-[14px]  font-[600] text-[#1F3D94] leading-[20px] "
                      >
                        Date Of Birth
                        <span className="text-[#FF3B3B] ml-2">*</span>
                      </label>
                      <input
                        type="date"
                        id="name"
                        name="name"
                        placeholder="Enter DOB"
                        onChange={handleChange}
                        className="w-full mt-2 h-[48px] border-[1px] border-[#BFDAF9]  px-[20px] py-[14px] rounded text-[#1F3D94] text-[14px] font-[600] appearance-none"
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
                        Address Line 1
                        <span className="text-[#FF3B3B] ml-2">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter Address 1"
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
                        Address Line 2
                        <span className="text-[#FF3B3B] ml-2">*</span>
                      </label>
                      <input
                        type="text"
                        id="fathername"
                        name="fathername"
                        placeholder="Enter Address 2"
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
                  <div className="mt-5 flex flex-col sm:flex-row sm:space-x-4 ">
                    <div className="md:w-[280px] flex-1 ">
                      <label
                        htmlFor="name"
                        className="block lg:text-[14px]  font-[600] text-[#1F3D94] leading-[20px] "
                      >
                        Nominee PAN Number
                        <span className="text-[#FF3B3B] ml-2">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter Nominee PAN Number"
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
                        Relationship With Investor
                        <span className="text-[#FF3B3B] ml-2">*</span>
                      </label>
                      <input
                        type="text"
                        id="fathername"
                        name="fathername"
                        placeholder="Enter Relationship With Investor"
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

        {tabs == 3 && (
          <>
            <div className="flex justify-center mt-10 px-[24px]">
              <div className=" px-[59px] py-[154px]  md:w-[560px] md:h-[440px]  bg-white border border-gray-200 rounded-lg shadow">
                <div className="flex justify-center">
                  <Image
                    alt="img"
                    className="text-center"
                    src={Loader}
                    width={60}
                    height={60}
                  />
                </div>
                <p className="text-center text-[#1F3D94]  text-base font-[600] leading-6 mt-6">
                  Please wait while we work on fetching personal details from
                  the given Details.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default DetailVerify;
