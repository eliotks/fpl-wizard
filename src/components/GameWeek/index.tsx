import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { WithStyles } from "@material-ui/styles"
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const styles = {
  root: {
    padding: 16,
    borderRadius: 3
  },
  header: {
      fontSize: 18
  }
};

interface IGameWeek {
    gameweek: string
  }

type IProps = WithStyles<typeof styles> & IGameWeek

const GameWeek: React.FunctionComponent<IProps> = props =>  {
    const [expanded, setExpanded] = React.useState<boolean>(false);
    
    const { classes, gameweek } = props;
    return (
        <Accordion  className={classes.root} expanded={expanded} onChange={() => setExpanded(! expanded)}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.header}>{"GameWeek  " + gameweek}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Grid container direction="column">
                    <Grid item >
                        <Typography>
                            Spiller 1:
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Typography>
                            Spiller 2:
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Typography>
                            Spiller 3:
                        </Typography>
                    </Grid>
                </Grid>
            </AccordionDetails>
        </Accordion>
    )
  }



export default withStyles(styles)(GameWeek);