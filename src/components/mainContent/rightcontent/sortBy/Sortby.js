import './sortby.css'
import { Select } from 'antd';

const { Option } = Select;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

function Sortby() {
  return (
    <div className="body_box1">
        <span>Sort By</span>
        <Select className='select'
        defaultValue="top"
        style={{
          width: 200,
        }}
        onChange={handleChange}
      >
          <Option value="jack">Top Featured</Option>
          <Option value="top">Top Rated</Option>
          <Option value="Yiminghe">Top Deals</Option>
   
      </Select>
      </div>
  )
}

export default Sortby