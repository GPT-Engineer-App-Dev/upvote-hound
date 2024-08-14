import React from 'react';
import { useHackerNews } from '../contexts/HackerNewsContext';
import StoryItem from './StoryItem';
import SkeletonLoader from './SkeletonLoader';

const HackerNewsList = () => {
  const { stories, loading } = useHackerNews();

  if (loading) {
    return <SkeletonLoader count={10} />;
  }

  return (
    <div className="space-y-4">
      {stories.map((story) => (
        <StoryItem key={story.objectID} story={story} />
      ))}
    </div>
  );
};

export default HackerNewsList;