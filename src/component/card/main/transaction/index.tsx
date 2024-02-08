import './styles.css'

const Transaction = () => {
  return (
    <>
    <div className='transaction'>
        <div className='transaction-content'>
          <div>Latest transaction</div>
          <div>Newest</div>
          <div>Oldest</div>
          <div className='transaction-content-box'>
            <div> 
              <div>Bessie Cooper</div>
              <div>02 july, 2023</div>
              <div>-$3,000</div>
            </div>
            <div> 
              <div>Guy Hawkins</div>
              <div>02 july, 2023</div>
              <div>-$1,970</div>
            </div>
            <div> 
              <div>Floyd Miles</div>
              <div>02 july, 2023</div>
              <div>-$5,000</div>
            </div>
          </div>
        </div>
    </div>  
    </>
  );
};

export default Transaction;