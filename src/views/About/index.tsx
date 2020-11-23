import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { WithStyles, createStyles } from "@material-ui/styles"
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


const styles = () => 
createStyles({
    root: {
        padding: "80px 0px 0px 0px",
    }, 
    header: {
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        padding: 100,
        backdropFilter: "blur(20px) opacity(0.8)",
    },
    heading: {
        fontFamily: "Nunito, sans-serif",
        fontStyle: 'normal',
        fontSize: 60,
        fontWeight: 700,
        color: "#FFFFFF",
    },
    content: {
        backgroundColor: "rgba(13, 20, 43, 0.74)",
        backdropFilter: "blur(20px) opacity(0.8)",
        minHeight: "400px",
        backgroundSize: "100%",
        padding: 100,
    },
    text: {
        fontFamily: "Nunito, sans-serif",
        fontStyle: 'normal',
        fontSize: 20,
        fontWeight: 400,
        color: "#FFFFFF",
    },
});


type IProps = WithStyles<typeof styles>

const About: React.FunctionComponent<IProps> = props =>  {
    
    const { classes } = props;
    return (
        <div className={classes.root}>
                <Container maxWidth={false} className={classes.header}> 
                    <Typography className={classes.heading} align="center">HOW IT WORKS</Typography> 
                </Container>
                <Container maxWidth={false} className={classes.content}>
                     <Typography className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography> 
                </Container>
        </div>
    )
}


export default withStyles(styles)(About);