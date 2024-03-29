import Sidebar from '../../component/sidebar';
import Banner from '../../component/banner';
import Info from '../../component/info';
import './styles.css'
import Balance from '../../component/card/main/balance';
import BuyItem from '../../component/card/main/buyItem';
import Chat from '../../component/card/main/chat';
import Visa from '../../component/card/main/visa';
import Transaction from '../../component/card/main/transaction';
import Analytics from '../../component/card/analytics';

const Home = () => {

  return (
    <>
    <div className='home'>
        <div className='home-sidebar'>
            <Sidebar />
        </div>
        <div className='home-component'>
            <div className='home-component-item'>
                <Banner/>
                <div className='home-component-item-detail'>
                    <div className='home-component-item-detail-content'>
                        <Balance/>
                    </div>
                    <div className='home-component-item-detail-content-end'>
                        <Visa />
                    </div>
                </div>
                <div className='home-component-item-detail' style={{gap:'0.25rem'}}>
                    <div className='home-component-item-detail-content'>
                        <BuyItem/>
                    </div>
                    <div className='home-component-item-detail-content-end' style={{flex:0}}>
                        <Chat/>
                    </div>
                </div>
                <div className='home-component-item-detail'>
                    <div className='home-component-item-detail-content'>
                        <Transaction />
                    </div>
                    <div className='home-component-item-detail-content-end'>
                        <Analytics />
                    </div>
                </div>
            </div>
            <div className='home-component-item-info'>
                <Info />
            </div>
            
        </div>
    </div>  
    </>
  );
};

export default Home;