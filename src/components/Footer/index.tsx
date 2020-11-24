import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import { WithStyles, createStyles } from "@material-ui/styles"
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const styles = () => 
    createStyles({
    root: {
        backgroundColor: "#030D17",
        position: "absolute",
        padding: 16,
        paddingTop: 16,
        boxShadow: "0px 0px 5px 1px #030D17",
        zIndex: 2,
    },
    names: {
        color: "#ffffff",
        paddingRight: 20,
    },
    text: {
        fontSize: 14,
    }
});


type IProps = WithStyles<typeof styles>

const Footer: React.FunctionComponent<IProps> = props =>  {
    
    const { classes } = props;
    return (
        <Grid
            className={classes.root}
            container 
            direction="row"
            justify="space-around"
            alignItems="center"
        >
            <Grid item className={classes.names}>
                <Grid item container direction="row" alignItems="center">
                    <Grid item>
                    <Typography className={classes.text}>Lars Hegg Gundersen </Typography>
                    </Grid>
                    <Grid item>
                    <IconButton target="_blank" href="https://www.linkedin.com/in/lars-hegg-gundersen?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B36Cg4YBzQdOQ5mZDX%2Bg7BA%3D%3D" color="inherit">
                        <LinkedInIcon/>
                    </IconButton>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item className={classes.names}>
                <Grid item container direction="row" alignItems="center">
                    <Grid item>
                    <Typography className={classes.text}>Eliot Karlsen Strobel </Typography>
                    </Grid>
                    <Grid item>
                    <IconButton target="_blank" href="https://www.linkedin.com/in/eliot-strobel-3552b3130?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BTGHMQZQKRKSvpeUi8CkAaA%3D%3D" color="inherit">
                        <LinkedInIcon/>
                    </IconButton>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item className={classes.names}>
                <Grid item container direction="row" alignItems="center">
                    <Grid item>
                    <Typography className={classes.text}>Markus Malum Kim </Typography>
                    </Grid>
                    <Grid item>
                    <IconButton target="_blank" href="https://www.linkedin.com/in/markus-malum-kim-48281117a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BykqQ6ZGqQ0GVttxANc4g6w%3D%3D" color="inherit">
                        <LinkedInIcon/>
                    </IconButton>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}


export default withStyles(styles)(Footer);