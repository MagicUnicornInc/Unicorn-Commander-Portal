import React, { useState, useMemo } from 'react';
import AppCard from './AppCard';
import { apps, categories } from '../data/apps';

function Dashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredApps = useMemo(() => {
    return apps.filter(app => {
      const matchesSearch = app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          app.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || app.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <main className="flex-1 p-8 overflow-auto">
      <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full sm:w-96 px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="flex gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedCategory === 'All'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {filteredApps.length === 0 ? (
        <div className="text-center text-gray-400 mt-12">
          <p className="text-xl">No products found matching your search criteria</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredApps.map(app => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </main>
  );
}

export default Dashboard;
