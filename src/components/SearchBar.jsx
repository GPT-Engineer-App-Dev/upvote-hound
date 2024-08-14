import React from 'react';
import { useHackerNews } from '../contexts/HackerNewsContext';

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useHackerNews();

  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Search stories..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchBar;