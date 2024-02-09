import SenderIcon from '../../../../assets/main/chat-sender-photo.png'
import ReceiverIcon from '../../../../assets/main/chat-receiver-photo.png'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faSmileBeam} from '@fortawesome/free-solid-svg-icons';

const Chat = () => {
  return (
    <>
    <div className='chat'>
        <div className='chat-content'>
          <div className='chat-content-title'>Esther Howard</div>
          <div className='chat-content-box'>
            <div className='chat-content-box-sender'>
              <div className='chat-content-box-sender-text'>
                Are you ready?
              </div>
              <img src={SenderIcon} alt='' height={'30px'}/>
            </div>
            <div className='chat-content-box-receiver'>
              <img src={ReceiverIcon} alt='' height={'30px'}/> 
              <div className='chat-content-box-receiver-text'>I have prepared anything</div>
            </div>
          </div>
          <div className='chat-content-action'>
            <textarea className='chat-content-action-input' placeholder='Type your message ...' />
            <div className='chat-content-action-button'>
              <div className='chat-content-action-button-icon-box'>
                <div className='chat-content-action-button-item-icon'><FontAwesomeIcon icon={faSmileBeam}/></div>
                <div className='chat-content-action-button-item-icon'><FontAwesomeIcon icon={faPaperclip}/></div>
              </div>
              <div className='chat-content-action-button-item-box'>
                <div className='chat-content-action-button-item'>Send now</div>
              </div>
            </div>
          </div>
        </div>
    </div>  
    </>
  );
};

export default Chat;