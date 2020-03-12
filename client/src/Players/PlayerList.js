import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import PlayerCard from './PlayerCard';

export default class PlayerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(response => {
        this.setState(() => ({ players: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  render() {
    return (
      <div className="player-list">
        {this.state.players.map(player => (
          <PlayerDetails key={player.id} player={player} />
        ))}
      </div>
    );
  }
}

function PlayerDetails({ player }) {
  const { id } = player;
  return (
    <NavLink to={`/players/${id}`}>
      <PlayerCard player={player} />
    </NavLink>
  );
}