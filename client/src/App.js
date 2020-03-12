import React, { useState } from 'react';

import SavedList from './Players/SavedList';
import { Route } from 'react-router-dom';

import PlayerList from './Players/PlayerList';
import Player from './Players/Player';

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = player => {
    setSavedList([...savedList, player]);
  };

  return (
    <div>
      <SavedList list={savedList} />

      <Route exact path={`/`} render={() => <PlayerList />} />
      <Route exact path={`/players/:id`} render={(props) => <Player {...props}/>} />
    </div>
  );
};

export default App;