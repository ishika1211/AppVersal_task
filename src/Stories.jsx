import React, { useState } from 'react';
import StorySlides from './StorySlides';

const Stories = ({ data }) => {
  const [selectedStory, setSelectedStory] = useState(null);

  const handleStoryClick = (story) => {
    setSelectedStory(story);
  };

  const handleCloseSlides = () => {
    setSelectedStory(null);
  };

  return (
    <div className="stories-container">
      {data.details.map((storyGroup) => (
        <div
          key={storyGroup.id}
          className="story-group"
          onClick={() => handleStoryClick(storyGroup)}
        >
          <div
            className="story-thumbnail"
            style={{ borderColor: storyGroup.ringColor }}
          >
            <img src={storyGroup.thumbnail} alt={storyGroup.name} />
          </div>
          <div className="story-name" style={{ color: storyGroup.nameColor }}>
            {storyGroup.name}
          </div>
        </div>
      ))}

      {selectedStory && (
        <StorySlides story={selectedStory} onClose={handleCloseSlides} />
      )}
    </div>
  );
};

export default Stories;