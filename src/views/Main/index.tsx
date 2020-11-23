import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { WithStyles, createStyles } from "@material-ui/styles"
import Container from '@material-ui/core/Container';
import GameWeekList from '../../components/GameWeekList';


const styles = () => 
createStyles({
    root: {
        padding: "180px 10px 10px 10px",
    },
});


type IProps = WithStyles<typeof styles>

const Main: React.FunctionComponent<IProps> = props =>  {
    
    const { classes } = props;
    return (
        <Container className={classes.root}>
            <GameWeekList/>
        </Container>
    )
}


export default withStyles(styles)(Main);