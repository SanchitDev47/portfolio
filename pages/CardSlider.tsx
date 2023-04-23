import React, { useState } from 'react';
// import './CardSlider.css';

interface Card {
  title: string;
  description: string;
  image: string;
}

interface CardSliderProps {
  cards: Card[];
}

const CardSlider: React.FC<CardSliderProps> = ({ cards }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNext = () => {
    setIsFlipped(false);
    setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card-slider">
      <div
        className={`card ${isFlipped ? 'flip' : ''}`}
        onClick={handleFlip}
      >
        <div className="card-front">
          <img src={cards[activeIndex].image} alt={cards[activeIndex].title} />
          <h2>{cards[activeIndex].title}</h2>
        </div>
        <div className="card-back">
          <p>{cards[activeIndex].description}</p>
        </div>
      </div>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default CardSlider;
