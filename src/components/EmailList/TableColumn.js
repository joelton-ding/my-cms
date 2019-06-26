import React from 'react'
import { Popconfirm, Icon } from 'antd';

const TableColumn = () => {
  return (
    <tr>
      <td>alex.ong@gmail.com</td>
      <td>Alex Ong</td>
      <td>Singapore</td>
      <td>Email Address</td>
      <td>IT Manager</td>
      <td>Banking &amp; Finance</td>
      <td>
        <ul className="action-list">
          <li>
            <a href="#1"><Icon type="edit" /> Edit</a>
          </li>
          <li>
            <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
              <a href="#1"><Icon type="delete" /> Delete</a>
            </Popconfirm>
          </li>
        </ul>
      </td>
    </tr>
  )
}

export default TableColumn