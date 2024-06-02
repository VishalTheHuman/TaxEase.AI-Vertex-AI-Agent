'use client';

import { useState, useRef } from 'react';

const ChatWindow = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      const newMessages = [...messages, { text: message, sender: 'user' }];
      setMessages(newMessages);
      setMessage('');
      setTimeout(() => {
        const botReply = { text: 'okay', sender: 'bot' };
        
        setMessages((prevMessages) => [...prevMessages, botReply]);
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 500); // Simulate a slight delay for bot response
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col h-[450px] p-2 pt-4">
      <div className="flex-1 overflow-y-auto mb-4 w-full">
        {messages.map((msg, index) => (
          <div 
            key={index} 
            className={`mb-3 p-3 rounded-lg w-[60%] ${msg.sender === 'user' ? 'bg-accent self-end text-black ml-auto' : 'bg-primary text-white self-start'}`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={sendMessage} className="flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-grow p-2 border rounded-l-lg focus:outline-0"
          placeholder="Type a message..."
        />
        <button type="submit" className="p-2 bg-primary text-white rounded-r-lg hover:bg-secondary">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatWindow;
