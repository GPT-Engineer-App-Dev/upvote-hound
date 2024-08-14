import React from 'react';
import HackerNewsList from '../components/HackerNewsList';
import SearchBar from '../components/SearchBar';
import { HackerNewsProvider } from '../contexts/HackerNewsContext';

const Index = () => {
  return (
    <HackerNewsProvider>
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Hacker News Top 100</h1>
        <SearchBar />
        <HackerNewsList />
      </div>
    </HackerNewsProvider>
  );
};

export default Index;