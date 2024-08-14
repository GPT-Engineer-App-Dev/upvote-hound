import React from 'react';

const StoryItem = ({ story }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2">{story.title}</h2>
      <div className="flex justify-between items-center">
        <span className="text-gray-600">Upvotes: {story.points}</span>
        <a
          href={story.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default StoryItem;