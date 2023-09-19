import React from "react";
import Image from "next/image";
import finnlapLogo from "src/assets/logos/finnlap.svg";
import {
  RxDashboard,
  PiStudent,
  GrTransaction,
  BiUserCircle,
  BiLogOutCircle,
  IoSettingsOutline,
  BiSolidInstitution,
  TbFileReport
} from "../../../assets/icons";

const index = () => {
  return (
    <div className="bg-[#0089ED]  h-screen ">
      <div className="pr-[6px] pt-[16px] pb-[60px]">
        <Image alt="logo" src={finnlapLogo} width={240} height={160} />
      </div>
      <div className="flex flex-col justify-between items-center">
        <div>
          <ul className="flex flex-col justify-between  items-center gap-[16px] text-white text-[16px] font-[500] ">
            <li className="flex items-center gap-3 text-right">
              <span>
                <RxDashboard />
              </span>
              <span>Dashboard</span>
            </li>
            <li className="flex items-center gap-3 text-right">
              <span>
                <PiStudent />
              </span>
              <span>Students</span>
            </li>
            <li className="flex items-center gap-3">
              <span>
                <GrTransaction />
              </span>
              <span>Transaction</span>
            </li>
            <li className="flex items-center gap-3">
              <span>
                <TbFileReport />
              </span>
              <span>Report</span>
            </li>
            <li className="flex items-center gap-3">
              <span>
                <BiSolidInstitution />
              </span>
              <span>Institution</span>
            </li>
            <li className="flex items-center gap-3">
              <span>
                <BiUserCircle />
              </span>
              <span>Profile</span>
            </li>
            <li className="flex items-center gap-3">
              <span>
                <IoSettingsOutline />
              </span>
              <span>Settings</span>
            </li>
            <li className="flex items-center gap-3">
              <span>
                <BiLogOutCircle />
              </span>
              <span>Logout</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default index;
