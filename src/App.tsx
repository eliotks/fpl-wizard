import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { WithStyles } from "@material-ui/styles"
import Header from './components/Header';
import Footer from './components/Footer';
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
import Image6 from './pictures/marble.jpg';
import Image7 from './pictures/marble1.jpg';
import Image8 from './pictures/marble2.png';
import Image9 from './pictures/marble3.png';
import Image10 from './pictures/marble4.jpg';
import Image11 from './pictures/taudalpoi1.jpg';
import Image12 from './pictures/taudalpoi2.jpg';
import Image13 from './pictures/taudalpoi3.jpg';
import Image14 from './pictures/plain1.jpg';

const styles = {
  root: {
    backgroundImage:  `url(${Image8})`,
    //background: "#34507d",
    minHeight: '100vh',
    backgroundSize: "100%",
    backgroundRepeat: "repeat",
  },
  semiRoot: {
    //backdropFilter: "blur(3px)",
  }
};


type IProps = WithStyles<typeof styles>

const App: React.FunctionComponent<IProps> = props => {
  const { classes } = props;
  return (
    <Router>
      <Header/>
      <div className={classes.root}>
        <div className={classes.semiRoot}>
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
      </div>
    </Router>
  );
}


export default withStyles(styles)(App);
