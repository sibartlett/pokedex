import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const SPRITE_ORDER = [
  'front_default',
  'back_default',
  'front_female',
  'back_female',
  'front_shiny',
  'back_shiny',
  'front_shiny_female',
  'back_shiny_female',
];

const filterSprites = sprites => {
  return SPRITE_ORDER.map(key => sprites[key]).filter(x => x);
};

const useStyles = makeStyles(theme => ({
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const Pokemon = ({ name, size, sprites, ...props }) => {
  const images = filterSprites(sprites);

  const [index, setIndex ] = useState(0);

  const onClick = () => {
    setIndex((index + 1) % images.length);
  };

  return (
    <GridListTile {...props} onClick={onClick} style={{ cursor: 'pointer', ...props.style }}>
      <img src={images[index]} alt={name} style={{ height: size, width: size }} />
      <GridListTileBar title={name} />
    </GridListTile>
  );
};

export default Pokemon;
