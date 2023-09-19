interface PropTypes {
  KeyName?: string;
  Wing?: string;
  Road?: string;
  Lane?: string;
  Pincode?: string;
  Place?: string;
  City?: string;
}

export default function ProgramsCommonAddress(props: PropTypes) {
  const { KeyName, Wing, Road, Lane, Pincode, Place, City } = props;
  return (
    <div className='grid grid-cols-3'>
      <div className='col-span-2 ml-8'>
        <h3 className='text-lightDark text-xs font-semibold'>{KeyName}</h3>
      </div>
      <div className='col-span-1'>
        <p className='text-lightDark text-xs'>{Wing}</p>
        <p className='text-lightDark text-xs'>{Lane}</p>
        <p className='text-lightDark text-xs'>{Road}</p>
        <p className='text-lightDark text-xs'>{Pincode}</p>
        <p className='text-lightDark text-xs'>{Place}</p>
        <p className='text-lightDark text-xs'>{City}</p>
      </div>
    </div>
  );
}
