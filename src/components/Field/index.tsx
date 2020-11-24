import React from 'react';
import Grid from '@material-ui/core/Grid';
import { getShirtColors, getKeeperShirtColors } from '../../helpers';
import { IGameWeek, IPlayer } from '../../data/interfaces';
import './index.css';
import PlayerText from '../PlayerText';
import AttackerShirt from '../PlayerShirts/AttackerShirt';
import FieldBackground from '../FieldBackground';
import MidfielderShirt from '../PlayerShirts/MidfielderShirt';
import DefenderShirt from '../PlayerShirts/DefenderShirt';
import KeeperShirt from '../PlayerShirts/KeeperShirt';


interface IProps {
    gameweek: IGameWeek
}


function Field(props: IProps) {
    const { gameweek } = props
    
    const keeper: IPlayer = gameweek.keeper
    const defenders: IPlayer[] = gameweek.defenders
    const midfielders: IPlayer[] = gameweek.midfielders
    const attackers: IPlayer[] = gameweek.attackers

    return (
            <div className="root">
                <FieldBackground />                      
                <div className="team">
                    <Grid container direction="column" className="rootGrid">
                        <Grid item container direction="row" justify="center" className="keepGrid">
                            <Grid item className="player">
                                <KeeperShirt colors={getKeeperShirtColors(keeper.team)} />
                                <PlayerText name={keeper.name} team={keeper.team} prediction={keeper.prediction} score={keeper.score}/>
                            </Grid>
                        </Grid>
                        <Grid item container direction="row" justify="space-between" className="defGrid">
                            {defenders.map(player => {
                                return (
                                    <Grid item className="player">
                                        <DefenderShirt colors={getShirtColors(player.team)} />
                                        <PlayerText name={player.name} team={player.team} prediction={player.prediction} score={player.score}/>
                                    </Grid>
                                )
                            })}
                        </Grid>
                        <Grid item container direction="row" justify="space-between" className="midGrid">
                            {midfielders.map(player => {
                                return (
                                    <Grid item className="player">
                                        <MidfielderShirt colors={getShirtColors(player.team)} />
                                        <PlayerText name={player.name} team={player.team} prediction={player.prediction} score={player.score}/>
                                    </Grid>
                                )
                            })}
                        </Grid>
                        <Grid item container direction="row" justify="space-between" className="attGrid">
                            {attackers.map(player => {
                                return (
                                    <Grid item className="player">
                                        <AttackerShirt colors={getShirtColors(player.team)} />
                                        <PlayerText name={player.name} team={player.team} prediction={player.prediction} score={player.score}/>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Grid>
                </div>
                <div className="captain">
                    <svg width="50" height="50">
                        <circle cx="25" cy="25" r="15" fill="none" stroke="#FFFFFF" stroke-width="2.5" />
                        <text x="16.1" y="33.3" fill="#FFFFFF" font-size="24" font-weight="bold">C</text>
                    </svg>
                </div>
                <div className="viceCaptain">
                    <svg width="50" height="50">
                        <circle cx="25" cy="25" r="15" fill="none" stroke="#FFFFFF" stroke-width="2.5" />
                        <text x="17" y="34" fill="#FFFFFF" font-size="24" font-weight="bold">V</text>
                    </svg>
                </div>
            </div>
    );
}

export default Field;