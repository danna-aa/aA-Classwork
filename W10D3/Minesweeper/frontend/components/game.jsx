import React from 'react';
import Board from './board';
import { Board as GameBoard } from '../../minesweeper';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: new GameBoard(10, 10)
    };
    this.updateGame = this.updateGame.bind(this);
  }
  
  updateGame(tile, boolean) {
    if (boolean) {
      tile.explore();
    } else {
      tile.toggleFlag();
    }

    
  }
  
  render() {
    return (
      <div>
        <h1 className="title">Minesweeper</h1>
        <Board
          board={ this.state.board }
          updateGame={ this.updateGame }
        />
      </div>
    )
  }
}

export default Game;