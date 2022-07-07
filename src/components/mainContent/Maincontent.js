import Leftcontent from './leftContent/Leftcontent'
import React from './maincontent.css'
import Rightcontent from './rightcontent/Rightcontent'

function Maincontent() {
  return (
    <div className='main_content'>
        <Leftcontent/>
        <Rightcontent/>
    </div>
  )
}

export default Maincontent