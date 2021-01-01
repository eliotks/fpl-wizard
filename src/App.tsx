import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { WithStyles } from "@material-ui/styles"
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './views/Main';
import About from './views/About';
import ScrollToTop from './components/ScrollToTop';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Image from './pictures/kpio.jpg';


const styles = {
  root: {
    backgroundImage:  `url(${Image})`,
    minHeight: '100vh',
    backgroundSize: "100%",
    backgroundRepeat: "repeat",
  },
};


type IProps = WithStyles<typeof styles>


const App: React.FunctionComponent<IProps> = props => {
  const { classes } = props;
  return (
    <Router>
      <ScrollToTop/>
      <Header/>
      <div className={classes.root}>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
                <About/>
            </Route>
            <Route  path="/">
                <Main/>
            </Route>
          </Switch>
          <Footer/>
        </div>
    </Router>
  );
}


export default withStyles(styles)(App);
