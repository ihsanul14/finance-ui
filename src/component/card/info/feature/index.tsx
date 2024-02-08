import CrownIcon from '../../../../assets/info/crown.png'
import './styles.css'

const Feature = () => {
  return (
    <>
    <div className='feature'>
        <div className='feature-content'>
          <div className='feature-content-title'>Go to premium</div>
          <div className='feature-content-data'>
            <img src={CrownIcon} alt="" className='feature-image'/>
            <div className='feature-content-data-detail'> 
              <div className='feature-content-data-detail-title'>Need more features?</div>
              <div className='feature-content-data-detail-text'>Update your account to premim to get more features</div>
            </div>
          </div>
          <div className='feature-button'>Get now</div>
        </div>
    </div>  
    </>
  );
};

export default Feature;