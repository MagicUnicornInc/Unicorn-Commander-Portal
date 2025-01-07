import React from 'react';
import { FaComment } from 'react-icons/fa6';

function ChatPage() {
  return (
    <div className="h-screen bg-gray-900 flex flex-col">
      {/* Chat Header */}
      <div className="bg-gray-800 p-4 flex items-center gap-2 shadow-lg">
        <FaComment className="text-purple-500" />
        <span className="font-semibold text-white">Magic Chat</span>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="flex justify-start">
          <div className="max-w-[80%] p-3 rounded-lg bg-gray-700 text-gray-200">
            Welcome to Magic Chat! How can I assist you today?
          </div>
        </div>
      </div>

      {/* Chat Input */}
      <form className="p-4 bg-gray-800">
        <div className="flex gap-2">
          <input
            type="text"
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
    </div>
  );
}

export default ChatPage;
