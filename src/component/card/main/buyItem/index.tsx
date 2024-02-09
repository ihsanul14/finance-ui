import { faChevronRight, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BuyItem = () => {
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
              <div className='buy-item-content-info-detail-status'>0/3</div> 
              <div className='buy-item-content-info-detail-text buy-item-font'>Shopping list</div>
              </div>
            <div className='buy-item-content-info-button'>+ Add an item</div>
          </div>
          <div className='buy-item-content-checkbox'>
            <div className='buy-item-content-checkbox-item-box buy-item-font'>
              <div className='buy-item-content-checkbox-item buy-item-font'>
                <FontAwesomeIcon icon={faSquareCheck} color='black' width={'20px'}/>Macbook
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"  height="10">
                    <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
                </svg>
              </div>
            </div>
            <div className='buy-item-content-checkbox-item-box buy-item-font'>
              <div className='buy-item-content-checkbox-item buy-item-font'>
                <FontAwesomeIcon icon={faSquareCheck} color='black' width={'20px'}/>Bicycle
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"  height="10">
                    <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
                </svg>
              </div>
            </div>
            <div className='buy-item-content-checkbox-item-box buy-item-font'>
              <div className='buy-item-content-checkbox-item buy-item-font'>
                <FontAwesomeIcon icon={faSquareCheck} color='black' width={'20px'}/>Motorcycle
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"  height="10">
                    <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
                </svg>
              </div>
            </div>
            <div className='buy-item-content-checkbox-item-box buy-item-font'>
              <div className='buy-item-content-checkbox-item buy-item-font'>
                <FontAwesomeIcon icon={faSquareCheck} color='black' width={'20px'}/>Iphone 14 pro max
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"  height="10">
                    <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
    </div>  
    </>
  );
};

export default BuyItem;