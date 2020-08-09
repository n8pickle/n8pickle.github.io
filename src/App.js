import React from 'react';
import './App.css';
import AboutPage from './pages/AboutPage';
import { ResumePage } from './pages/ResumePage';
import { BrowserRouter, Route } from 'react-router-dom';
import { withStyles, Card } from '@material-ui/core';
import BackgroundImage from './assets/images/Background.jpg';

export const AppComponent = ({ classes }) => {
  return (
    <BrowserRouter>
      <div className={classes.picture}>
        <Card className={classes.background}>
          <Route to='/about' compontent={AboutPage} />
          <Route to='/resume' compontent={ResumePage} />
        </Card>
      </div>
    </BrowserRouter>
  );
};

const styles = {
  background: {
    width: '80%',
    maxWidth: '1000px',
    marginTop: '3%',
    marginBottom: '3%',
    height: '95vh',
    background: 'rgba(10, 10, 10, 0.4)',
  },
  picture: {
    backgroundSize: 'cover',
    minHeight: 100 + 'vh',
    backgroundImage: 'url(' + BackgroundImage + ')',
    display: 'flex',
    justifyContent: 'center',
  },
};

export const App = withStyles(styles)(AppComponent);
