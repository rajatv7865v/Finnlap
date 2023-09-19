interface PropTypes {
  KeyName?: string;
  UserEmail?: string;
  StatusValue?: string;
  StatusValueStyle?: string;
}

export default function ProgramsCommonGrid(props: PropTypes) {
  const { KeyName, UserEmail, StatusValue, StatusValueStyle } = props;
  return (
    <div className='grid grid-cols-5 ml-8'>
      <div className='grid col-span-5'>
        <h3 className='text-lightDark text-xs font-semibold'>{KeyName}</h3>
      </div>
      <div className='flex flex-col col-span-5 border border-indigo-600 rounded p-4'>
        <p>{UserEmail}</p>
        <div className='flex'>
          <p>Status</p>
          <p className={`${StatusValueStyle} text-lightDark`}>
            {StatusValue || 'N/A'}
          </p>
        </div>
      </div>
    </div>
  );
}
