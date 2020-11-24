import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { WithStyles } from "@material-ui/styles";
import GameWeek from '../GameWeek';
import Container from '@material-ui/core/Container';


const styles = {
    root: {
        // Måtte sette denne til akkurat 1144 for å få midtstilt Fields. Virker som Container har 24 padding, og er 3 Containere før Field.
        width: 1144,
        '& > div': {  
            margin: "auto",
            marginBottom: 70,
        },
    },
};

type IProps = WithStyles<typeof styles>

const GameWeekList: React.FunctionComponent<IProps> = props =>  {
    const { classes } = props;

    const gameweeks: number[] = [9, 8, 7, 6, 5, 4]

    return (
        <Container className={classes.root}>
            {gameweeks.map((item, index) => {
                return <Container> <GameWeek gameweekNumber={item}/> </Container>
            })}
        </Container>
    )
}



export default withStyles(styles)(GameWeekList);