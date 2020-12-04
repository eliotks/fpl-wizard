import React from 'react';
import { withStyles, Theme } from '@material-ui/core/styles';
import { WithStyles, createStyles } from "@material-ui/styles"
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { text1, text2, text3, text4, text5 } from './texts';
import classNames from 'classnames';



const styles = (theme: Theme) => 
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
        color: "#030D17",
        // For mobile view
        [theme.breakpoints.down("xs")]: {
            fontSize: 40,
            fontWeight: 500,
        },
    },
    subHeading: {
        fontFamily: "Nunito, sans-serif",
        fontStyle: 'normal',
        fontSize: 40,
        fontWeight: 400,
        color: "#FFFFFF",
        paddingBottom: 8,
        // For mobile view
        [theme.breakpoints.down("xs")]: {
            fontSize: 30,
            paddingTop: 10,
            paddingBottom: 20,
        },
    },
    content: {
        backdropFilter: "blur(20px) opacity(0.8)",
        minHeight: "300px",
        backgroundSize: "100%",
        padding: "50px 180px 50px 180px",
        // For mobile view
        [theme.breakpoints.down("xs")]: {
            padding: "20px 30px 20px 30px",
        },
    },
    content1: {
        backgroundColor: "rgba(13, 20, 43, 0.74)",
    },
    content2: {
        backgroundColor: "rgba(17, 29, 40, 0.74)",
    },
    content3: {
        backgroundColor: "rgba(30, 20, 50, 0.74)",
    },
    content4: {
        backgroundColor: "rgba(12, 12, 30, 0.74)",
    },
    content5: {
        backgroundColor: "rgba(40, 23, 40, 0.74)",
    },
    text: {
        fontFamily: "Nunito, sans-serif",
        fontStyle: 'normal',
        fontSize: 18,
        fontWeight: 400,
        color: "#FFFFFF",
        marginBottom: 10,
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
                <Container maxWidth={false} className={classNames(classes.content, classes.content1)}>
                    <Typography className={classes.subHeading}>FPL DREAM TEAM</Typography> 
                    <Typography className={classes.text}>{text1}</Typography> 
                </Container>
                <Container maxWidth={false} className={classNames(classes.content, classes.content2)}>
                    <Typography className={classes.subHeading}>MODELS AND DATA</Typography> 
                    <Typography className={classes.text}>{text2}</Typography>
                </Container>
                <Container maxWidth={false} className={classNames(classes.content, classes.content3)}>
                    <Typography className={classes.subHeading}>TEAM SELECTION</Typography> 
                    <Typography className={classes.text}>{text3}</Typography> 
                </Container>
                <Container maxWidth={false} className={classNames(classes.content, classes.content4)}>
                    <Typography className={classes.subHeading}>PERFORMANCE</Typography> 
                    <Typography className={classes.text}>{text4}</Typography> 
                </Container>
                <Container maxWidth={false} className={classNames(classes.content, classes.content5)}>
                    <Typography className={classes.subHeading}>FUTURE WORK</Typography> 
                    <Typography className={classes.text}>{text5}</Typography> 
                </Container>
        </div>
    )
}


export default withStyles(styles)(About);