/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Error from "../Error";
import { FaChevronDown } from "react-icons/fa";

interface IDropDown {
  labelText?: string;
  labelTextStyle?: string;
  id?: string;
  downIconCss?: string;
  required?: boolean;
  fullWidth?: boolean;
  width?: string;
  addOthers?: (name: string) => {} | void;
  className?: string;
  wrapperClass?: string;
  error?: string;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => {} | void;
  placeholder?: string;
  dropdownList?: Array<any>;
  selected?: string | boolean | number;
  onChange: (el: string, name: string) => {} | void;
  name: string;
}
export default function DropDown(props: IDropDown) {
  const [isClicked, setIsClicked] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [displayOthersInput, setDisplayOthersInput] = useState<boolean>(false);
  const {
    labelText,
    labelTextStyle,
    required,
    id,
    fullWidth,
    addOthers,
    downIconCss,
    className,
    error,
    wrapperClass,
    placeholder,
    width,
    dropdownList = [
      {
        _id: new Date().getMilliseconds(),
        label: "",
      },
    ],
    selected,
    onChange,
    name,
  } = props;
  const boxClicked = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <div className={`${wrapperClass} relative`}>
        {labelText ? (
          <label
            htmlFor={id}
            className={`text-sm font-medium ${labelTextStyle}`}
          >
            {labelText} {required && <span className="text-red">*</span>}
          </label>
        ) : null}
        <div
          id="value-box"
          onClick={boxClicked}
          className={`
                pr-24 pl-4 py-2 relative 
                bg-white 
                text-sm  
                rounded-lg
                border border-outlineGray 
                mt-1
                h-10
                flex
                items-center
                ${width}
                ${fullWidth && "w-full"} 
                ${className}
                ${error ? "border-red" : null}
                ${isClicked ? "rounded-b-none" : null}`}
        >
          <FaChevronDown
            className={`absolute right-3 ${downIconCss} top-2.5 transition  ease-in-out ${
              isClicked ? "-rotate-180" : "rotate-0"
            }`}
          />
          {selected ? (
            dropdownList?.find((el) => el._id === selected)?.name
          ) : (
            <p className="text-xs placeholderstyle">{placeholder}</p>
          )}
          {isClicked && (
            <div
              id="dropdown-list"
              className={`rounded-xl border border-outlineGray
                         rounded-t-none absolute ${width}
                        bg-white z-10 transition-all max-h-32
                        cursor-pointer no-scrollbar  overflow-y-scroll w-full left-0 top-full`}
            >
              {dropdownList?.map((dropdownObj, index: number) => {
                return (
                  <div key={dropdownObj?._id}>
                    {dropdownObj?.name != selected && (
                      <div
                        className={`px-4 py-2 text-sm border-b text-${dropdownObj.color} 
                                  border-outlineGray last:border-0`}
                        onClick={() => {
                          onChange(name, dropdownObj?._id);
                          setDisplayOthersInput(false);
                          setIsClicked(false);
                        }}
                      >
                        {dropdownObj?.name}
                      </div>
                    )}
                  </div>
                );
              })}
              {addOthers && (
                <div
                  onClick={() => {
                    setDisplayOthersInput(true);
                  }}
                  className="bottom-0 px-4 py-2 text-sm 
                border-b border-outlineGray 
                bg-white last:border-0 grid grid-cols-3"
                >
                  <div>Others</div>
                  {displayOthersInput && (
                    <div className="col-span-2 flex">
                      <input
                        autoFocus
                        value={inputValue}
                        className="bg-gray-200 rounded-none px-2 focus:shadow outline-none focus:outline-none w-full"
                        onChange={(e) => setInputValue(e.target.value)}
                        name="name"
                      />
                      <div
                        className="ml-1"
                        onClick={() => {
                          inputValue &&
                            (addOthers(inputValue), setInputValue(""));
                        }}
                      >
                        &#9989;
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
        {error && <Error>{error}</Error>}
      </div>
      <style jsx>{`
        .topicon {
          top: 1px !important;
        }
        .placeholderstyle {
          color: #c4c4c4;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}
