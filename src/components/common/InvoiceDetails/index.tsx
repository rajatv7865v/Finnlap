import React, { useState, useEffect } from 'react';
import InvoiceElements from './InvoiceElements';
import { TiDocumentText } from 'react-icons/ti';
import Activites from './ActivitiesData.json';
import styles from 'styles/invoicedetails.module.css';
import DropDown from '../Dropdown';
import Datepicker from '../Datepicker';
import { PageLabel } from '../PageLabel';

const status = [
  {
    name: 'Financed',
    _id: '1',
  },
  {
    name: 'Vendor Finance',
    _id: 'Vendor Finance',
  },
];

export default function InvoiceDetails() {
  const [statusdata, setStatusdata] = useState('1');

  const [finance_date, setFinance_date] = useState(new Date());

  const [repayment_due_on, setRepayment_due_on] = useState(new Date());

  return (
    <>
      <PageLabel to='/invoices' title='AB20973479' />
      <div className='my-16 mx-8 md:mx-16'>
        <div className='flex flex-col'>
          <div className='flex bg-darkBlue headertopstyle items-center gap-x-4 py-4 px-0  '>
            <TiDocumentText size='2rem' color='white' className='ml-8' />
            <div>
              <h1 className='text-white tracking-wide  font-semibold'>
                AB20973479
              </h1>
              <p className='firstheadercolor text-sm'>Invoice Details</p>
            </div>
          </div>

          <div className='border-solid border-2 contentbottemstyle shadow-md border-white '>
            <div className='mb-8'>
              <div className='mt-12 mx-16 font-montserrat'>
                <div className='lg:grid grid-cols-3 gap-6 tracking-wide'>
                  <div className={`col-span-3 ${styles.Invoice_header}`}>
                    Customer Details
                  </div>

                  <div>
                    <InvoiceElements Header='Name' Value='Aman Mathur' />
                  </div>

                  <div>
                    <InvoiceElements Header='Email' Value='sample@gmail.com' />
                  </div>

                  <div>
                    <InvoiceElements Header='Phone' Value='91+ 9234567890' />
                  </div>

                  <div>
                    <InvoiceElements
                      Header='Anchor Name'
                      Value='APEX Technologies Pvt. Ltd.'
                    />
                  </div>

                  <div className='col-span-2 justify-self-start'>
                    <InvoiceElements
                      Header='Lender Name'
                      Value='APEX Credit Services Pvt. Ltd.'
                    />
                  </div>

                  <div className={`col-span-3 ${styles.Invoice_header}`}>
                    Invoice Details
                  </div>

                  <div>
                    <InvoiceElements
                      Header='Anchor'
                      Value='APEX Technologies Pvt. Ltd.'
                    />
                  </div>

                  <div>
                    <InvoiceElements Header='Issue Date' Value='90-01-2022' />
                  </div>

                  <div>
                    <InvoiceElements Header='Invoice' Value='INID121001' />
                  </div>

                  <div className='col-start-3'>
                    <InvoiceElements Header='Amount' Value='5,55,000' />
                  </div>

                  <div className='col-start-2'>
                    <InvoiceElements Header='Due Amount' Value='5,55,000' />
                  </div>

                  <div>
                    <InvoiceElements
                      Header='Invoice Due Date'
                      Value='07-04-2022'
                    />
                  </div>

                  <div>
                    <InvoiceElements
                      Header='Financed Date'
                      Value='07-01-2022'
                    />
                  </div>

                  <div>
                    <InvoiceElements Header='Tenure' Value='60 days' />
                  </div>

                  <div>
                    <InvoiceElements Header='Grace Period' Value='30 days' />
                  </div>

                  <div className='col-span-3'>
                    <div className='flex flex-col text-xs'>
                      <div className={`${styles.Invoice_Elements_Header}`}>
                        Activity Notes
                      </div>
                      <div className='my-4 font-medium flex flex-col'>
                        {Activites.map((el: any, index: any) => {
                          return (
                            <div
                              className={`${styles.Invoice_Elements_Value}`}
                              key={index}
                            >
                              {el.activity_date} | {el.activity_time}{' '}
                              {el.activity_note}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className={`pt-4 col-span-3 ${styles.Invoice_header}`}>
                      More Info
                    </div>
                  </div>

                  <div style={{ maxWidth: '70%' }}>
                    <DropDown
                      labelText='Status'
                      dropdownList={status}
                      onChange={(name, value) => setStatusdata(value)}
                      name='status'
                      selected={statusdata}
                      placeholder=''
                      // error={error.unit}
                    />
                  </div>

                  <div>
                    <Datepicker
                      labelText='Finance Date'
                      placeholder='Select Date'
                      width={'w-64'}
                      selected={finance_date}
                      onChange={(date: any) => setFinance_date(date)}
                    />
                  </div>

                  <div>
                    <Datepicker
                      labelText='Repayment Due On'
                      placeholder='Select Date'
                      width={'w-64'}
                      selected={repayment_due_on}
                      onChange={(date: any) => setRepayment_due_on(date)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .topborder {
          border-top-style: none;
        }

        .headertopstyle {
          border: 1px solid;
          border-top-right-radius: 1rem;
          border-top-left-radius: 1rem;
        }

        .contentbottemstyle {
          border-bottom-left-radius: 1rem;
          border-bottom-right-radius: 1rem;
        }

        .entitykeyname {
          font-size: 12px;
          color: #2f2f2f;
        }

        .firstheadercolor {
          color: #c4c4c4;
        }
      `}</style>
    </>
  );
}
