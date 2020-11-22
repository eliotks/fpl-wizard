import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { WithStyles } from "@material-ui/styles"
import Container from '@material-ui/core/Container';
import GameWeekList from './components/GameWeekList';
import Header from './components/Header';

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
  gameweekList: {
    padding: "40px 100px 0px 100px",
  },
  field: {
    width: '100%',
    padding: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
};


type IProps = WithStyles<typeof styles>

const App: React.FunctionComponent<IProps> = props => {
  const { classes } = props;
  return (
    <Router>
      <Header></Header>
      <div className={classes.root}>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <Container>
              hei
            </Container>
          </Route>
          <Route path="/">
            <Container>
              <GameWeekList/>
            </Container>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default withStyles(styles)(App);
