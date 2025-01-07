import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import ChatWindow from './components/ChatWindow';
import ChatPage from './pages/ChatPage';
import { FaComment } from 'react-icons/fa6';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <Routes>
      <Route path="/chat" element={<ChatPage />} />
      <Route
        path="/"
        element={
          <div className="min-h-screen flex">
            <Sidebar />
            <div className="flex-1 flex flex-col">
              <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
              <Dashboard />
              <Footer />
              <ChatWindow isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
              {!isChatOpen && (
                <button
                  onClick={() => setIsChatOpen(true)}
                  className="fixed bottom-4 right-4 p-4 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-colors"
                >
                  <FaComment className="w-6 h-6" />
                </button>
              )}
            </div>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
