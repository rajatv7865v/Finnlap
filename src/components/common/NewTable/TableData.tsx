import React from 'react'
import styles from 'styles/Table.module.css'

export default function TableData({elements,className}:any) {
  return (
    <div className={`p-5 tableDataSize ${styles.tabledata} font-medium  ${className} text-center`}>
        {elements}
    </div>
  )
}
