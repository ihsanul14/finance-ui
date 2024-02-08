import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBell, faWallet, faClock, faPeopleGroup, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import PhotoIcon from '../../assets/main/chat-sender-photo.png'
import './styles.css'

const Sidebar = () => {
  return (
    <>
    <div className='sidebar'>
        <div className='sidebar-content'>
            <div className='sidebar-content-title'>S.</div>
            <div className='sidebar-content-detail'>
                <div className='sidebar-content-detail-item'><FontAwesomeIcon icon={faWallet} color='black' /></div>
                <div className='sidebar-content-detail-item-option'>
                    <div className='sidebar-content-detail-item-content'><FontAwesomeIcon icon={faHouse} color='black'/></div>
                    <div className='sidebar-content-detail-item-content'><FontAwesomeIcon icon={faBell} color='black'/></div>
                    <div className='sidebar-content-detail-item-content'><FontAwesomeIcon icon={faClock} color='black'/></div>
                    <div className='sidebar-content-detail-item-content'><FontAwesomeIcon icon={faPeopleGroup} color='black'/></div>
                    <div className='sidebar-content-detail-item-content'><FontAwesomeIcon icon={faWallet} color='black'/></div>
                    <div className='sidebar-content-detail-item-content'><FontAwesomeIcon icon={faGear} color='black'/></div>
                </div>
                <div className='sidebar-content-detail-item-footer'>
                    <div><img src={PhotoIcon} alt='' height={'30px'}/></div>
                    <div><FontAwesomeIcon icon={faRightFromBracket} color='black'/></div>
                </div>
            </div>
        </div>
    </div>  
    </>
  );
};

export default Sidebar;