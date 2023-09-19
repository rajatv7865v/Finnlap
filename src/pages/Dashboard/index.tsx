import React from 'react'
import Layout from '@/components/layout'
import Dashboard from '@/components/school/Dashboard'

const index = () => {
  return (
    <div>
      <Layout component={<Dashboard/>}/>
    </div>
  )
}

export default index
