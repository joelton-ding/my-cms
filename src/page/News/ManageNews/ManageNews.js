import React from 'react'
import { Button } from 'antd'
import TableColumn from '../../../components/ManageNews/TableColumn'
import PaginationNumber from '../../../components/ManageNews/PaginationNumber'

const ManageNews = () => {
  return (
    <div className="content">
      <h1>Manage News <Button type="primary"><a href="/add-news">Add New</a></Button></h1>
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Title</th>
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

export default ManageNews