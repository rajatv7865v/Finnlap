import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

interface PropTypes {
  HeaderComponent?: any;
  DetailsComponent?: any;
  active?: any;
  TableData?: any;
  isActive?: any;
  activeIndex?: any;
  onClick?: any;
}

export default function MobileAccordian({
  HeaderComponent,
  DetailsComponent,
  active,
  activeIndex,
  onClick,
}: PropTypes) {
  return (
    <>
      <div
        className={`flex justify-between ${
          active === activeIndex ? 'bg-darkBlue text-white' : ''
        } items-baseline px-5 py-4`}
      >
        <div>{HeaderComponent}</div>
        <div onClick={onClick}>
          {active === activeIndex ? (
            <FaAngleUp size='1rem' />
          ) : (
            <FaAngleDown size='1rem' />
          )}
        </div>
      </div>
      {/* <div className={active === idx ? "info active" : "info"}>
                {" "}
                Info {idx + 1}
              </div> */}
      {active === activeIndex && <div>{DetailsComponent}</div>}
    </>
  );
}
