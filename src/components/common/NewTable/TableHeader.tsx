import React from 'react';
import styles from 'styles/Table.module.css';

export default function TableHeader({ headername, className }: any) {
  return (
    <div
      className={`p-4 py-5 ${styles.tableheaders} text-center ${className} border-white`}
    >
      {headername}
    </div>
  );
}
