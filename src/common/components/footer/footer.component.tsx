import React from 'react';
import { Typography } from '@mui/material';
import { CopyrightComponent } from './components';
import * as classes from './footer.styles';

export const FooterComponent: React.FC = () => (
  <footer className={classes.footer}>
    <Typography variant="h6" align="center" gutterBottom>
      Origin
    </Typography>
    <CopyrightComponent />
  </footer>
);
