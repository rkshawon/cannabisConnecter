import './addNewItems.less'
import {FiPlusCircle} from 'react-icons/fi';
import { Tabs } from 'antd';
import AddItem from './content/AddItem';
const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};

function AddNewItems() {
  return (
    <div className='add_new_items_container'>
        <h1>Add New Product</h1>
        <p>You Can add your new product for publish in your Product list as well as save as draft for further editing.</p>
        <div className="add_new_item_body">
            <Tabs defaultActiveKey="1" onChange={onChange} style={{margin: '0px 15px'}}>
                <TabPane
                    tab={<span className='tabpane'>
                            <FiPlusCircle style={{fontSize: '18px'}}/>
                            <span style={{marginLeft: '5px', fontSize: '12px'}}>Add Item</span>
                        </span>
                        } 
                    key="1">
                    <AddItem/>
                </TabPane>
                <TabPane 
                    tab={<span className='tabpane'>
                        <span style={{marginLeft: '5px', fontSize: '12px'}}>Preview</span>
                        </span>
                    } 
                 key="2">
                Content of Tab Pane 2
                </TabPane>
            </Tabs>
        </div>
    </div>
  )
}

export default AddNewItems