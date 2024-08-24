import React from 'react'
import StarYellow from '../../src/assets/img/yellow-star.png'; 
import StarGrey from '../../src/assets/img/grey-star.png';

export default function StarsNotation({rating}) {
  const totalStars = 5; // Nombre total d'étoiles
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    const starIcon = i <= rating ? StarYellow : StarGrey;
    stars.push(<img key={i} src={starIcon} alt="star" className="w-[8px] h-[8px]" />);
  }
  return (
    <div className="flex">
      {stars}
    </div>
  )
}
