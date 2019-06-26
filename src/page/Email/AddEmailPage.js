import React from 'react';
import { Layout } from 'antd'
import LeftNav from '../../layout/LeftNav'
import MyHeader from '../../layout/MyHeader'
import Footer from '../../layout/Footer'
import AddEmail from '../Email/AddEmail/AddEmail'

const AddEmailPage = () => {
  return (
    <React.Fragment>
      <Layout>
        <LeftNav />
          <Layout>
            <MyHeader />
            <AddEmail />
          </Layout>
        </Layout>
      <Footer />
    </React.Fragment>
  )
}

export default AddEmailPage