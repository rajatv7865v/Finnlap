interface PropTypes {
  KeyName?: string;
  AccountHolderName?: string;
  AccountNumber?: string;
  IfscCode?: string;
  BankAddress?: string;
}

export default function ProgramsCommonGrid(props: PropTypes) {
  const { KeyName, AccountHolderName, AccountNumber, IfscCode, BankAddress } =
    props;
  return (
    <div className='grid grid-cols-5 ml-8'>
      <div className='grid col-span-5'>
        <h3 className='text-lightDark text-xs font-semibold'>{KeyName}</h3>
      </div>

      <div className='grid  col-span-5  grid-cols-7 border border-indigo-600 rounded p-4'>
        <p className='col-span-3'>Account Holder’s Name :</p>
        <p className='col-span-4'>{AccountHolderName}</p>
        <p className='col-span-3'>Account Number :</p>
        <p className='col-span-4'>{AccountNumber}</p>
        <p className='col-span-3'>IFSC Code :</p>
        <p className='col-span-4'>{IfscCode}</p>
        <p className='col-span-3'>Bank Branch Address :</p>
        <p className='col-span-4'>{BankAddress}</p>
      </div>
    </div>
  );
}
