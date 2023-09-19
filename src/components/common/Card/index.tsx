import React from 'react';
import { IoMdListBox } from 'react-icons/io';

interface ICard {
  headerText?: string;
  // eslint-disable-next-line no-unused-vars
  children?: React.ReactChild | React.ReactChild[];
  height?: string;
}

const Card = ({ children, headerText, height }: ICard) => {
  return (
    <div className={`shadow-lg h-${height} relative w-full md:w-auto`}>
      {headerText && (
        <div className='bg-darkBlue border border-darkBlue rounded-t-xl'>
          <div className='flex p-4 gap-x-4'>
            <IoMdListBox size='1.5rem' color='#fff' />
            <p className='text-white'>{headerText}</p>
          </div>
        </div>
      )}
      <div className='md:p-16 relative py-8 w-full md:w-auto'>{children}</div>
    </div>
  );
};
export default Card;
