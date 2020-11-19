import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import { ReactComponent as FieldBackground } from '../../field.svg';
import gameweeks from '../../data/gameweeks.json';
import { IPlayer } from '../../data/interfaces';

// Proppe litt her
// interface IProps {
//     player: player
// }

function PlayerText() {
  
  return (
    <div>
        <Typography align="center" style={{ fontSize: 14, fontWeight: "bold" }}>Yesss</Typography>
        <Typography align="center" style={{ fontSize: 14, fontWeight: "bold" }}>Helllllo</Typography>
    </div>
  );
}

export default PlayerText;