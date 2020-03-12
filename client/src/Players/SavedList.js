import React from 'react';

import { Link } from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Players:</h3>
    {props.list.map(player => (
      <span className="saved-player">{player.title}</span>
    ))}
    <div className="home-button">
      <Link to="/">
        Home
      </Link>
    </div>
  </div>
);

export default SavedList;