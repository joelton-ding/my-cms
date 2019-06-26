import React from 'react'
import { observer } from 'mobx-react'
import { Select, Input, Button } from 'antd'
import EmailListStore from '../../store/EmailListStore'

const Option = Select.Option
//Select
function handleChange(value) {
  console.log(`selected ${value}`);
}

const FillEmail = () => {
  let { state: { professionData }, actions: {}} = EmailListStore
  console.log('EmailListStore >>>>>', JSON.parse(JSON.stringify(EmailListStore)))
  console.log('professionData >>>>>', JSON.parse(JSON.stringify(professionData)))
  let jsxOption = null
  if(professionData && professionData.length>0){
    jsxOption = professionData.map((item, index) => {
      return(
        <Option key={index}>{item.label}</Option>
      )
    })
  }

  return (
    <div>
      <table className="table-add-email">
        <tbody>
        <tr>
            <td>Email Address:</td>
            <td>
              <Input placeholder="Example: abc@gmail.com" />
            </td>
          </tr>
          <tr>
            <td>Country:</td>
            <td>
              <Select
                showSearch
                style={{ width: '100%' }}
                placeholder="Select Country"
                optionFilterProp="children"
                onChange={handleChange}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                <Option value="Singapore">Singapore</Option>
                <Option value="Malaysia">Malaysia</Option>
              </Select>  
            </td>
          </tr>
          <tr>
            <td>Profession:</td>
            <td>
              <Select
                showSearch
                style={{ width: '100%' }}
                placeholder="Select Profession"
                optionFilterProp="children"
                onChange={handleChange}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
          
              {/* {professionData.map((item, index) => {
                return(
                  <Option key={index}>{item.label}</Option>
                )
              })} */}

              { jsxOption }
            

              </Select>  
            </td>
          </tr>
          <tr>
          <td>Job Position:</td>
            <td>
              <Select
                showSearch
                style={{ width: '100%' }}
                placeholder="Select Profession"
                optionFilterProp="children"
                onChange={handleChange}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                <Option value="Executive">Executive</Option>
                <Option value="Non-Executive">Non-Executive</Option>
                <Option value="Entrepreneur">Entrepreneur</Option>
                <Option value="Senior Management">Senior Management</Option>
                <Option value="CEO/COO">CEO/COO</Option>
                <Option value="CFO/CTO/CMO">CFO/CTO/CMO</Option>
                <Option value="Director/VP">Director/VP</Option>
                <Option value="Manager">Manager</Option>
                <Option value="Others">Others</Option>
              </Select> 
            </td>
          </tr>
          <tr>
            <td>Industry:</td>
            <td>
              <Select
                showSearch
                style={{ width: '100%' }}
                placeholder="Select Industry"
                optionFilterProp="children"
                onChange={handleChange}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                <Option value="Arts/Entertainment">Arts/Entertainment</Option>
                <Option value="Airlines/Hospitality/Tourism/Travel">Airlines/Hospitality/Tourism/Travel</Option>				  
                <Option value="Audit/Accountancy">Audit/Accountancy</Option>				  
                <Option value="Banking/Finance">Banking/Finance</Option>				  
                <Option value="Business Services/Consulting">Business Services/Consulting</Option>	
                <Option value="Building/Construction">Building/Construction</Option>				  
                <Option value="Day Trader">Day Trader</Option>				  
                <Option value="Education/Training">Education/Training</Option>				  
                <Option value="Engineering/Architecture">Engineering/Architecture</Option>				  
                <Option value="Government/Uniform/Nonprofit">Government/Uniform/Nonprofit</Option>	
                <Option value="Industrial/Manufacturing">Industrial/Manufacturing</Option>				  
                <Option value="Information Technology">Information Technology</Option>				  
                <Option value="Insurance">Insurance</Option>				  
                <Option value="Internet/E-Commerce">Internet/E-Commerce</Option>				  
                <Option value="Health Care">Health Care</Option>				  
                <Option value="Legal">Legal</Option>				  
                <Option value="Life Sciences/Medical">Life Sciences/Medical</Option>				 
                <Option value="Marketing/Sales">Marketing/Sales</Option>				  
                <Option value="Others">Others</Option>				  
                <Option value="Real Estates">Real Estate</Option>				  
                <Option value="Research/Development">Research/Development</Option>				  
                <Option value="Retailer/Distributor/Wholesaler(computer related)">Retailer/Distributor/Wholesaler(computer related)</Option>				  
                <Option value="Retailer/Distributor/Wholesaler">Retailer/Distributor/Wholesaler</Option>				  
                <Option value="Retired">Retired</Option>				  
                <Option value="Self Employed">Self Employed</Option>				  
                <Option value="Student/NS">Student/NS</Option>				  
                <Option value="Telecommunication">Telecommunication</Option>				  
                <Option value="Transportation/Utilities">Transportation/Utilities</Option>	
                <Option value="Unemployed">Unemployed</Option>
              </Select>  
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

export default observer(FillEmail)