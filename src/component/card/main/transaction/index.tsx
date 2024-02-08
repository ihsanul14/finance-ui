import {useState} from 'react'
import Divider from '../../../divider';
import './styles.css'

const Transaction = () => {
  const [isNewest, setIsNewest] = useState(true)
  const [isOldest, setIsOldest] = useState(false)
  const data = [
    {name: "Bessie Cooper", date: "02 july, 2023", amout: "-$3,000"},
    {name: "Guy Hawkins", date: "02 july, 2023", amout: "-$1,970"},
    {name: "Floyd Miles", date: "02 july, 2023", amout: "-$5,000"},
  ]

  const handleFilter = (v:number) =>{
    if (v === 0){
      setIsNewest(true)
      setIsOldest(false)
    }else{
      setIsNewest(false)
      setIsOldest(true)
    }
  }

  return (
    <>
    <div className='transaction'>
        <div className='transaction-content'>
          <div className='transaction-content-header'>
            <div className='transaction-content-title'>Latest transaction</div>
            <div className='transaction-content-filter' onClick={()=>handleFilter(0)} style={{textDecoration: isNewest ? 'underline': 'none'}}>Newest</div>
            <div className='transaction-content-filter' onClick={()=>handleFilter(1)} style={{textDecoration: isOldest ? 'underline': 'none'}}>Oldest</div>
          </div>
          <div className='transaction-content-box'>
            {data.map((x) => (
            <>
            <Divider />
            <div className='transaction-content-box-data'> 
              <div className='transaction-content-box-data-item'>
                <div className='transaction-content-box-data-item-name'>{x.name}</div>
                <div className='transaction-content-box-data-item-date'>{x.date}</div>
              </div>
              <div className='transaction-content-box-data-item' style={{flex:0}}>{x.amout}</div>
              <div className='transaction-content-box-data-item' style={{flex:0}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                  <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
                </svg>
              </div>
            </div>
            </>
            ))}
          </div>
        </div>
    </div>  
    </>
  );
};

export default Transaction;