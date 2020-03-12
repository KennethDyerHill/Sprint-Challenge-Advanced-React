import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PlayerCard from './PlayerCard';

const PlayerList = props => {
  const [players, setPlayers] = useState([])
  console.log(players)
  useEffect(() => {
    const getPlayers = () => {
      axios
        .get('http://localhost:5000/api/players/')
        .then(response => {
          setPlayers(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getPlayers();
  }, []);
  
  return (
    <div className="player-list">
      {players.map(player => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </div>
  );
}

export default PlayerList;