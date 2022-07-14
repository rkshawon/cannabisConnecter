import './addItem.less'
import { LoadingOutlined, PlusOutlined, InboxOutlined } from '@ant-design/icons';
import { Input, Button, message, Upload, Select, DatePicker, Space } from 'antd';
import {useDropzone} from 'react-dropzone';
import {FiSearch} from 'react-icons/fi'
import {BsFilter} from 'react-icons/bs'
import {ImAttachment} from 'react-icons/im'
import { useState, useEffect } from 'react';
const { Dragger } = Upload;
const { Option } = Select;
const { TextArea } = Input;


const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 90,
  height: 75,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};



const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',

  onChange(info) {
    const { status } = info.file;

    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }

    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },

  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };
  
  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
  
    const isLt2M = file.size / 1024 / 1024 < 2;
  
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
  
    return isJpgOrPng && isLt2M;
  };

function AddItem() {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const [files, setFiles] = useState([]);
    const {getRootProps, getInputProps} = useDropzone({
      accept: {
        'image/*': []
      },
      onDrop: acceptedFiles => {
        setFiles(acceptedFiles.map(file => Object.assign(file, {
          preview: URL.createObjectURL(file)
        })));
      }
    });
    
    const thumbs = files.map(file => (
      <div style={thumb} key={file.name}>
        <div style={thumbInner}>
          <img
            src={file.preview}
            style={img}
            // Revoke data uri after image is loaded
            onLoad={() => { URL.revokeObjectURL(file.preview) }}
          />
        </div>
      </div>
    ));
  
    useEffect(() => {
      // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
      return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, []);

    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
          setLoading(true);
          return;
        }
    
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, (url) => {
            setLoading(false);
            setImageUrl(url);
          });
        }
      };
    
      const uploadButton = (
        <div>
          {loading ? <LoadingOutlined /> : <PlusOutlined />}
          <div
            style={{
              marginTop: 8,
            }}
          >
            Upload
          </div>
        </div>
      )


    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
      const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
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





      
  return (
    <div className='add_item_container'>
        <div className="add_item_search">
            <Input placeholder="Search by Product Name"
              prefix={<FiSearch style={{color: '#9d9d9d', marginRight: '15px'}} />} className='input' />
           
            <Button
                icon={
                    <BsFilter style={{color: '#9d9d9d', marginRight: '15px'}} />
                }
                className='upload upload_button'>Filters</Button>
            
            <Upload {...props} className='upload'>
                <Button
                    icon={
                        <ImAttachment style={{color: '#9d9d9d', marginRight: '15px'}} />
                    }
                     className='upload_button'>Attachments</Button>
            </Upload>
        </div>
        <div className="add_item_mid">
            <div className="add_item_right">
              <label>Product Name</label>
              <Input placeholder="e.g. Flower, Oils" style={{borderRadius: '5px', marginTop: '1em'}}/>
              <p>Don't exceed 35 character when typing product name </p>
              <div className="add_item_right_bottom">
                  <div className="add_item_right_bottom_right">
                    <label>Product Category</label>
                    <Select
                      showSearch
                      style={{
                        marginTop: '1em',
                        width: "90%",
                      }}
                        placeholder="choose one"
                        optionFilterProp="children"
                        filterOption={(input, option) => option.children.includes(input)}
                        filterSort={(optionA, optionB) =>
                        optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                      }
                    >
                      <Option value="1">Not Identified</Option>
                      <Option value="2">Closed</Option>
                      <Option value="3">Communicated</Option>
                    </Select>
                    <label>Brand</label>
                    <Select
                      showSearch
                      style={{
                        marginTop: '1em',
                        width: "90%",
                      }}
                        placeholder="choose one or type"
                        optionFilterProp="children"
                        filterOption={(input, option) => option.children.includes(input)}
                        filterSort={(optionA, optionB) =>
                        optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                      }
                    >
                      <Option value="1">Not Identified</Option>
                      <Option value="2">Closed</Option>
                      <Option value="3">Communicated</Option>
                    </Select>
                    <label>Description</label>
                    <TextArea style={{marginTop: '1em', width: "90%",}}
                      autoSize={{
                        minRows: 6,
                        maxRows: 7,
                      }}
                    />
                    <p>Don't exceed 100 character when typing product name </p>
                  </div>
                  <div className="add_item_right_bottom_left">
                    <label>Sub Category</label>
                    <Input placeholder="option" style={{marginTop: '1em',}} />
                    <label>Add THC Level</label>
                    <Input placeholder="e.g 0.5, 1.0" style={{marginTop: '1em'}}/>
                    <label>Add Auction Date</label>
                    <Space direction="vertical" className='date_picker'>
                      <DatePicker style={{marginTop: '1em'}} />
                      <span>To</span>
                      <DatePicker />
                    </Space>
                    <p>Add the date you want to make your product availabe for bid </p>
                  </div>
              </div>
            </div>
            <div className="add_item_left">
                <div className="add_item_left1">
                    <div className="add_item_left1_left">
                      <label>Add Auction Date</label>
                        <div {...getRootProps({className: 'dropzone'})}>
                          <input {...getInputProps()} />
                            <div className="drag_and_drop">
                              <small style={{color: '#9D9D9D', fontSize: '14px'}}>Drop your images here, or</small> 
                              <small style={{color: '#4285F4', fontSize: '14px', borderBottom: '1px #4285F4 solid'}}> click to browse</small>
                            </div>
                        </div>
                      <p>Note: you have to add at least 2 images</p>
                    </div>
                    <div className="add_item_left1_right">
                  <label>Preview</label>
                    <aside style={thumbsContainer}>
                      {thumbs}
                    </aside>
                  </div>
                </div>
                <div className="add_item_left2">
                    <div className="add_item_left2_input1">
                      <label>Add Product Stock</label>
                      <Input placeholder="e.g 5 lbs, 5 litre" style={{marginTop: '1em', marginRight: '5em'}} />
                    </div>
                    <div className="add_item_left2_input2">
                      <label>Add Bit Starting Price</label>
                      <Input placeholder="e.g 100" style={{marginTop: '1em'}} />
                      <p>Add price of per unit of your stock</p>
                    </div>
                </div>
                <div className="add_item_left3">
                <div {...getRootProps({className: 'dropzone'})}>
                  <label>Add Certificates & Lab Reports</label>
                  <input {...getInputProps()} />
                  <div className="drag_and_drop2">
                    <small style={{color: '#9D9D9D', fontSize: '14px'}}>Drop your images here, or</small> 
                    <small style={{color: '#4285F4', fontSize: '14px', borderBottom: '1px #4285F4 solid'}}> click to browse</small>
                  </div>
              </div>
                </div>
                <div className="add_item_left4">
                  <button className='draft_button'>Draft</button>
                  <Button type="primary"
                    style={{
                      borderRadius: '5px',
                      width:'50%',
                      fontWeight: '500',
                      height: '35px'
                    }}>
                    Publish Product
                  </Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddItem