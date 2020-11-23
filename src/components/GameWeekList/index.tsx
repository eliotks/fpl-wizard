import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { WithStyles } from "@material-ui/styles";
import GameWeek from '../GameWeek';
import Container from '@material-ui/core/Container';


const styles = {
  root: {
    padding: 40,
    '& > div': {
        marginBottom: 70,
    },
  },
};

type IProps = WithStyles<typeof styles>

const GameWeekList: React.FunctionComponent<IProps> = props =>  {
    const { classes } = props;

    const gameweeks: number[] = [9, 8, 7, 6, 5, 4]

    return (
        <div className={classes.root}>
            {gameweeks.map((item, index) => {
                return <Container><GameWeek gameweekNumber={item}/></Container>
            })}
        </div>
    )
  }



export default withStyles(styles)(GameWeekList);