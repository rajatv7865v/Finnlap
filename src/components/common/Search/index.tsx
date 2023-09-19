import { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import Button from '../Button';
import Input from '../Input';
interface PropTypes {
  wrapperClass?: string;
}
export default function SearchIcon({ wrapperClass }: PropTypes) {
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);
  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };
  return (
    <>
      {isSearchActive ? (
        <div>
          <label className='flex bg-white items-center px-3 py-2 rounded-2xl'>
            <IoIosSearch color='#C4C4C4' size='1.5rem' className='' />
            <input
              placeholder='Search'
              className='border-0 m-0 p-0 mt-0 ml-2 outline-none'
              value=''
            />
          </label>
        </div>
      ) : (
        <Button
          onClick={toggleSearch}
          className='flex items-center rounded-full bg-white p-0'
        >
          <IoIosSearch color='#C4C4C4' size='1.5rem' className='' />
        </Button>
      )}
    </>
  );
}
