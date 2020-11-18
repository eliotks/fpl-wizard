import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import { ReactComponent as FieldBackground } from '../../field.svg';
import gameweeks from '../../data/gameweeks.json';
import './index.css';

function Field() {
  
  // Sende gameweek som props fra GameWeekList?
  const gameweek = 9;

  return (
    <div className="root">
        <div>
            <FieldBackground />
        </div>
       <div className="team">
            <Grid container direction="column" className="rootGrid">
                <Grid item container direction="row" justify="center" className="keepGrid">
                    <Grid item >
                        <PersonIcon style={{ fontSize: 100, color: gameweeks[gameweek]["keeper"]["color"] }}/>
                        <Typography align="center" style={{ fontSize: 14, fontWeight: "bold" }}>{gameweeks[gameweek]["keeper"]["name"]}</Typography>
                        <Typography align="center" style={{ fontSize: 14, fontWeight: "bold" }}>p: {gameweeks[gameweek]["keeper"]["prediction"]} , s: {gameweeks[gameweek]["keeper"]["score"]}</Typography>
                    </Grid>
                </Grid>
                <Grid item container direction="row" justify="space-between" className="defGrid">
                    <Grid item >
                        <PersonIcon style={{ fontSize: 110, color: gameweeks[gameweek]["defender1"]["color"] }}/>
                        <Typography align="center" style={{ fontSize: 14, fontWeight: "bold" }}>{gameweeks[gameweek]["defender1"]["name"]}</Typography>
                        <Typography align="center" style={{ fontSize: 14, fontWeight: "bold" }}>p: {gameweeks[gameweek]["defender1"]["prediction"]} , s: {gameweeks[gameweek]["defender1"]["score"]}</Typography>
                    </Grid>
                    <Grid item >
                        <PersonIcon style={{ fontSize: 110, color: gameweeks[gameweek]["defender2"]["color"] }}/>
                        <Typography align="center" style={{ fontSize: 14, fontWeight: "bold" }}>{gameweeks[gameweek]["defender2"]["name"]}</Typography>
                        <Typography align="center" style={{ fontSize: 14, fontWeight: "bold" }}>p: {gameweeks[gameweek]["defender2"]["prediction"]} , s: {gameweeks[gameweek]["defender2"]["score"]}</Typography>
                    </Grid>
                    <Grid item >
                        <PersonIcon style={{ fontSize: 110, color: gameweeks[gameweek]["defender3"]["color"] }}/>
                        <Typography align="center" style={{ fontSize: 14, fontWeight: "bold" }}>{gameweeks[gameweek]["defender3"]["name"]}</Typography>
                        <Typography align="center" style={{ fontSize: 14, fontWeight: "bold" }}>p: {gameweeks[gameweek]["defender3"]["prediction"]} , s: {gameweeks[gameweek]["defender3"]["score"]}</Typography>
                    </Grid>
                    <Grid item >
                        <PersonIcon style={{ fontSize: 110, color: gameweeks[gameweek]["defender4"]["color"] }}/>
                        <Typography align="center" style={{ fontSize: 14, fontWeight: "bold" }}>{gameweeks[gameweek]["defender4"]["name"]}</Typography>
                        <Typography align="center" style={{ fontSize: 14, fontWeight: "bold" }}>p: {gameweeks[gameweek]["defender4"]["prediction"]} , s: {gameweeks[gameweek]["defender4"]["score"]}</Typography>
                    </Grid>
                </Grid>
                <Grid item container direction="row" justify="space-between" className="midGrid">
                    <Grid item >
                        <PersonIcon style={{ fontSize: 120, color: gameweeks[gameweek]["midfielder1"]["color"] }}/>
                        <Typography align="center" style={{ fontSize: 14, fontWeight: "bold" }}>{gameweeks[gameweek]["midfielder1"]["name"]}</Typography>
                        <Typography align="center" style={{ fontSize: 14, fontWeight: "bold" }}>p: {gameweeks[gameweek]["midfielder1"]["prediction"]} , s: {gameweeks[gameweek]["midfielder1"]["score"]}</Typography>
                    </Grid>
                    <Grid item >
                        <PersonIcon style={{ fontSize: 120, color: gameweeks[gameweek]["midfielder2"]["color"] }}/>
                        <Typography align="center" style={{ fontSize: 14, fontWeight: "bold" }}>{gameweeks[gameweek]["midfielder2"]["name"]}</Typography>
                        <Typography align="center" style={{ fontSize: 14, fontWeight: "bold" }}>p: {gameweeks[gameweek]["midfielder2"]["prediction"]} , s: {gameweeks[gameweek]["midfielder2"]["score"]}</Typography>
                    </Grid>
                    <Grid item >
                        <PersonIcon style={{ fontSize: 120, color: gameweeks[gameweek]["midfielder3"]["color"] }}/>
                        <Typography align="center" style={{ fontSize: 14, fontWeight: "bold" }}>{gameweeks[gameweek]["midfielder3"]["name"]}</Typography>
                        <Typography align="center" style={{ fontSize: 14, fontWeight: "bold" }}>p: {gameweeks[gameweek]["midfielder3"]["prediction"]} , s: {gameweeks[gameweek]["midfielder3"]["score"]}</Typography>
                    </Grid>
                    <Grid item >
                        <PersonIcon style={{ fontSize: 120, color: gameweeks[gameweek]["midfielder4"]["color"] }}/>
                        <Typography align="center" style={{ fontSize: 14, fontWeight: "bold" }}>{gameweeks[gameweek]["midfielder4"]["name"]}</Typography>
                        <Typography align="center" style={{ fontSize: 14, fontWeight: "bold" }}>p: {gameweeks[gameweek]["midfielder4"]["prediction"]} , s: {gameweeks[gameweek]["midfielder4"]["score"]}</Typography>
                    </Grid>
                </Grid>
                <Grid item container direction="row" justify="space-between" className="attGrid">
                    <Grid item >
                        <PersonIcon style={{ fontSize: 130, color: gameweeks[gameweek]["attacker1"]["color"] }}/>
                        <Typography align="center" style={{ fontSize: 14, fontWeight: "bold" }}>{gameweeks[gameweek]["attacker1"]["name"]}</Typography>
                        <Typography align="center" style={{ fontSize: 14, fontWeight: "bold" }}>p: {gameweeks[gameweek]["attacker1"]["prediction"]} , s: {gameweeks[gameweek]["attacker1"]["score"]}</Typography>
                    </Grid>
                    <Grid item >
                        <PersonIcon style={{ fontSize: 130, color: gameweeks[gameweek]["attacker2"]["color"] }}/>
                        <Typography align="center" style={{ fontSize: 14, fontWeight: "bold" }}>{gameweeks[gameweek]["attacker2"]["name"]}</Typography>
                        <Typography align="center" style={{ fontSize: 14, fontWeight: "bold" }}>p: {gameweeks[gameweek]["attacker2"]["prediction"]} , s: {gameweeks[gameweek]["attacker2"]["score"]}</Typography>
                    </Grid>
                </Grid>
            </Grid>
       </div>
    </div>
  );
}

export default Field;