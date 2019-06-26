import React from 'react'
import { DatePicker, Select, Input, Upload, message, Button, Icon  } from 'antd'

const Option = Select.Option
const { TextArea } = Input
//Date
function onChange(date, dateString) {
  console.log(date, dateString);
}
//Select
function handleChange(value) {
  console.log(`selected ${value}`);
}
//Upload
const props = {
  name: 'file',
  action: '//jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const FillNews = () => {
  return (
    <div>
      <table className="table-add-news">
        <tbody>
        <tr>
            <td>Categories:</td>
            <td>
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select Categories"
                optionFilterProp="children"
                onChange={handleChange}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                <Option value="Announcement">Announcement</Option>
                <Option value="Press Releases">Press Releases</Option>
              </Select>
            </td>
          </tr>
          <tr>
            <td>Date:</td>
            <td><DatePicker onChange={onChange} /></td>
          </tr>
          <tr>
            <td>Title:</td>
            <td><TextArea rows={4} /></td>
          </tr>
          <tr>
          <td>File upload:</td>
            <td>
              <Upload {...props}>
                <Button>
                  <Icon type="upload" /> Click to Upload
                </Button>
              </Upload>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
          <td>&nbsp;</td>
            <td>
              <Button type="primary">
                Save
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default FillNews