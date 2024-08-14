import React, { createContext, useContext, useState, useEffect } from 'react';

const HackerNewsContext = createContext();

export const useHackerNews = () => useContext(HackerNewsContext);

export const HackerNewsProvider = ({ children }) => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchStories = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=100&query=${searchQuery}`
        );
        const data = await response.json();
        setStories(data.hits);
      } catch (error) {
        console.error('Error fetching stories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, [searchQuery]);

  return (
    <HackerNewsContext.Provider value={{ stories, loading, searchQuery, setSearchQuery }}>
      {children}
    </HackerNewsContext.Provider>
  );
};