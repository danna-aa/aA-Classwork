import React from 'react';
import Tile from './tile';

class Board extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    console.log(this.props.board.grid);
    return (
      <div className="board">

        {/* <h1>Board is Working</h1> */}
      
        {
          this.props.board.grid.map((row, i) => {
            return(
              <div className={'row ' + i} key={i}>
                {
                  row.map((tile, j) => {
                    return (
                   
                      <Tile key={j} tile={tile} updateGame={this.props.updateGame } pos={[i,j]}/>
                 
                    )
                  })
                }
              </div>
            )
          })
        }

      </div>
    )
  }
}

export default Board;