import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import { ReactComponent as FieldBackground } from '../../field.svg';
import './index.css';

function Field() {
  return (
    <div className="root">
        <div>
            <FieldBackground/>
        </div>
       <div className="team">
            <Grid container direction="column" className="rootGrid">
                <Grid item container direction="row" justify="center">
                    <Grid item >
                        <PersonIcon style={{ fontSize: 100 }}/>
                    </Grid>
                </Grid>
                <Grid item container direction="row" justify="space-between" className="defGrid">
                    <Grid item >
                        <PersonIcon style={{ fontSize: 115 }}/>
                    </Grid>
                    <Grid item >
                        <PersonIcon style={{ fontSize: 115 }}/>
                    </Grid>
                    <Grid item >
                        <PersonIcon style={{ fontSize: 115 }}/>
                    </Grid>
                    <Grid item >
                        <PersonIcon style={{ fontSize: 115 }}/>
                    </Grid>
                </Grid>
                <Grid item container direction="row" justify="space-between" className="midGrid">
                    <Grid item >
                        <PersonIcon style={{ fontSize: 130 }}/>
                    </Grid>
                    <Grid item >
                        <PersonIcon style={{ fontSize: 130 }}/>
                    </Grid>
                    <Grid item >
                        <PersonIcon style={{ fontSize: 130 }}/>
                    </Grid>
                    <Grid item >
                        <PersonIcon style={{ fontSize: 130 }}/>
                    </Grid>
                </Grid>
                <Grid item container direction="row" justify="space-between" className="attGrid">
                    <Grid item >
                        <PersonIcon style={{ fontSize: 150 }}/>
                    </Grid>
                    <Grid item >
                        <PersonIcon style={{ fontSize: 150 }}/>
                    </Grid>
                </Grid>
            </Grid>
       </div>
    </div>
  );
}

export default Field;