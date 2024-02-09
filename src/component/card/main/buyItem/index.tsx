import { faChevronRight, faSquareCheck, faSquare } from '@fortawesome/free-solid-svg-icons';
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const BuyItem = () => {
  const [data,setData] = useState([
    {name: 'Macbook', isClicked: false},
    {name: 'Bicylce', isClicked: false},
    {name: 'Motorcycle', isClicked: false},
    {name: 'Iphone 14 pro max', isClicked: false},
  ])

  const handleClick = (v:number)=>{
    setData(data => {
      return data.map((x, i) => {
        if (i === v) {
          return { ...x, isClicked: !x.isClicked }; 
        }
        return x; 
      })})
  }

  const getChecked = ()=>{
    return data.filter(item => item.isClicked).length;
  }

  const handleCheckbox = (v: boolean) =>{
    return v ? <FontAwesomeIcon icon={faSquareCheck} color='#5659D9' width={'20px'}/> : 
    <FontAwesomeIcon icon={faSquare} color='grey' width={'20px'}/>
  }
  return (
    <>
    <div className='buy-item'>
        <div className='buy-item-content'>
          <div className='buy-item-content-title'>List of items to buy</div>
          <div className='buy-item-content-period'>
            <div className='buy-item-content-period-item'>
              <div className='buy-item-content-period-item-time'>02:00</div>
              <div className='buy-item-content-period-item-date'>Sat, August 12</div>
            </div>
            <div className='buy-item-content-period-item' style={{alignItems: 'center'}}>
              <FontAwesomeIcon icon={faChevronRight} color='grey' width={'20px'}/>
            </div>
            <div className='buy-item-content-period-item'>
              <div className='buy-item-content-period-item-time'>05:00</div>
              <div className='buy-item-content-period-item-date'>Sat, September 12</div>
            </div>
          </div>
          <div className='buy-item-content-info'>
            <div className='buy-item-content-info-detail'>
              <div className='buy-item-content-info-detail-status'>{getChecked()}/{data?.length}</div> 
              <div className='buy-item-content-info-detail-text buy-item-font'>Shopping list</div>
              </div>
            <div className='buy-item-content-info-button'>+ Add an item</div>
          </div>
          <div className='buy-item-content-checkbox'>
            {data.map((x,i) => (
            <>
            {(i+1) %2 === 0 && 
            <>
              <div className='buy-item-content-checkbox-data'>
              <div className='buy-item-content-checkbox-item-box buy-item-font'>
                <div className='buy-item-content-checkbox-item buy-item-font' onClick={()=>handleClick(i-1)}>
                  {handleCheckbox(data[i-1]?.isClicked)}{data[i-1]?.name}
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"  height="10">
                      <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
                  </svg>
                </div>
              </div>
              <div className='buy-item-content-checkbox-item-box buy-item-font'>
                <div className='buy-item-content-checkbox-item buy-item-font' onClick={()=>handleClick(i)}>
                {handleCheckbox(data[i]?.isClicked)}{data[i]?.name}
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"  height="10">
                      <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
                  </svg>
                </div>
              </div>
            </div>
            </>}
            </>
            ))}
          </div>
        </div>
    </div>  
    </>
  );
};

export default BuyItem;