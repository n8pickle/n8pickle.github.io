import React from 'react';
import { withStyles } from '@material-ui/core';

const AboutComponent = ({ classes }) => {
  return <h1>Nathan Pickle</h1>;
};

const styles = {};

export const AboutPage = withStyles(styles)(AboutComponent);
