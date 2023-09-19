import React from 'react';

export default function TableCommonButton(props: any) {
  const { buttonname, onClick, ProgramId, rounded, disabled } = props;

  return (
    <div
      className={`cursor-pointer bg-slate-200 rounded-full`}
      onClick={disabled ? null : onClick}
    >
      <p className='text-darkBlue text-center p-2'>{ProgramId}</p>
    </div>
  );
}
