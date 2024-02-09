import Chart from '../../../chart';
import MoneyIcon from '../../../../assets/main/balance.png'
import ProgressIcon from '../../../../assets/main/balance-2.png'
import './styles.css'
import Divider from '../../../divider';

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
              <div className='balance-content-detail-item-data-desc'>
                <img src={MoneyIcon} alt='' height={'30px'} width={'30px'} style={{display:'flex', alignSelf:'center'}}/>
                <div className='balance-content-detail-item-data-desc-text'>Your total balance</div>
              </div>
              <Divider />
              <div className='balance-content-detail-item-data-status'>
                <img src={ProgressIcon} alt='' height={'40px'} width={'90px'}/>
                <div className='balance-content-detail-item-data-desc-text'>6%</div>
              </div>
              <div className='balance-content-detail-item-data-info'>Always see your earnings updates</div>
            </div>
            </div>
            <div className='balance-content-detail-item-chart'>
              <Chart /> 
            </div>
          </div>
        </div>
    </div>  
    </>
  );
};

export default Balance;