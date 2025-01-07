import React, { useState, useEffect } from 'react';
import { FaUpRightFromSquare, FaXmark, FaMinus, FaComment } from 'react-icons/fa6';

function ChatWindow({ isOpen, onClose }) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isPoppedOut, setIsPoppedOut] = useState(false);

  const popOut = () => {
    const width = 400;
    const height = 600;
    const left = window.screen.width - width;
    const top = window.screen.height - height;

    const chatWindow = window.open(
      '/chat',
      'ChatWindow',
      `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`
    );

    if (chatWindow) {
      setIsPoppedOut(true);
      onClose();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: 'user' }]);
      setInputValue('');
      // Simulate AI response
      setTimeout(() => {
        setMessages(prev => [...prev, {
          text: "I'm here to help! What can I do for you?",
          sender: 'ai'
        }]);
      }, 1000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed bottom-4 right-4 w-96 bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-all duration-300 ${
      isMinimized ? 'h-12' : 'h-[600px]'
    }`}>
      {/* Chat Header */}
      <div className="bg-gray-900 p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FaComment className="text-purple-500" />
          <span className="font-semibold">Magic Chat</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 hover:bg-gray-700 rounded"
          >
            <FaMinus className="w-4 h-4" />
          </button>
          <button
            onClick={popOut}
            className="p-1 hover:bg-gray-700 rounded"
          >
            <FaUpRightFromSquare className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-700 rounded"
          >
            <FaXmark className="w-4 h-4" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Chat Messages */}
          <div className="h-[calc(100%-8rem)] overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-700 text-gray-200'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSubmit} className="p-4 bg-gray-900">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500 text-gray-200"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Send
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

export default ChatWindow;
