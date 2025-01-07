import React, { useState } from 'react';

function AppCard({ app }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = app.icon;

  return (
    <div
      className="app-card relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-3 right-3">
        <div className="flex items-center gap-2">
          <span className={`text-sm ${app.status === 'online' ? 'text-green-400' : 'text-red-400'}`}>
            {app.status}
          </span>
          <div className={`w-3 h-3 rounded-full ${app.status === 'online' ? 'bg-green-500' : 'bg-red-500'}`} />
        </div>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-lg overflow-hidden bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold">{app.name}</h3>
          <span className="text-sm text-purple-400">{app.category}</span>
        </div>
      </div>

      <p className="text-gray-400 mb-4 line-clamp-2">{app.description}</p>

      <div className="relative">
        <a
          href={app.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full py-2 px-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg text-center font-medium transition-all duration-300 hover:from-indigo-600 hover:to-purple-600"
        >
          Launch Product
        </a>
        {isHovered && (
          <div className="absolute bottom-full left-0 right-0 mb-2 p-2 bg-gray-900 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <p className="text-sm text-gray-300">Opens in new tab: {app.url}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AppCard;
