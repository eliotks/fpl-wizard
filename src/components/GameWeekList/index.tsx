import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { WithStyles } from "@material-ui/styles";
import GameWeek from '../GameWeek';


const styles = {
  root: {
    padding: 10,
    '& > div': {
        marginBottom: 25,
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
                return <GameWeek gameweekNumber={item}/>
            })}
        </div>
    )
  }



export default withStyles(styles)(GameWeekList);