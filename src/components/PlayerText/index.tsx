import React from 'react';
import { IPlayer } from '../../data/interfaces';
import './index.css';


type IProps = IPlayer

const PlayerText = (props: IProps) => {
  // const { name, team, prediction, score } = props
  const { name, score } = props
  return (
    <div className="playerText">
      <div className="playerName">{name}</div>
      <div className="playerScore">{score}</div>     
    </div>
  );
}

export default PlayerText;