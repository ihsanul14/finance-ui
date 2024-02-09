import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBell, faWallet, faClock, faPeopleGroup, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import PhotoIcon from '../../assets/main/chat-sender-photo.png'
import './styles.css'
import { useState } from 'react';

const Sidebar = () => {
    const [isHomeClicked, setIsHomeClicked] = useState(true)
    const [isBellClicked, setIsBellClicked] = useState(false)
    const [isClockClicked, setIsClockClicked] = useState(false)
    const [isGroupClicked, setIsGroupClicked] = useState(false)
    const [isWalletClicked, setIsWalletClicked] = useState(false)
    const [isGearClicked, setIsGearClicked] = useState(false)

    const handleClick = (v:number) =>{
        switch (v){
            case 1:
                setIsBellClicked(true)
                setIsHomeClicked(false)
                setIsClockClicked(false)
                setIsGroupClicked(false)
                setIsWalletClicked(false)
                setIsGearClicked(false)
                break
            case 2:
                setIsClockClicked(true)
                setIsHomeClicked(false)
                setIsBellClicked(false)
                setIsGroupClicked(false)
                setIsWalletClicked(false)
                setIsGearClicked(false)
                break
            case 3:
                setIsGroupClicked(true)
                setIsHomeClicked(false)
                setIsClockClicked(false)
                setIsBellClicked(false)
                setIsWalletClicked(false)
                setIsGearClicked(false)
                break
            case 4:
                setIsWalletClicked(true)
                setIsHomeClicked(false)
                setIsClockClicked(false)
                setIsBellClicked(false)
                setIsGroupClicked(false)
                setIsGearClicked(false)
                break
            case 5:
                setIsGearClicked(true)
                setIsHomeClicked(false)
                setIsClockClicked(false)
                setIsBellClicked(false)
                setIsWalletClicked(false)
                setIsGroupClicked(false)
                break
            default:
                setIsHomeClicked(true)
                setIsBellClicked(false)
                setIsClockClicked(false)
                setIsGroupClicked(false)
                setIsWalletClicked(false)
                setIsGearClicked(false)
        }
    }

    const handleBackground = (v:boolean) =>{
        return v ? '#5460DE': 'none'
    }
  return (
    <>
    <div className='sidebar'>
        <div className='sidebar-content'>
            <div className='sidebar-content-title'>S.</div>
            <div className='sidebar-content-detail'>
                <div className='sidebar-content-detail-item'><FontAwesomeIcon icon={faWallet} color='black' /></div>
                <div className='sidebar-content-detail-item-option'>
                    <div className='sidebar-content-detail-item-content' style={{background: handleBackground(isHomeClicked)}} onClick={() =>handleClick(0)}><FontAwesomeIcon icon={faHouse} color='black'/></div>
                    <div className='sidebar-content-detail-item-content' style={{background: handleBackground(isBellClicked)}} onClick={() =>handleClick(1)}><FontAwesomeIcon icon={faBell} color='black'/></div>
                    <div className='sidebar-content-detail-item-content' style={{background: handleBackground(isClockClicked)}} onClick={() =>handleClick(2)}><FontAwesomeIcon icon={faClock} color='black'/></div>
                    <div className='sidebar-content-detail-item-content' style={{background: handleBackground(isGroupClicked)}} onClick={() =>handleClick(3)}><FontAwesomeIcon icon={faPeopleGroup} color='black'/></div>
                    <div className='sidebar-content-detail-item-content' style={{background: handleBackground(isWalletClicked)}} onClick={() =>handleClick(4)}><FontAwesomeIcon icon={faWallet} color='black'/></div>
                    <div className='sidebar-content-detail-item-content' style={{background: handleBackground(isGearClicked)}} onClick={() =>handleClick(5)}><FontAwesomeIcon icon={faGear} color='black'/></div>
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