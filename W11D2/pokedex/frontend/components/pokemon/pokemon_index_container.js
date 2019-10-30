import { connect } from 'react-redux';
import selectAllPokemon from '../../reducers/selectors'
import { requestAllPokemon } from '../../actions/pokemon_actions'
import { fetchAllPokemon } from '../../util/api_util'
import PokemonIndex from './pokemon_index'

const mapStateToProps = state => ({
  pokemon: selectAllPokemon(state),
  errors: state.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    requestAllPokemon: () => dispatch(requestAllPokemon())
});
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex);