import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function TablePagination(){
    const [page,setPage] = useState(1);
    const [totalPage,setTotalPage] = useState(1);
    return(
        <div className='paginationcss mt-5 mb-12'>
          <div className='flex justify-end gap-x-12 bg-gray-100 p-3 rounded-lg'>
            <IoIosArrowBack
              size='1.5rem'
              color='243665'
              className='bg-sky-100 cursor-pointer rounded-sm '
            />
            <div className='flex items-center gap-x-8'>
              <p className='text-xs text-black font-bold'>PAGE</p>
              <p className='text-xs'>{page} of {totalPage}</p>
            </div>
            <IoIosArrowForward
              size='1.5rem'
              color='243665'
              className='bg-sky-100 cursor-pointer rounded-sm '
            />
          </div>
        </div>
    )
}