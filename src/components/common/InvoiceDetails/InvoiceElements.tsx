import React from 'react'
import styles from 'styles/invoicedetails.module.css';

export default function InvoiceElements(props:any) {  

  const {Header,Value} = props

  return (
    <div className='flex flex-col text-xs'>
        <div className={`${styles.Invoice_Elements_Header}`}>{Header}</div>
        <div className={`my-4 ${styles.Invoice_Elements_Value}`}>{Value}</div>
    </div>
  )
}
