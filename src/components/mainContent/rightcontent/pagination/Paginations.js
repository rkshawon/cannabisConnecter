import './pagination.css'
import { Pagination } from 'antd'

function Paginations() {
  return (
    <div className='pagination'>
        <Pagination defaultCurrent={0} total={50}  />
    </div>
  )
}

export default Paginations