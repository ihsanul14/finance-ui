import './styles.css'

const ExpenseIncome = () => {
  return (
    <>
    <div className='expense-income'>
        <div className='expense-income-content'>
            <div className='expense-income-content-title'>Expense and Incomes</div>
            <div className='expense-income-content-item'>
                <div className='expense-income-content-item-text'>Expense</div>
                <div className='expense-income-content-item-text'>75%</div>
                <div className='expense-income-content-item-text'>5.453</div>
            </div>
            <div className='expense-income-content-item'>
                <div className='expense-income-content-item-text'>|</div>
                <div className='expense-income-content-item-text'>vs</div>
                <div className='expense-income-content-item-text'>|</div>
            </div>
            <div className='expense-income-content-item'>
                <div className='expense-income-content-item-text'>Income</div>
                <div className='expense-income-content-item-text'>40%</div>
                <div className='expense-income-content-item-text'>2.656</div>
            </div>
            <div className='expense-income-content-badge'>
                <div className='expense-income-content-badge-expense'></div>
                <div className='expense-income-content-badge-income'></div>
            </div>
        </div>
    </div>  
    </>
  );
};

export default ExpenseIncome;