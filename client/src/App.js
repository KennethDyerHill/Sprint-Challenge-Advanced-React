import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Players/SavedList';
import PlayerList from './Players/PlayerList';
import Player from './Players/Player';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: [],
      playerInList: null
    };
  }

  addToSavedList = player => {
    const savedList = this.state.savedList;
    const findPlayer = savedList.find(el => player.id === el.id);
    if (findPlayer) {
      this.setState({ playerInList: `You've already saved that player!` });
      setTimeout(() => this.setState({ playerInList: null }), 2000);
    } else {
      savedList.push(player);
    }

    this.setState({ savedList });
  };

  render() {
    const { playerInList } = this.state;
    return (
      <div>
        {playerInList !== null ? (
          <h3 className="player-warning">{playerInList}</h3>
        ) : null}
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component={PlayerList} />
        <Route
          path="/players/:id"
          render={props => (
            <Player {...props} addToSavedList={this.addToSavedList} />
          )}
        />
      </div>
    );
  }
}