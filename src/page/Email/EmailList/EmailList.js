import React from 'react'
import { Button } from 'antd'
import TableColumn from '../../../components/EmailList/TableColumn'
import PaginationNumber from '../../../components/EmailList/PaginationNumber'

const EmailList = () => {
  return (
    <div className="content">
      <h1>Email List <Button type="primary"><a href="/add-email">Add Email</a></Button></h1>
      <table className="table">
        <thead>
          <tr>
            <th>Email Address</th>
            <th>Full Name</th>
            <th>Country</th>
            <th>Profession</th>
            <th>Job Position</th>
            <th>Industry</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <TableColumn />
        </tbody>
      </table>
      <div className="pagination-container">
        <PaginationNumber />
      </div>
    </div>
  )
}

export default EmailList;