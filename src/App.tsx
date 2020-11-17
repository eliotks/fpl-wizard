import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { WithStyles } from "@material-ui/styles"
import Container from '@material-ui/core/Container';
import GameWeekList from './components/GameWeekList'
import Typography from '@material-ui/core/Typography';
import { ReactComponent as Field} from './field.svg';

const styles = {
  root: {
    background: "#34507d",
    minHeight: '100vh',
  },
  header: {
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 40,
    color: "#ffffff",
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
    <div className={classes.root}>
      <Container className={classes.field}>
        <Field />
      </Container>
      <Container>
        <Typography align="center" className={classes.header}>Fantasy Premier League Ponts Prediction</Typography>
      </Container>
      <Container className={classes.gameweekList}>
        <GameWeekList/>
      </Container>
    </div>
  );
}


export default withStyles(styles)(App);
