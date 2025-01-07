import React from 'react';
import { FaHouse, FaGear, FaTerminal, FaCircleInfo } from "react-icons/fa6";

function Sidebar() {
  return (
    <nav className="w-64 bg-gray-800 p-4 flex flex-col">
      <div className="flex-1">
        <div className="nav-item active">
          <FaHouse />
          <span>Dashboard</span>
        </div>
        <div className="nav-item">
          <FaGear />
          <span>Settings</span>
        </div>
        <div className="nav-item">
          <FaTerminal />
          <span>Logs</span>
        </div>
        <div className="nav-item">
          <FaCircleInfo />
          <span>Help</span>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
