import { useState } from 'react';
import SortIcon from 'src/components/icons/SortIcon';
import Button from '../Button';
import styles from 'styles/Home.module.css';
import { CloseIcon } from 'src/components/icons/CloseIcon';

export function SortButton() {
  const [isButtonActive, setIsButtonActive] = useState<boolean>(false);
  const toggleSortPopUp = () => {
    setIsButtonActive(!isButtonActive);
  };
  return (
    <div className='py-4 lg:w-2/4'>
      <div className='flex justify-end items-center py-1 relative'>
        <p className='text-darkBlue text-sm font-semibold lg:block mr-4 hidden'>
          Sort By
        </p>
        <Button
          onClick={toggleSortPopUp}
          className='2xl:px-2 h-8 w-8 rounded'
          color='darkBlue'
        >
          <SortIcon />
        </Button>
        {isButtonActive && (
          <div
            className={`${styles.shadowonbox} bg-white rounded-b-lg rounded-tl-lg absolute top-full w-48 right-0 px-3 py-4`}
          >
            <div className='flex justify-between items-center mt-1 mb-4'>
              <p className='font-semibold text-darkBlue text-lg'>Sort By</p>
              <Button onClick={toggleSortPopUp}>
                <CloseIcon />
              </Button>
            </div>
            <hr />
            <div className='mt-4'>
              <p className='font-bold'>Due Date</p>
              <div className='my-2 flex flex-col justify-between'>
                <p className='my-2'>Oldest to Newest</p>
                <p>Newest to Oldest</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
