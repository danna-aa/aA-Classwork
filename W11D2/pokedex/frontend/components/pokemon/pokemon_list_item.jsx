import React from 'react';
// import requestAllPokemon from '../../actions/pokemon_actions'

class PokemonListItem extends React.Component {
  
  render() {
    console.log(this.props)
    return (
      <li className="pokemon-list-item">
        <div className='pokemon-id'>
          {this.props.poke.id}
        </div>
        <img className='pokemon-img' src={this.props.poke.image_url} alt=""/>
        <div className='pokemon-name'>
          {this.props.poke.name}  
        </div>
      </li>
    )
  }

}

export default PokemonListItem;