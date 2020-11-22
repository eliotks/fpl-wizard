import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { WithStyles, createStyles } from "@material-ui/styles"
import Container from '@material-ui/core/Container';

const styles = () => 
createStyles({
    root: {
        padding: "200px 100px 10px 100px"
    },
});


type IProps = WithStyles<typeof styles>

const About: React.FunctionComponent<IProps> = props =>  {
    
    const { classes } = props;
    return (
        <Container className={classes.root}>
              hei hei hei
        </Container>
    )
}


export default withStyles(styles)(About);