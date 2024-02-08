import './styles.css'

const Chat = () => {
  return (
    <>
    <div className='chat'>
        <div className='chat-content'>
          <div className='chat-content-title'>Esther Howard</div>
          <div className='chat-content-box'>
            <div className='chat-content-box-sender'>
              Are you ready?
            </div>
            <div className='chat-content-box-receiver'> 
              I have prepared anything
            </div>
          </div>
          <div className='chat-content-action'>
            <input type="text" className='chat-content-action-input' placeholder='Type your message ...' />
            <div className='chat-content-action-button'>
              <div className='chat-content-action-button-item'>Emoji</div>
              <div className='chat-content-action-button-item'>Attach</div>
              <div className='chat-content-action-button-item'>Send now</div>
            </div>
          </div>
        </div>
    </div>  
    </>
  );
};

export default Chat;