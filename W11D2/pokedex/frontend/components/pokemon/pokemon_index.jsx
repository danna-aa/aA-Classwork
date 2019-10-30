import React from 'react';
import requestAllPokemon from '../../actions/pokemon_actions'
import PokemonListItem from './pokemon_list_item'
// import receiveAllPokemon from '../../actions/pokemon_actions'
import { HashRouter, Route } from "react-router-dom";

class PokemonIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllPokemon();
  }
  
  render() {
    
    const pokemonItems = this.props.pokemon.map(poke => (
      <PokemonListItem
        key={ poke.id }
        poke={ poke } />
      // <li>{poke}</li>
      )
    );

    return (
      <div>
        <ul className="pokemon-index">
          { pokemonItems }
        </ul>
      </div>
    )
  }

}

export default PokemonIndex;