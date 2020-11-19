import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import { ReactComponent as FieldBackground } from '../../field.svg';
import gameweeks from '../../data/gameweeks.json';
import { IPlayer } from '../../data/interfaces';
import './index.css';
import PlayerText from '../PlayerText';


interface IProps {
    gameweekNumber: number
}


function isKeyof<T extends object>(obj: T, possibleKey: keyof any): possibleKey is keyof T {
    return possibleKey in obj;
}

function Field(props: IProps) {
  
  const gameweekNumberString: string = props.gameweekNumber.toString();

  const gameWeek = isKeyof(gameweeks, gameweekNumberString) ? gameweeks[gameweekNumberString] : undefined

  const keeper: IPlayer | undefined = gameWeek !== undefined ? gameWeek["keeper"] : undefined
  const defender1: IPlayer | undefined = gameWeek !== undefined ? gameWeek["defender1"] : undefined
  const defender2: IPlayer | undefined = gameWeek !== undefined ? gameWeek["defender2"] : undefined
  const defender3: IPlayer | undefined = gameWeek !== undefined ? gameWeek["defender3"] : undefined
  const defender4: IPlayer | undefined = gameWeek !== undefined ? gameWeek["defender4"] : undefined
  const midfielder1: IPlayer | undefined = gameWeek !== undefined ? gameWeek["midfielder1"] : undefined
  const midfielder2: IPlayer | undefined = gameWeek !== undefined ? gameWeek["midfielder2"] : undefined
  const midfielder3: IPlayer | undefined = gameWeek !== undefined ? gameWeek["midfielder3"] : undefined
  const midfielder4: IPlayer | undefined = gameWeek !== undefined ? gameWeek["midfielder4"] : undefined
  const attacker1: IPlayer | undefined = gameWeek !== undefined ? gameWeek["attacker1"] : undefined
  const attacker2: IPlayer | undefined = gameWeek !== undefined ? gameWeek["attacker2"] : undefined


  return (
    <div>
        {keeper !== undefined && defender1 !== undefined && defender2 !== undefined && defender3 !== undefined && defender4 !== undefined &&
        midfielder1 !== undefined && midfielder2 !== undefined && midfielder3 !== undefined && midfielder4 !== undefined &&
        attacker1 !== undefined && attacker2 !== undefined && ( 
        <div className="root">
            <div>
                <FieldBackground />
            </div>
        <div className="team">
                <Grid container direction="column" className="rootGrid">
                    <Grid item container direction="row" justify="center" className="keepGrid">
                        <Grid item >
                            <PersonIcon style={{ fontSize: 100, color: keeper["color"] }}/>
                            <PlayerText />
                        </Grid>
                    </Grid>
                    <Grid item container direction="row" justify="space-between" className="defGrid">
                        <Grid item >
                            <PersonIcon style={{ fontSize: 110, color: defender1["color"] }}/>
                            <Typography align="center" style={{ fontSize: 14, fontWeight: "bold" }}>{defender1["name"]}</Typography>
                            <Typography align="center" style={{ fontSize: 14, fontWeight: "bold" }}>p: {defender1["prediction"]} , s: {defender1["score"]}</Typography>
                        </Grid>
                        <Grid item >
                            <PersonIcon style={{ fontSize: 110, color: defender2["color"] }}/>
                            <Typography align="center" style={{ fontSize: 14, fontWeight: "bold" }}>{defender2["name"]}</Typography>
                            <Typography align="center" style={{ fontSize: 14, fontWeight: "bold" }}>p: {defender2["prediction"]} , s: {defender2["score"]}</Typography>
                        </Grid>
                        <Grid item >
                            <PersonIcon style={{ fontSize: 110, color: defender3["color"] }}/>
                            <Typography align="center" style={{ fontSize: 14, fontWeight: "bold" }}>{defender3["name"]}</Typography>
                            <Typography align="center" style={{ fontSize: 14, fontWeight: "bold" }}>p: {defender3["prediction"]} , s: {defender3["score"]}</Typography>
                        </Grid>
                        <Grid item >
                            <PersonIcon style={{ fontSize: 110, color: defender4["color"] }}/>
                            <Typography align="center" style={{ fontSize: 14, fontWeight: "bold" }}>{defender4["name"]}</Typography>
                            <Typography align="center" style={{ fontSize: 14, fontWeight: "bold" }}>p: {defender4["prediction"]} , s: {defender4["score"]}</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container direction="row" justify="space-between" className="midGrid">
                        <Grid item >
                            <PersonIcon style={{ fontSize: 120, color: midfielder1["color"] }}/>
                            <Typography align="center" style={{ fontSize: 14, fontWeight: "bold" }}>{midfielder1["name"]}</Typography>
                            <Typography align="center" style={{ fontSize: 14, fontWeight: "bold" }}>p: {midfielder1["prediction"]} , s: {midfielder1["score"]}</Typography>
                        </Grid>
                        <Grid item >
                            <PersonIcon style={{ fontSize: 120, color: midfielder2["color"] }}/>
                            <Typography align="center" style={{ fontSize: 14, fontWeight: "bold" }}>{midfielder2["name"]}</Typography>
                            <Typography align="center" style={{ fontSize: 14, fontWeight: "bold" }}>p: {midfielder2["prediction"]} , s: {midfielder2["score"]}</Typography>
                        </Grid>
                        <Grid item >
                            <PersonIcon style={{ fontSize: 120, color: midfielder3["color"] }}/>
                            <Typography align="center" style={{ fontSize: 14, fontWeight: "bold" }}>{midfielder3["name"]}</Typography>
                            <Typography align="center" style={{ fontSize: 14, fontWeight: "bold" }}>p: {midfielder3["prediction"]} , s: {midfielder3["score"]}</Typography>
                        </Grid>
                        <Grid item >
                            <PersonIcon style={{ fontSize: 120, color: midfielder4["color"] }}/>
                            <Typography align="center" style={{ fontSize: 14, fontWeight: "bold" }}>{midfielder4["name"]}</Typography>
                            <Typography align="center" style={{ fontSize: 14, fontWeight: "bold" }}>p: {midfielder4["prediction"]} , s: {midfielder4["score"]}</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container direction="row" justify="space-between" className="attGrid">
                        <Grid item >
                            <PersonIcon style={{ fontSize: 130, color: attacker1["color"] }}/>
                            <Typography align="center" style={{ fontSize: 14, fontWeight: "bold" }}>{attacker1["name"]}</Typography>
                            <Typography align="center" style={{ fontSize: 14, fontWeight: "bold" }}>p: {attacker1["prediction"]} , s: {attacker1["score"]}</Typography>
                        </Grid>
                        <Grid item >
                            <PersonIcon style={{ fontSize: 130, color: attacker2["color"] }}/>
                            <Typography align="center" style={{ fontSize: 14, fontWeight: "bold" }}>{attacker2["name"]}</Typography>
                            <Typography align="center" style={{ fontSize: 14, fontWeight: "bold" }}>p: {attacker2["prediction"]} , s: {attacker2["score"]}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
        </div>
        </div>
        )}
    </div>
  );
}

export default Field;