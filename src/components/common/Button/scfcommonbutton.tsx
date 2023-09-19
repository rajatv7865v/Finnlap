import React from "react";

export default function Scfcommonbutton(props: any) {
  const {
    buttonname,
    onClick,
    rounded,
    disabled,
    nameClassname,
    wrapperClass,
  } = props;

  return (
    <div
      className={`cursor-pointer ${wrapperClass} ${
        rounded ? rounded : "rounded-lg"
      }`}
      style={{
        background: disabled ? "#C4C4C4" : "#2E77AE",
      }}
      onClick={disabled ? null : onClick}
    >
      <p
        className={`flex justify-center items-center ${nameClassname} text-white text-[12px] w-[214px] h-[40px] font-semibold`}
      >
        {buttonname}
      </p>
    </div>
  );
}
