import React from 'react';
import { Layout } from 'antd'
import LeftNav from '../../layout/LeftNav'
import MyHeader from '../../layout/MyHeader'
import Footer from '../../layout/Footer'
import ManageNews from './ManageNews/ManageNews'

const ManageNewsPage = () => {
  return (
    <React.Fragment>
      <Layout>
        <LeftNav />
          <Layout>
            <MyHeader />
            <ManageNews />
          </Layout>
        </Layout>
      <Footer />
    </React.Fragment>
  )
}

export default ManageNewsPage;