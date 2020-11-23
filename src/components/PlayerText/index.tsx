import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { WithStyles } from "@material-ui/styles"
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { IPlayer } from '../../data/interfaces';
import './index.css';


type IProps = IPlayer

const PlayerText = (props: IProps) => {
  const { name, team, prediction, score } = props
  return (
    <div className="playerText">
      <div className="playerName">{name}</div>
      <div className="playerScore">{score}</div>     
    </div>
  );
}

export default PlayerText;