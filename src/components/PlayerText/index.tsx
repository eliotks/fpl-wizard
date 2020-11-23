import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { WithStyles } from "@material-ui/styles"
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { IPlayer } from '../../data/interfaces';


const styles = {
  root: {
    paddingLeft: 2,
    paddingRight: 2,
  }
}


type IProps = WithStyles<typeof styles> & IPlayer

const PlayerText = (props: IProps) => {
  const { classes, name, team, prediction, score } = props
  return (
    <Card className={classes.root}>
      <Typography align="center" style={{ fontSize: 8, fontWeight: "bold" }}>{name}</Typography>
      <Grid container justify="space-around">
        <Grid>
        <Typography align="center" style={{ fontSize: 8, fontWeight: "bold" }}>{"Pred: " + prediction.toString()}</Typography>
        </Grid>
        <Grid>
        <Typography align="center" style={{ fontSize: 8, fontWeight: "bold" }}>{"Score: " + score.toString()}</Typography>
        </Grid>
      </Grid>
    </Card>
  );
}

export default withStyles(styles)(PlayerText);