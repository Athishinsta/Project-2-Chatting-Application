import React, { useState } from 'react';
import Message from './Message';



const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState('');

  const handleSendMessage = () => {
    if (messageText.trim() !== '') {
      setMessages([
        ...messages,
        { text: messageText, sender: 'user' },
      ]);
      setMessageText('');
      
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'Hello, user name', sender: 'bot' },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="container">
      <div className='header'>
        <p className='class1'></p>
        <h4 className='class2'>User Name</h4>
      </div>
      <div className="messages">
        {messages.map((msg, index) => (
          <Message key={index} message={msg.text} sender={msg.sender} />
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage} >Send</button>
      </div>
    </div>
  );
};

export default Chat;
