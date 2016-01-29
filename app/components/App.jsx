import uuid from 'node-uuid';
import React from 'react';

export default class App extends React.Component {
  render() {

    const gameNight = {
      id: uuid.v4(),
      title: 'Tuesday Game Night',
      gameDate: 1/24/2016,
      gameTimeStarts: '6:30 PM CST',
      gameLocation: {
        name: 'Vallhala\'s Gate',
        street: '1111 Main Street',
        apt: '',
        city: 'AnyTown',
        state: 'MO',
        zipcode: 12345
      },
      game: {
        id: 31260,
        name: 'Agricola',
        thumbnail: 'http://cf.geekdo-images.com/images/pic259085_t.jpg',
        minplayers: 1,
        maxplayers: 5,
        playtime: '30 - 150 minutes'
      },
      gameHost: 'Jim',
    playersDesiredMin: 2,
    playersDesiredMax: 4,
    playersJoined: ['Bob', 'Jenny']
    }
    return (
      <div key={gameNight.id}>
        <h1>{gameNight.title}</h1>
        <h2>{gameNight.gameTimeStarts} at {gameNight.gameLocation.name}</h2>
        <h6>{gameNight.game.name}</h6>
        <img src={gameNight.game.thumbnail}/>
        <h6>We're playing {gameNight.game.name} and we need {gameNight.playersDesiredMin} - {gameNight.playersDesiredMax} players.</h6>
        <h6>The game with take about {gameNight.game.playtime}.</h6>
      </div>
      );
  }
}