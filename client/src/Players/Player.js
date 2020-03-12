import React, { Component } from 'react';
import axios from 'axios';
import PlayerCard from './PlayerCard';

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: null
    };
  }

  componentDidMount() {
    // change this line to grab the id passed on the URL
    const { id } = this.props.match.params;
    this.fetchPlayer(id);
  }

  fetchPlayer = id => {
    axios
      .get(`http://localhost:5000/api/players/${id}`)
      .then(response => {
        this.setState(() => ({ player: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
  };
  // Uncomment this code when you're ready for the stretch problems
  // componentWillReceiveProps(newProps) {
  //   if (this.props.match.params.id !== newProps.match.params.id) {
  //     this.fetchMovie(newProps.match.params.id);
  //   }
  // }

  savePlayer = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.player);
  };

  render() {
    if (!this.state.player) {
      return <div>Loading player information...</div>;
    }

    const { player } = this.state;
    return (
      <div className="save-wrapper">
        <PlayerCard player={player} />
        <div className="save-button" onClick={() => this.savePlayer()}>
          Save
        </div>
      </div>
    );
  }
}