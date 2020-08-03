import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core';
import React from 'react';
import BackgroundImage from '../assets/images/Background.jpg';

const PictureBackgroundComponent = ({ classes }) => {
  return <div className={classes.picture}>{element.props.children}</div>;
};

const styles = {
  picture: {
    minHeight: 100 + 'vh',
    backgroundSize: 'cover',
    backgroundImage: 'url(' + BackgroundImage + ')',
  },
};

export const PictureBackground = withStyles(styles)(PictureBackgroundComponent);
