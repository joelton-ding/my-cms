import React from 'react';
import {Row, Col} from 'antd'
import DashboardEmail from '../../../components/Dashboard/DashboardEmail'
import DashboardNews from '../../../components/Dashboard/DashboardNews'

const Dashboard = () => {
  return (
    <div className="content">
      <Row gutter={32} type="flex" className="dashboard-content-top">
        <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 12 }}>
          <DashboardEmail />
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 12 }}>
          <DashboardNews />
        </Col>
      </Row>
    </div >
  )
}

export default Dashboard
