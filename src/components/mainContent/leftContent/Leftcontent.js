import './leftcontent.css'
import React, { useState } from 'react';
import { Card, Radio, Slider, Button } from 'antd';


const options = [
    {
      label: 'Active',
      value: 'Apple',
    },
    {
      label: 'Pending',
      value: 'Pear',
    },
    {
      label: 'Archive',
      value: 'Orange',
    },
  ];

  const optionsWithDisabled = [
    {
      label: 'Truck',
      value: 'Apple',
    },
    {
      label: 'Van',
      value: 'Pear',
    },
    {
      label: 'SUV',
      value: 'Orange',
      disabled: true,
    },
  ];

function Leftcontent() {
    const [value3, setValue3] = useState('Apple');
    const [value4, setValue4] = useState('Apple');

    const onChange3 = ({ target: { value } }) => {
        console.log('radio3 checked', value);
        setValue3(value);
    };
    const onChange4 = ({ target: { value } }) => {
        console.log('radio4 checked', value);
        setValue4(value);
      };
  return (
    <div className='left_content'>
        <div className='cards'>
            <Card style={{width: "100%", minHeight: 158,}} className="card">
                <div className="first_midui_box">
                    <span>Proposal Status</span>
                    <p>Select your proposal as their current status</p>
                    <Radio.Group
                     options={options} 
                     onChange={onChange3} 
                     value={value3} 
                     optionType="button" 
                     className='radio_overlay'
                     />
                </div>
            </Card>
            <Card style={{width: "100%", minHeight: 170, marginTop: "20px"}}>
                <div className="first_midui_box">
                    <span>Price Filter</span>
                    <p>Select the proposals as their price range</p>
                    <div className='slider_container'>
                        <div className="silder_value">
                            <p>$200</p>
                            <p>$500</p>
                        </div>
                        <Slider
                            range={{
                            draggableTrack: true,
                            }}
                            defaultValue={[0, 60]}
                        />
                     
                    </div>
                </div>
            </Card>
            <Card style={{width: "100%", minHeight: 152, marginTop: "20px"}}>
                <div className="first_midui_box">
                    <span>Vehicle Category</span>
                    <p>Filter the vehicles category of current proposal</p>
                    <Radio.Group
                    options={optionsWithDisabled}
                    onChange={onChange4}
                    value={value4}
                    optionType="button"
                />
                </div>
            </Card>
            <Button className='filter_button' style={{ width: "100%", height: 40}}>Apply Filters</Button>
        </div>
    </div>
  )
}

export default Leftcontent