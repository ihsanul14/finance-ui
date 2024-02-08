import Chart from '../../../chart';
import './styles.css'

const Balance = () => {
  return (
    <>
    <div className='balance'>
        <div className='balance-content'>
          <div className='balance-content-detail'>
            <div className='balance-content-detail-item'>
            <div className='balance-content-title'>Balance statistics</div>
            <div className='balance-content-detail-item-data'>
              <div className='balance-content-detail-item-data-money'>$564</div>
              <div className='balance-content-detail-item-data-desc'>Your total balance</div>
              <div className='balance-content-detail-item-data-status'>6%</div>
              <div className='balance-content-detail-item-data-info'>Always see your earnings updates</div>
            </div>
            </div>
            <div className='balance-content-detail-item'>
              <Chart /> 
            </div>
          </div>
        </div>
    </div>  
    </>
  );
};

export default Balance;