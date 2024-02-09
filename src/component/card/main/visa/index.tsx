import VisaIcon from '../../../../assets/main/visa.png'
import './styles.css'

const Visa = () => {
  return (
    <>
    <div className='visa' style={{backgroundImage: `url(${VisaIcon})`, backgroundSize:'320px'}}>
        <div className='visa-content'>
        </div>
    </div>  
    </>
  );
};

export default Visa;