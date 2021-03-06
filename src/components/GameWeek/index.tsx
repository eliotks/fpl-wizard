import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { WithStyles } from "@material-ui/styles"
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Container from '@material-ui/core/Container';
import Field from '../Field';
import Grid from '@material-ui/core/Grid';
import { isKeyof } from '../../helpers';
import gameweeks from '../../data/gameweeks.json';
import { IGameWeek } from '../../data/interfaces';


const styles = {
    root: {
        width: 1000,
        // Fixes some weird bug
        '&:before': {
            height: "0",
        },
        boxShadow: "0px 1px 5px 1px #030D17",
        background: `repeating-linear-gradient(#ffffff, #ffffff 300px, #27EE14 300px, #27EE14)`
    },
    header: {
        fontSize: 16,
        fontFamily: "Nunito, sans-serif",
        fontStyle: 'normal',
        fontWeight: 500,
        color: "#030D17",
    },
    summary: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 6,
        paddingBottom: 6,
    },
    field: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
        
    },
};

interface IGameWeekProps {
    gameweekNumber: number
}


type IProps = WithStyles<typeof styles> & IGameWeekProps

const GameWeek: React.FunctionComponent<IProps> = props =>  {
    const [expanded, setExpanded] = React.useState<boolean>(false);
    const { classes, gameweekNumber } = props;

    const gameweekNumberString: string = gameweekNumber.toString()
    const gameweek: IGameWeek | undefined = isKeyof(gameweeks, gameweekNumberString) ? gameweeks[gameweekNumberString] : undefined

    return (
        <Container>
            {gameweek !== undefined && (
            <Accordion className={classes.root} expanded={expanded} onChange={() => setExpanded(! expanded)} style={{ borderRadius: 30 }}>
                <AccordionSummary className={classes.summary} expandIcon={<ExpandMoreIcon/>}>
                    <Grid container spacing={10}>
                        <Grid item>
                            <Typography className={classes.header}>{"GAMEWEEK  " + gameweekNumber.toString()}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.header}>{"SCORE:  " + gameweek.totalPoints.toString()}</Typography>
                        </Grid>
                    </Grid>
                </AccordionSummary>
                <AccordionDetails>
                    <Container className={classes.field}> <Field gameweek={gameweek}/> </Container>
                </AccordionDetails>
            </Accordion>
            )}
        </Container>
    )
}


export default withStyles(styles)(GameWeek);