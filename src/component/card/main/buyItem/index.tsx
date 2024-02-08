import './styles.css'

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
            <div className='buy-item-content-period-item'>
              |
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
            <div className='buy-item-content-info-button buy-item-font'>Add an item</div>
          </div>
          <div className='buy-item-content-checkbox'>
            <div className='buy-item-content-checkbox-item buy-item-font'>Macbook</div>
            <div className='buy-item-content-checkbox-item buy-item-font'>Bicycle</div>
            <div className='buy-item-content-checkbox-item buy-item-font'>Motorcycle</div>
            <div className='buy-item-content-checkbox-item buy-item-font'>Iphone 14 pro max</div>
          </div>
        </div>
    </div>  
    </>
  );
};

export default BuyItem;