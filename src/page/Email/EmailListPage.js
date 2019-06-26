import React from 'react'
import { Layout } from 'antd'
import LeftNav from '../../layout/LeftNav'
import MyHeader from '../../layout/MyHeader'
import Footer from '../../layout/Footer'
import EmailList from '../Email/EmailList/EmailList'

const EmailListPage = () => {
  return (
    <React.Fragment>
      <Layout>
        <LeftNav />
          <Layout>
            <MyHeader />
            <EmailList />
          </Layout>
        </Layout>
      <Footer />
    </React.Fragment>
  )
}

export default EmailListPage;
