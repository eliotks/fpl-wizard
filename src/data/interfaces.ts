export interface IPlayer {
    name: string;
    team: string;
    prediction: number;
    score: number;
}

export interface IGameWeek {
    totalPrediction: number,
    totalPoints: number,
    keeper: IPlayer,
    defenders: IPlayer[],
    midfielders: IPlayer[],
    attackers: IPlayer[],
}