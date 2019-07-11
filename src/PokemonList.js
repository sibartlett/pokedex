import React, { useRef } from 'react';
import GridList from '@material-ui/core/GridList';
import EmptyState from './EmptyState';
import Pokemon from './Pokemon';

const POKEMON_SIZE = 96 * 2;

const PokemonList = ({ pokemon, searchValue }) => {
  const rootRef = useRef(null);

  const cols = rootRef.current ? Math.floor(rootRef.current.parentNode.getBoundingClientRect().width / POKEMON_SIZE) : 3;

  const pokemons = pokemon.filter(mon => !searchValue || mon.name.includes(searchValue));
  
  if (searchValue && pokemons && pokemons.length === 0) {
    return <EmptyState searchValue={searchValue} />;
  }

  return (
    <div ref={rootRef} style={{ width: '100%' }}>
      <GridList cellHeight={POKEMON_SIZE} cols={cols}>
        {pokemons.map(pokemon => (
          <Pokemon key={pokemon.id} {...pokemon} size={POKEMON_SIZE} />
        ))}
      </GridList>
    </div>
  );
}

export default PokemonList;
