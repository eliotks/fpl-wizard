import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import { WithStyles, createStyles } from "@material-ui/styles"
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = () => 
    createStyles({
    root: {
        // 262626 1F4B69 215F8A 1268A4 030D17 101D29
        backgroundColor: "#030D17",
        position: "fixed",
        padding: 24,
        paddingTop: 28,
        boxShadow: "0px 0px 10px 1px #030D17",
        zIndex: 2,
    },
    mainLogo: {
        fontFamily: "Nunito, sans-serif",
        fontStyle: 'normal',
        fontSize: 25,
        fontWeight: 600,
        letterSpacing: -1,
        color: "#FFFFFF",
    },
    about: {
        color: "#FFFFFF",
        paddingRight: 20,
    },
    aboutText: {
        fontSize: 20,
    }
});


type IProps = WithStyles<typeof styles>

const Header: React.FunctionComponent<IProps> = props =>  {
    
    const { classes } = props;
    return (
        <Grid
            className={classes.root}
            container 
            direction="row"
            justify="space-between"
            alignItems="center"
        >
            <Grid item>
                <Link component={RouterLink} to="/" underline="none">
                    <Typography className={classes.mainLogo}> FPL DREAM TEAM </Typography>
                </Link>
            </Grid>
            <Grid item className={classes.about}>
                <Link component={RouterLink} to="/about" color="inherit">
                    <Typography className={classes.aboutText}> ABOUT </Typography>
                </Link>
            </Grid>
        </Grid>
    )
}


export default withStyles(styles)(Header);