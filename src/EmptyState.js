import React from 'react';
import Typography from '@material-ui/core/Typography';
import MissingNo from './missingno.png';

const EmptyState = ({ searchValue }) => (
  <div style={{ padding: '100px', textAlign: 'center' }}>
    <img alt="missingno" src={MissingNo} style={{ height: 200 }} />
    <Typography variant="h5" gutterBottom>
      No pokemon match <em><strong>{searchValue}</strong></em>
    </Typography>
  </div>
);

export default EmptyState;
