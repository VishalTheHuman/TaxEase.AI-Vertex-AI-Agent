'use client';

import { useState, useRef } from 'react';

const ChatWindow = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (message.trim()) {
      const newMessages = [...messages, { text: message, sender: 'user' }];
      setMessages(newMessages);
      setMessage('');
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });

      try {
        const response = await fetch('http://127.0.0.1:8000/query/' + message);
        let botText = '';
        if (response.ok) {
          const data = await response.json();
          botText = data.response;
        } else {
          botText = 'Error: Unable to fetch response';
        }
        console.log(botText);
        const botReply = { text: botText, sender: 'bot' };

        setMessages((prevMessages) => [...prevMessages, botReply]);
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      } catch (error) {
        console.error('Error fetching bot response:', error);
      }

      
    }
  };

  return (
    <div className="flex flex-col h-[500px] p-2 pb-0 pt-4">
      <div className="flex-1 overflow-y-auto mb-4 w-full example">
        {messages.map((msg, index) => (
          <div 
            key={index} style={{ wordWrap: 'break-word' }}
            className={`mb-2 p-3 rounded-lg text-sm w-fit max-w-[70%] ${msg.sender === 'user' ? 'bg-accent self-end text-black ml-auto' : 'bg-primary text-white self-start'}`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={sendMessage} className="flex flex-col">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-grow p-2 border rounded-t-lg focus:outline-0 mb-2 h-20 text-sm "
          placeholder="Type a message..."
        />
        <button type="submit" className="p-2 bg-primary text-white rounded-b-lg hover:bg-secondary">
          Send
        </button>
      </form>
      <p className="text-xs text-gray-500 mt-2">
        Note: It may take 10-20 seconds for a response.
      </p>
    </div>
  );
};

export default ChatWindow;
