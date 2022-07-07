import Profile from './profiles/Profile'
import './rightcontent.css'
import Sortby from './sortBy/Sortby'
import p1 from './profile1.png'
import p3 from './profile3.png'
import p2 from './profile2.png'
import Paginations from './pagination/Paginations'


function Rightcontent() {
  return (
    <div className='right_content'>
      <Sortby/>
      <Profile profile={p1} name='Patrick Leach' address='Erick, Oklahoma' model='Toyota CHR' rate='4.9' amount='260'/>
      <Profile profile={p1} name='Ken Miles' address='Erick, Oklahoma' model='Sony XL' rate='4.9' amount='265'/>
      <Profile profile={p2} name='Henry Ford' address='Tulsa, Oklahoma' model='Ford Truck' rate='4.8' amount='255'/>
      <Profile profile={p3} name='Ken Miles' address='Erick, Oklahoma' model='Tata GLS' rate='4.8' amount='245'/>
      <Profile profile={p1} name='Ken Miles' address='Tulsa, Oklahoma' model='Sony XL' rate='4.5' amount='265'/>
      <Paginations/>
    </div>
  )
}

export default Rightcontent