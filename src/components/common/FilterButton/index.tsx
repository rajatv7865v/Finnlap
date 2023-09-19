import { useState } from 'react';
import { CloseIcon } from 'src/components/icons/CloseIcon';
import { FilterIcon } from 'src/components/icons/FilterIcon';
import Button from '../Button';
import DropDown from '../Dropdown';

export function FilterButton() {
  const [isButtonActive, setIsButtonActive] = useState<boolean>(false);
  const toggleSortPopUp = () => {
    setIsButtonActive(!isButtonActive);
  };
  const testConst = [
    {
      _id: 'test',
      name: 'test',
    },
  ];
  return (
    <div className='py-4 lg:w-2/4'>
      <div className='lg:flex justify-end py-1 items-center relative'>
        <div>
          <div className='flex items-center lg:justify-end'>
            <p className='text-darkBlue text-sm font-semibold mr-4 lg:block hidden'>
              Filter By
            </p>
            <div className='flex items-center'>
              <Button
                onClick={toggleSortPopUp}
                className='2xl:px-2 h-8 w-8 rounded'
                color='darkBlue'
              >
                <FilterIcon />
              </Button>
              {isButtonActive && (
                <Button
                  className='lg:absolute bg-white left-full ml-2'
                  onClick={toggleSortPopUp}
                >
                  <CloseIcon />
                </Button>
              )}
            </div>
          </div>
          {isButtonActive && (
            <>
              <div
                className={`mt-5 lg:mt-0 rounded-b-lg rounded-tl-lg top-full left-0 lg:left-auto lg:right-0 px-3 py-4`}
              >
                <div className='flex justify-between items-center max-h-full mt-1 mb-4'>
                  <DropDown
                    placeholder='Select Uploader'
                    wrapperClass='lg:flex items-center'
                    className='lg:w-52 ml-14'
                    selected=''
                    onChange={() => {}}
                    name='uploader'
                    labelText='Uploader:'
                    dropdownList={testConst}
                  />
                  <div className='ml-4'>
                    <DropDown
                      placeholder='Select Status'
                      wrapperClass='lg:flex items-center'
                      className='lg:w-52 ml-14'
                      selected=''
                      onChange={() => {}}
                      name='status'
                      labelText='Status:'
                      dropdownList={testConst}
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
