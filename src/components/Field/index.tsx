import React from 'react';
import Grid from '@material-ui/core/Grid';
import gameweeks from '../../data/gameweeks.json';
import { isKeyof, getShirtColors, getKeeperShirtColors } from './helpers';
import { IGameWeek, IPlayer } from '../../data/interfaces';
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
 

function Field(props: IProps) {
   
    const gameweekNumberString: string = props.gameweekNumber.toString();

    const gameWeek: IGameWeek | undefined = isKeyof(gameweeks, gameweekNumberString) ? gameweeks[gameweekNumberString] : undefined
    
    const keeper: IPlayer | undefined = gameWeek !== undefined ? gameWeek.keeper : undefined
    const defenders: IPlayer[] | undefined = gameWeek !== undefined ? gameWeek.defenders : undefined
    const midfielders: IPlayer[] | undefined = gameWeek !== undefined ? gameWeek.midfielders : undefined
    const attackers: IPlayer[] | undefined = gameWeek !== undefined ? gameWeek.attackers : undefined

    return (
        <div>
            {keeper !== undefined && defenders !== undefined && midfielders !== undefined && attackers !== undefined && (

            <div className="root">
                <FieldBackground />                      
                <div className="team">
                    <Grid container direction="column" className="rootGrid">
                        <Grid item container direction="row" justify="center" className="keepGrid">
                            <Grid item >
                                <KeeperShirt colors={getShirtColors(keeper.team)} />
                                <PlayerText name={keeper.name} team={keeper.team} prediction={keeper.prediction} score={keeper.score}/>
                            </Grid>
                        </Grid>
                        <Grid item container direction="row" justify="space-between" className="defGrid">
                            {defenders.map(player => {
                                return (
                                    <Grid item >
                                        <DefenderShirt colors={getShirtColors(player.team)} />
                                        <PlayerText name={player.name} team={player.team} prediction={player.prediction} score={player.score}/>
                                    </Grid>
                                )
                            })}
                        </Grid>
                        <Grid item container direction="row" justify="space-between" className="midGrid">
                            {midfielders.map(player => {
                                return (
                                    <Grid item >
                                        <MidfielderShirt colors={getShirtColors(player.team)} />
                                        <PlayerText name={player.name} team={player.team} prediction={player.prediction} score={player.score}/>
                                    </Grid>
                                )
                            })}
                        </Grid>
                        <Grid item container direction="row" justify="space-between" className="attGrid">
                            {attackers.map(player => {
                                return (
                                    <Grid item >
                                        <AttackerShirt colors={getShirtColors(player.team)} />
                                        <PlayerText name={player.name} team={player.team} prediction={player.prediction} score={player.score}/>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Grid>
                </div>
            </div>

            )}
        </div>
    );
}

export default Field;