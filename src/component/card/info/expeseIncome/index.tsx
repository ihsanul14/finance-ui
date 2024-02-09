import './styles.css'

const ExpenseIncome = () => {
  return (
    <>
    <div className='expense-income'>
        <div className='expense-income-content'>
            <div className='expense-income-content-title'>Expense and Incomes</div>
            <div className='expense-income-content-data'>
                <div className='expense-income-content-item-top'>
                    <div className='expense-income-content-item-text-left'>Expense</div>
                    <div className='expense-income-content-item-text-center'>|</div>
                    <div className='expense-income-content-item-text-right'>Income</div>
                </div>
                <div className='expense-income-content-item-center'>
                    <div className='expense-income-content-item-text-left'>75%</div>
                    <div className='expense-income-content-item-text-center'>vs</div>
                    <div className='expense-income-content-item-text-right'>40%</div>
                </div>
                <div className='expense-income-content-item-bottom'>
                    <div className='expense-income-content-item-text-left'>5.453</div>
                    <div className='expense-income-content-item-text-center' style={{fontSize:'12px', color: 'black'}}>|</div>
                    <div className='expense-income-content-item-text-right'>2.653</div>
                </div>
                <div className='expense-income-content-badge'>
                    <div className='expense-income-content-badge-expense' />
                    <div className='expense-income-content-badge-income' />
                </div>
            </div>
        </div>
    </div>  
    </>
  );
};

export default ExpenseIncome;