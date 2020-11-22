import React from 'react';
import Grid from '@material-ui/core/Grid';
import gameweeks from '../../data/gameweeks.json';
import { IPlayer } from '../../data/interfaces';
import './index.css';
import PlayerText from '../PlayerText';
import AttackerShirt from '../PlayerShirts/AttackerShirt';
import FieldBackground from '../FieldBackground';
import MidfielderShirt from '../PlayerShirts/MidfielderShirt';
import DefenderShirt from '../PlayerShirts/DefenderShirt';
import KeeperShirt from '../PlayerShirts/KeeperShirt';


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

    
    // Liverpool: const colors = ["red", "red", "red", "white", "white", "BFBFBF", "brown", "none"]
    // const colors = ["blue", "red", "blue", "red", "blue", "blue", "navy", "black"]; // Crystal Palace
    // const color1 = colors[0]; // Hoveddel
    // const color2 = colors[1]; // Stripene
    // const color3 = colors[2]; // Armene
    // const color4 = colors[3]; // Kanten på armene
    // const color5 = colors[4]; // Krage
    // const color6 = colors[5]; // Krage bak
    // const color7 = colors[6]; // Hals
    // const color8 = colors[7]; // 'black' hvis drakten har striper, 'none' hvis ikke


    return (
        <div>
            {keeper !== undefined && defender1 !== undefined && defender2 !== undefined && defender3 !== undefined && defender4 !== undefined &&
            midfielder1 !== undefined && midfielder2 !== undefined && midfielder3 !== undefined && midfielder4 !== undefined &&
            attacker1 !== undefined && attacker2 !== undefined && ( 
            <div className="root">
                <FieldBackground />                      
                <div className="team">
                    <Grid container direction="column" className="rootGrid">
                        <Grid item container direction="row" justify="center" className="keepGrid">
                            <Grid item >
                                <KeeperShirt />
                                <PlayerText />
                            </Grid>
                        </Grid>
                        <Grid item container direction="row" justify="space-between" className="defGrid">
                            <Grid item >
                                <DefenderShirt />
                                <PlayerText />
                            </Grid>
                            <Grid item >
                                <DefenderShirt />
                                <PlayerText />
                            </Grid>
                            <Grid item >
                                <DefenderShirt />
                                <PlayerText />
                            </Grid>
                        </Grid>
                        <Grid item container direction="row" justify="space-between" className="midGrid">
                            <Grid item >
                                <MidfielderShirt />
                                <PlayerText />
                            </Grid>
                            <Grid item >
                                <MidfielderShirt />
                                <PlayerText />
                            </Grid>
                            <Grid item >
                                <MidfielderShirt />
                                <PlayerText />
                            </Grid>
                            <Grid item >
                                <MidfielderShirt />
                                <PlayerText />
                            </Grid>
                        </Grid>
                        <Grid item container direction="row" justify="space-between" className="attGrid">
                            <Grid item >
                                <AttackerShirt />
                                <PlayerText />
                            </Grid>
                            <Grid item >
                                <AttackerShirt />
                                <PlayerText />
                            </Grid>
                            <Grid item >
                                <AttackerShirt />
                                <PlayerText />
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