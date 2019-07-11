import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from './SearchBar';
import PokemonList from './PokemonList';

const NUM_OF_POKEMON = 151;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    paddingTop: '68px'
  }
}));

const Pokedex = () => {
  const classes = useStyles();

  const [urls, setUrls] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const [searchValue, setSearchVaue] = useState('');

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${NUM_OF_POKEMON}`)
      .then(response => response.json())
      .then(json => setUrls(json.results));
  }, []);

  useEffect(
    () => {
      if (!urls.length) {
        return;
      }

      const [url, ...otherUrls] = urls;

      fetch(url.url)
        .then(response => response.json())
        .then(mon => {
          setPokemon([...pokemon, mon]);
          setUrls(otherUrls);
        })
    },
    [
      urls.map(({ name }) => name).join('')
    ]
  );

  return (
    <div className={classes.root}>
      <SearchBar onChange={event => setSearchVaue(event.target.value)} progress={(pokemon.length / NUM_OF_POKEMON) * 100} value={searchValue} />
      <PokemonList pokemon={pokemon} searchValue={searchValue} />
    </div>
  );
};

export default Pokedex;
