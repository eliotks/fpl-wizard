export interface IPlayer {
    name: string;
    team: string;
    prediction: number | string;
    score: number | string;
}

export interface IGameWeek {
    totalPrediction: number,
    totalPoints: number,
    keeper: IPlayer,
    defenders: IPlayer[],
    midfielders: IPlayer[],
    attackers: IPlayer[],
}