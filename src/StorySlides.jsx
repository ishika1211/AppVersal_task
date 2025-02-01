import React from 'react';

const StorySlides = ({ story, onClose }) => {
  return (
    <div className="story-slides-overlay">
      <div className="story-slides-container">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {story.slides.map((slide) => (
          <div key={slide.id} className="slide">
            <img src={slide.image} alt={`Slide ${slide.order}`} />
            {slide.button_text && (
              <a href={slide.link} className="slide-button">
                {slide.button_text}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StorySlides;