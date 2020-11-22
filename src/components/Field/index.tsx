import React from 'react';
import Grid from '@material-ui/core/Grid';
import gameweeks from '../../data/gameweeks.json';
import shirtColors from '../../data/shirtColors.json';
import { IPlayer } from '../../data/interfaces';
import './index.css';
import PlayerText from '../PlayerText';
import AttackerShirt from '../PlayerShirts/AttackerShirt';
import FieldBackground from '../FieldBackground';
import MidfielderShirt from '../PlayerShirts/MidfielderShirt';
import DefenderShirt from '../PlayerShirts/DefenderShirt';
import KeeperShirt from '../PlayerShirts/KeeperShirt';
import { IProps as IShirtProps } from '../PlayerShirts/interfaces';


interface IProps {
    gameweekNumber: number
}


function isKeyof<T extends object>(obj: T, possibleKey: keyof any): possibleKey is keyof T {
    return possibleKey in obj;
}


function Field(props: IProps) {
   
    const gameweekNumberString: string = props.gameweekNumber.toString();

    const gameWeek = isKeyof(gameweeks, gameweekNumberString) ? gameweeks[gameweekNumberString] : undefined

    const getShirtColors = (teamName: string): IShirtProps["colors"] => {
        const defaultShirtColor: IShirtProps["colors"] = ["white", "white", "white", "white", "white", "white", "white", "white"]
        const shirtColor: string[] | undefined = isKeyof(shirtColors, teamName) ? shirtColors[teamName]["colors"] : undefined
        
        if (shirtColor !== undefined && shirtColor.length === 8) {
            // Has to be done this stupid way to please typescript
            return [shirtColor[0], shirtColor[1], shirtColor[2], shirtColor[3], shirtColor[4], shirtColor[5], shirtColor[6], shirtColor[7]]
        }
        return defaultShirtColor
    }

    return (
        <div>
            <div className="root">
                <FieldBackground />                      
                <div className="team">
                    <Grid container direction="column" className="rootGrid">
                        <Grid item container direction="row" justify="center" className="keepGrid">
                            <Grid item >
<<<<<<< HEAD
                                <KeeperShirt colors={getShirtColors("none")} />
=======
                                <KeeperShirt colors={getShirtColors("CrystalPalace")}/>
>>>>>>> f865ee5a521f018725a9d7adcef91d7b2620162d
                                <PlayerText />
                            </Grid>
                        </Grid>
                        <Grid item container direction="row" justify="space-between" className="defGrid">
                            <Grid item >
<<<<<<< HEAD
                                <DefenderShirt colors={getShirtColors("none")} />
                                <PlayerText />
                            </Grid>
                            <Grid item >
                                <DefenderShirt colors={getShirtColors("none")} />
                                <PlayerText />
                            </Grid>
                            <Grid item >
                                <DefenderShirt colors={getShirtColors("none")} />
=======
                                <DefenderShirt colors={getShirtColors("Liverpool")}/>
                                <PlayerText />
                            </Grid>
                            <Grid item >
                                <DefenderShirt colors={getShirtColors("CrystalPalace")}/>
                                <PlayerText />
                            </Grid>
                            <Grid item >
                                <DefenderShirt colors={getShirtColors("WestHam")}/>
>>>>>>> f865ee5a521f018725a9d7adcef91d7b2620162d
                                <PlayerText />
                            </Grid>
                        </Grid>
                        <Grid item container direction="row" justify="space-between" className="midGrid">
                            <Grid item >
<<<<<<< HEAD
                                <MidfielderShirt colors={getShirtColors("none")} />
                                <PlayerText />
                            </Grid>
                            <Grid item >
                                <MidfielderShirt colors={getShirtColors("none")} />
                                <PlayerText />
                            </Grid>
                            <Grid item >
                                <MidfielderShirt colors={getShirtColors("none")} />
                                <PlayerText />
                            </Grid>
                            <Grid item >
                                <MidfielderShirt colors={getShirtColors("none")} />
=======
                                <MidfielderShirt colors={getShirtColors("Liverpool")}/>
                                <PlayerText />
                            </Grid>
                            <Grid item >
                                <MidfielderShirt colors={getShirtColors("Liverpool")}/>
                                <PlayerText />
                            </Grid>
                            <Grid item >
                                <MidfielderShirt colors={getShirtColors("WestHam")}/>
                                <PlayerText />
                            </Grid>
                            <Grid item >
                                <MidfielderShirt colors={getShirtColors("CrystalPalace")}/>
>>>>>>> f865ee5a521f018725a9d7adcef91d7b2620162d
                                <PlayerText />
                            </Grid>
                        </Grid>
                        <Grid item container direction="row" justify="space-between" className="attGrid">
                            <Grid item >
                                <AttackerShirt colors={getShirtColors("none")} />
                                <PlayerText />
                            </Grid>
                            <Grid item >
                                <AttackerShirt colors={getShirtColors("none")} />
                                <PlayerText />
                            </Grid>
                            <Grid item >
                                <AttackerShirt colors={getShirtColors("none")} />
                                <PlayerText />
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default Field;