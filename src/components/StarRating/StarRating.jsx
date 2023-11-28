import {useState} from 'react';
import Star from '../Star/Star';
import styles from './StarRating.module.css';

const StarRating = ({rating, onRatingChange }) => {
  const max = 5;
  const [starRating, setStarRating] = useState(rating);

  const handleStarClick = (selectedRating) => {
    setStarRating(selectedRating);
    if (onRatingChange) {
      onRatingChange(selectedRating);
    }
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= max; i++) {
      const fillPercentage = calcFillPercentage(i);
      stars.push(
        <Star
          key={i}
          fillPercentage={fillPercentage}
          onClick={() => handleStarClick(i)}
        />
      );
    }
    return stars;
  };

  const calcFillPercentage = (starPosition) => {
    const diff = starRating - starPosition + 1;
    if (diff >= 1) return 1;
    if (diff <= 0) return 0;

    return diff;
  };

  return (
    <div>
      <div>
        {renderStars()}
      </div>
      <p>Current Rating: {rating}</p>
    </div>
  );
};

export default StarRating;