import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Dashboard />
        <Footer />
      </div>
    </div>
  );
}

export default App;
