import Divider from '../../../divider';
import OnlineStoreIcon from '../../../../assets/info/online-store.png'
import HospitalIcon from '../../../../assets/info/hospital.png'
import TicketIcon from '../../../../assets/info/ticket.png'
import './styles.css'
import { useState } from 'react';

const Spending = () => {
  const data = [
    {title: "Online store", date: "May 30, 2023 at 08.00 pm", photo: OnlineStoreIcon},
    {title: "Pay the hospital", date: "May 28, 2023 at 10.00 pm",photo: HospitalIcon},
    {title: "Tickets", date: "May 10, 2023 at 12.00 pm",photo: TicketIcon},
    {title: "Tickets", date: "May 10, 2023 at 12.00 pm",photo: TicketIcon},
  ]

  const [view,setView] = useState(false)

  const handleView = ()=>{
    setView(!view)
  }
  return (
    <>
    <div className='spending'>
        <div className='spending-content'>
          <div className='spending-content-header'>
            <div className='spending-content-title'>Latest spending</div>
            <div className='spending-content-header-icon'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"  height="18">
                <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
              </svg>
            </div>
          </div>
          {data.map((x,i) =>(
          <>
          {!view && i < 3 &&
          <>
          <div className='spending-content-data-item'>
            <div className='spending-content-data-item-icon'>
              <img src={x.photo} alt={x.title} height={'50px'}/>
            </div>
            <div className='spending-content-data-item-text'>
              <div className='spending-content-data-item-title'>{x.title}</div>
              <div className='spending-content-data-item-date'>{x.date}</div>
            </div>
          </div>
          <Divider />
          </>  
          }
          {view &&
          <>
          <div className='spending-content-data-item'>
            <div className='spending-content-data-item-icon'>
              <img src={x.photo} alt={x.title} height={'50px'}/>
            </div>
            <div className='spending-content-data-item-text'>
              <div className='spending-content-data-item-title'>{x.title}</div>
              <div className='spending-content-data-item-date'>{x.date}</div>
            </div>
          </div>
          <Divider />
          </>  
          }
          </>
          ))}
          <div className='spending-option' onClick={handleView}>
            {!view ? 'View all' : 'View less'}  
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="12" width="30" fill='#C1C2F0'>
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
            </svg>
          </div>
        </div>
    </div>  
    </>
  );
};

export default Spending;