import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PlayerCard from './PlayerCard';

const Player = (props) => {
  const [player, setPlayer] = useState({});
  const id = props.match.params.id;
  
  useEffect(() => {
    

       axios
        .get(`http://localhost:5000/api/players/${id}`)
        .then(response => {
          setPlayer(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[id]);
  
 

  if (!player) {
    return <div>Loading player information...</div>;
  }

  const { name, country } = player;
  return (
    <div className="save-wrapper">
      <div className="player-card">
        <h2>{name}</h2>
        <div className="player-name">
          Player: <em>{name}</em>
        </div>
        <div className="player-country">
          Country: <strong>{country}</strong>
        </div>
        
      </div>
      <div className="save-button">Save</div>
    </div>
  );
}

export default Player;