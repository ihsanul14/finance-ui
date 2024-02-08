import './styles.css'

const Sidebar = () => {
  return (
    <>
    <div className='sidebar'>
        <div className='sidebar-content'>
            <div className='sidebar-content-title'>S.</div>
            <div className='sidebar-content-detail'>
                <div className='sidebar-content-detail-item'>WalletOrange</div>
                <div className='sidebar-content-detail-item sidebar-option'>
                    <div className='sidebar-content-detail-item-content'>HomeIcon</div>
                    <div className='sidebar-content-detail-item-content'>BellIcon</div>
                    <div className='sidebar-content-detail-item-content'>PeopleIcon</div>
                    <div className='sidebar-content-detail-item-content'>WalletIcon</div>
                    <div className='sidebar-content-detail-item-content'>SettingIcon</div>
                </div>
                <div className='sidebar-content-detail-item'>
                    <div>PhotoIcon</div>
                    <div>LogoutIcon</div>
                </div>
            </div>
        </div>
    </div>  
    </>
  );
};

export default Sidebar;