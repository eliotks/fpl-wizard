import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import { WithStyles } from "@material-ui/styles"
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = {
    root: {
        padding: 24,
    },
};


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
            <Link component={RouterLink} to="/about">
                <Typography> HEI </Typography>
            </Link>
                
            </Grid>
            <Grid item>
                <Typography> HEI </Typography>
            </Grid>
        </Grid>
    )
}


export default withStyles(styles)(Header);