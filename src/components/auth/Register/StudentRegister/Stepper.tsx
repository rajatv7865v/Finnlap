import React, { useState } from "react";
import { LiaGreaterThanSolid } from "react-icons/lia";
import greaterIcon from "src/assets/Icon/arrow.svg";
import Steps from "../Steps";
import { BsCheckLg } from "react-icons/bs";
import forwardWhite from "src/assets/logos/forwardWhite.svg";
import Image from "next/image";

const Steper = ({
  active1 = false,
  verify1 = false,
  active2 = false,
  verify2 = false,
  active3 = false,
  verify3 = false,
}: any) => {
  return (
    <div className="flex justify-evenly items-center px-24 ">
      <Steps
        icons={<BsCheckLg />}
        title="Step"
        subtitle="Verify Mobile Number"
        verify={verify1}
        active={active1}
        counter="1"
      />
      <Image
        alt="PAN"
        src={forwardWhite}
        width={12}
        height={16}
        objectFit="cover"
      />

      <Steps
        icons={<BsCheckLg />}
        title="Step"
        subtitle="Verify Detail"
        verify={verify2}
        active={active2}
        counter="2"
      />
      <Image
        alt="PAN"
        src={forwardWhite}
        width={12}
        height={16}
        objectFit="cover"
      />

      <Steps
        icons={<BsCheckLg />}
        title="Step"
        subtitle="KYC Verify"
        verify={verify3}
        active={active3}
        counter="3"
      />
    </div>
  );
};

export default Steper;
