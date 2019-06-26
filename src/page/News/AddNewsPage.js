import React from 'react';
import { Layout } from 'antd'
import LeftNav from '../../layout/LeftNav'
import MyHeader from '../../layout/MyHeader'
import Footer from '../../layout/Footer'
import AddNews from '../News/AddNews/AddNews'

const AddNewsPage = () => {
  return (
    <React.Fragment>
      <Layout>
        <LeftNav />
          <Layout>
            <MyHeader />
            <AddNews />
          </Layout>
        </Layout>
      <Footer />
    </React.Fragment>
  )
}

export default AddNewsPage