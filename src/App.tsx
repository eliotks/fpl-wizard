import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { WithStyles } from "@material-ui/styles"
import Header from './components/Header';
import Main from './views/Main';
import About from './views/About';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Image1 from './pictures/alex-KEEpi-SOM_s-unsplash.jpg';
import Image2 from './pictures/henrique-macedo-8RzMsxk3wgg-unsplash.jpg';
import Image3 from './pictures/vienna-reyes-qCrKTET_09o-unsplash.jpg';
import Image4 from './pictures/kpio.jpg';
import Image5 from './pictures/willian-justen-de-vasconcellos-KqpDuf1i83w-unsplash.jpg';

const styles = {
  root: {
    backgroundImage:  `url(${Image5})`,
    //background: "#34507d",
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
      <div className={classes.root}>
          <Header></Header>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/">
                <Main/>
            </Route>
          </Switch>
      </div>
    </Router>
  );
}


export default withStyles(styles)(App);
