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


const styles = {
  root: {
    background: "#34507d",
    minHeight: '100vh',
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
