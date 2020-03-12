import React from 'react';

const PlayerCard = ({ player }) => {
  const { name, country, id } = player;
  return (
    <div className="player-card">
      <h2>{name}</h2>
      <div className="player-country">
        Country: <em>{country}</em>
      </div>
      {/* <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star} */}
        {/* </div>
      ))} */}
    </div>
  );
};

export default PlayerCard;