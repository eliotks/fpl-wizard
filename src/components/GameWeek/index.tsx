import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { WithStyles } from "@material-ui/styles"
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Container from '@material-ui/core/Container';
import Field from '../Field';

// import Image from '../../field.svg'; // Import using relative path
// import { ReactComponent as Field} from '../../field.svg';
// import { renderToStaticMarkup } from 'react-dom/server';

// const svgString = encodeURIComponent(renderToStaticMarkup(<Field/>));

const styles = {
    root: {
        padding: 16,
        borderRadius: 3
    },
    header: {
        fontSize: 18
    },
    field: {
        width: '100%',
        padding: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
};

interface IGameWeek {
    gameweekNumber: number
}


type IProps = WithStyles<typeof styles> & IGameWeek

const GameWeek: React.FunctionComponent<IProps> = props =>  {
    const [expanded, setExpanded] = React.useState<boolean>(false);
    
    const { classes, gameweekNumber } = props;
    return (
        <Accordion  className={classes.root} expanded={expanded} onChange={() => setExpanded(! expanded)}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.header}>{"GameWeek  " + gameweekNumber.toString()}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Container className={classes.field}> <Field gameweekNumber={gameweekNumber}/> </Container>
            </AccordionDetails>
        </Accordion>
    )
}


export default withStyles(styles)(GameWeek);