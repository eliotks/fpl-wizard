import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { WithStyles } from "@material-ui/styles"
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';


const styles = {
  root: {
    paddingLeft: 2,
    paddingRight: 2,
  }
}

interface IPlayerProps {
  name: string,
  team: string,
  prediction: number,
  score: number
}

type IProps = WithStyles<typeof styles> & IPlayerProps

const PlayerText = (props: IProps) => {
  const { classes, name, team, prediction, score } = props
  return (
    <Card className={classes.root}>
      <Typography align="center" style={{ fontSize: 8, fontWeight: "bold" }}>{name}</Typography>
      <Grid container justify="space-around">
        <Grid>
        <Typography align="center" style={{ fontSize: 8, fontWeight: "bold" }}>{"Pred: " + prediction}</Typography>
        </Grid>
        <Grid>
        <Typography align="center" style={{ fontSize: 8, fontWeight: "bold" }}>{"Score: " + score}</Typography>
        </Grid>
      </Grid>
    </Card>
  );
}

export default withStyles(styles)(PlayerText);