import Divider from '../../../divider';
import './styles.css'

const Spending = () => {
  const data = [
    {title: "Online store", date: "May 30, 2023 at 08.00 pm"},
    {title: "Pay the hospital", date: "May 28, 2023 at 10.00 pm"},
    {title: "Tickets", date: "May 10, 2023 at 12.00 pm"},
  ]
  return (
    <>
    <div className='spending'>
        <div className='spending-content'>
          {data.map((x) =>(
          <>
          <div className='spending-content-data-item'>
            <div className='spending-content-data-item-title'>{x.title}</div>
            <div className='spending-content-data-item-date'>{x.date}</div>
          </div>
          <Divider />
          </>
          ))}
          <div className='spending-option'>View all</div>
        </div>
    </div>  
    </>
  );
};

export default Spending;