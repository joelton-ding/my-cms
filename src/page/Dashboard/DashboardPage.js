import React from 'react'
import { Layout } from 'antd'
import LeftNav from '../../layout/LeftNav'
import MyHeader from '../../layout/MyHeader'
import Footer from '../../layout/Footer'
import Dashboard from './Dashboard/Dashboard'

const DashboardPage = () => {
  return (
    <React.Fragment>
      <Layout>
        <LeftNav />
        <Layout>
          <MyHeader />
          <Dashboard />
        </Layout>
      </Layout>
      <Footer />
    </React.Fragment>
  )
}

export default DashboardPage
