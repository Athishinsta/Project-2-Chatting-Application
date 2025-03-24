import React from 'react';

const Message = ({ message, sender }) => {
  return (
    <div
      className={`message ${sender === 'user' ? 'user-message' : 'bot-message'}`}
      style={{
        alignSelf: sender === 'user' ? 'flex-end' : 'flex-start',
      }}
    >
      <p>{message}</p>
    </div>
  );
};

export default Message;
