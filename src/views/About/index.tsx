import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { WithStyles, createStyles } from "@material-ui/styles"
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { dataText, modelsText, teamOptimizerText } from './texts';


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
    subHeading: {
        fontFamily: "Nunito, sans-serif",
        fontStyle: 'normal',
        fontSize: 40,
        fontWeight: 400,
        color: "#FFFFFF",
    },
    contentData: {
        backgroundColor: "rgba(13, 20, 43, 0.74)",
        backdropFilter: "blur(20px) opacity(0.8)",
        minHeight: "300px",
        backgroundSize: "100%",
        padding: "60px 180px 30px 180px",
    },
    contentModels: {
        backgroundColor: "rgba(17, 29, 35, 0.74)",
        backdropFilter: "blur(20px) opacity(0.8)",
        minHeight: "300px",
        backgroundSize: "100%",
        padding: "40px 180px 30px 180px",
    },
    contentTeamOptimizer: {
        backgroundColor: "rgba(30, 20, 50, 0.74)",
        backdropFilter: "blur(20px) opacity(0.8)",
        minHeight: "300px",
        backgroundSize: "100%",
        padding: "40px 180px 30px 180px",
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
                <Container maxWidth={false} className={classes.contentData}>
                    <Typography className={classes.subHeading}>Data</Typography> 
                    <Typography className={classes.text}>{dataText}</Typography> 
                </Container>
                <Container maxWidth={false} className={classes.contentModels}>
                    <Typography className={classes.subHeading}>Models</Typography> 
                    <Typography className={classes.text}>{modelsText}</Typography>
                </Container>
                <Container maxWidth={false} className={classes.contentTeamOptimizer}>
                    <Typography className={classes.subHeading}>Finding the best team</Typography> 
                    <Typography className={classes.text}>{teamOptimizerText}</Typography> 
                </Container>
        </div>
    )
}


export default withStyles(styles)(About);