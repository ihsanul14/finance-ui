import ExpenseIncome from '../card/info/expeseIncome';
import Feature from '../card/info/feature';
import Spending from '../card/info/spending';

import './styles.css'

const Info = () => {
  return (
    <>
    <div className='info'>
        <div className='info-content'>
            <ExpenseIncome />
            <Spending />
            <Feature />
        </div>
    </div>  
    </>
  );
};

export default Info;