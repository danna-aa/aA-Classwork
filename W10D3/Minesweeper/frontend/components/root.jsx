import React from 'react';

import Board from './board';
import Game from './game';
import Tile from './tile';

// import { Tile as GameTile, Board as GameBoard } from '../../minesweeper';

class Root extends React.Component {
  render() {
    return (
      <div>
          {/* <h1>Root is Working</h1> */}
          <Game/>
      </div>
    );
  }
}

export default Root;