import React from 'react';

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "o"
    };
    this.handleClick = this.handleClick.bind(this);
    this.updateTileDisplay = this.updateTileDisplay.bind(this);
    this.adjBombCount = "";
  }
  // this.props.bombed => true / false

  handleClick(e) {
    e.preventDefault();
    let passedTile = this.props.tile;
    let bool = null;
    
    if (e.altKey) {
      bool = false;
    } else {
      bool = true;
    }
    // console.log([passedTile.pos[0], passedTile.pos[1], bool]);
    this.props.updateGame(passedTile, bool);
    this.updateTileDisplay();
    // if (passedTile.flagged) {
    //   this.setState({ status: 'f' });
    // } else if (passedTile.bombed) {
    //   this.setState({ status: 'b' });
    // } else if (passedTile.explored) {
    //   this.setState({ status: 'e' });
    //   let numBombs = this.props.tile.adjacentBombCount();
    //   if (numBombs !== 0) {
    //     this.adjBombCount = numBombs;
    //   } else {

    //   }
    // }
  }

  updateTileDisplay() {
    if (this.props.tile.flagged) {
      this.setState({ status: 'f' });
    } else if (this.props.tile.bombed) {
      this.setState({ status: 'b' });
    } else if (this.props.tile.explored) {
      this.setState({ status: 'e' });
      let numBombs = this.props.tile.adjacentBombCount();
      if (numBombs !== 0) {
        this.adjBombCount = numBombs;
      } else {
        //iterate over all neightbors and update tile display on neighbors
        
        this.props.tile.neighbors().forEach(tile => {
          console.log(tile.pos);
          let i = tile.pos[0];
          let j = tile.pos[1];
          
          let displayTile = document.getElementById(`${i},${j}`);
          console.log(displayTile);
          
          // displayTile.updateTileDisplay();
        });
      }
    }
  }

  render() {    
    return (
      <div id={ this.props.pos } className={ 'tile ' + this.state.status } onClick={ this.handleClick }>{this.adjBombCount}</div>
    );
  }
}

export default Tile;