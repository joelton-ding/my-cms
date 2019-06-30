import React from 'react'
import { Popconfirm, Icon } from 'antd';

const TableColumn = () => {
  return (
    <tr>
      <td>26 Jun 2019 <span className="time">08:48 AM</span></td>
      <td><a href="#1">Application for delisting and waivers from Rules 1307 and 1309 of the Listing Manual</a></td>
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
          <li>
            <Popconfirm title="Do Email To Subscribe?" okText="Yes" cancelText="No">
              <a href="#1"><Icon type="inbox" />Do Email Blast</a>
            </Popconfirm>
          </li>
        </ul>
      </td>
    </tr>
  )
}

export default TableColumn