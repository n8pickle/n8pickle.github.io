import React from 'react';
import './App.css';
import AboutPage from './pages/AboutPage';
import { ResumePage } from './pages/ResumePage';
import { BrowserRouter, Route } from 'react-router-dom';
import { PictureBackground } from './pages/PictureBackground';
import { withStyles, Card } from '@material-ui/core';

export const AppComponent = ({ classes }) => {
  return (
    <BrowserRouter>
      <PictureBackground>
        <Card className={classes.background}>
          <Route to='/about' compontent={AboutPage} />
          <Route to='/resume' compontent={ResumePage} />
        </Card>
      </PictureBackground>
    </BrowserRouter>
  );
};

const styles = {
  background: {
    width: '100px',
    height: '100px',
    background: '#222222',
  },
};

export const App = withStyles(styles)(AppComponent);
