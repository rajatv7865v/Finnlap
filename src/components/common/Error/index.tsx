import React from 'react';
interface ErrorPropTypes {
  children?: React.ReactChild | React.ReactChild[];
  className?: string;
}
export default function Error({ children, className }: ErrorPropTypes) {
  return (
    <div
      className={`text-red text-xs font-semibold my-2 
      ${className ? className : null}
      ${children ? null : 'opacity-0'}`}
    >
      {children ? <span>{children}</span> : 'Something went wrong'}
    </div>
  );
}
