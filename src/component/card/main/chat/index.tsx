import SenderIcon from '../../../../assets/main/chat-sender-photo.png'
import ReceiverIcon from '../../../../assets/main/chat-receiver-photo.png'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faFaceSmile} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Chat = () => {
  const [data, setData] = useState([
    {type: 'sender', message:'Are you ready?', photo: SenderIcon},
    {type: 'receiver', message:'I have prepared everything', photo: ReceiverIcon}
  ])

  var [message, setMessage] = useState('')
  const handleChange = (e:any) =>{
    setMessage(e.target.value)
  }
  const handleSend =()=>{
    setData(data => [...data,{type: 'sender', message:message, photo: SenderIcon}])
    setMessage('')
  };
    return (
    <>
    <div className='chat'>
        <div className='chat-content'>
          <div className='chat-content-title'>Esther Howard</div>
          <div className='chat-content-box'>
            {data.map((x) =>(
            <>
            {x.type === 'sender' ? ( 
              <div className='chat-content-box-sender'>
              <div className='chat-content-box-sender-text'>
                {x.message}
              </div>
              <img src={x.photo} alt='' height={'30px'}/>
            </div>
            ):(
            <div className='chat-content-box-receiver'>
              <img src={x.photo} alt='' height={'30px'}/> 
              <div className='chat-content-box-receiver-text'>{x.message}</div>
            </div>
            )}
            </>))}
          </div>
          <div className='chat-content-action'>
            <textarea className='chat-content-action-input' placeholder='Type your message ...' value={message} onChange={(e) => handleChange(e)}/>
            <div className='chat-content-action-button'>
              <div className='chat-content-action-button-icon-box'>
                <div className='chat-content-action-button-item-icon'><FontAwesomeIcon icon={faFaceSmile} color='#4f4f4f' height={'20px'}/></div>
                <div className='chat-content-action-button-item-icon'><FontAwesomeIcon icon={faPaperclip}/></div>
              </div>
              <div className='chat-content-action-button-item-box' onClick={() => handleSend()}>
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