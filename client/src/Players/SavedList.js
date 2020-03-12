import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Players:</h3>
        {this.props.list.map(player => (
          <span className="saved-player">{player.title}</span>
        ))}
        <Link to="/" className="home-button">
          Home
        </Link>
      </div>
    );
  }
}