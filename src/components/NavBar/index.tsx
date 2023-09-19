import React, { useState } from "react";
import {
  CiSearch,
  BsBell,
  BiUserCircle,
  AiOutlineCaretDown,
  BiLogOutCircle,
  FiHelpCircle,
  IoSettingsOutline,
  FiEdit,
} from "../../assets/icons";

const index = () => {
  const [userDropdown, setUserDropdown] = useState(false);
  return (
    <div className=" h-[70px] bg-[#0089ED] flex justify-between px-[60px] items-center">
      <div className=" w-[492px] h-[44px] rounded-[70px] flex relative">
        <input
          type="text"
          placeholder="Search something here"
          className="w-full h-full rounded-[70px] focus:outline-none  px-10"
        />
        <span className="absolute  top-3 left-3">
          <CiSearch size={20} />
        </span>
      </div>
      <div className="flex justify-between gap-[60px] text-white ">
        <div>
          <div className="border-[1px] h-[40px] w-[40px] rounded-[50%] flex items-center justify-center cursor-pointer">
            <BsBell size={20} />
          </div>
        </div>
        <div className="  ">
          <div className="border-[1px] h-[40px] w-[40px] rounded-[50%] flex  justify-center  cursor-pointer">
            <span className="font-bold text-[24px] text-grey-500">S</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
