import shirtColors from '../data/shirtColors.json';
import { IProps as IShirtProps } from '../components/PlayerShirts/interfaces';

// checks if possibleKey is a key of json obj. Needed for typescript.
export function isKeyof<T extends object>(obj: T, possibleKey: keyof any): possibleKey is keyof T {
    return possibleKey in obj;
}


// Return colors form shirtColors.json
export const getShirtColors = (teamName: string): IShirtProps["colors"] => {
    // define default shirt color for players
    const defaultShirtColor: IShirtProps["colors"] = ["white", "white", "white", "white", "white", "white", "white", "white"]
    
    // if teamName is a key in shirtColors.json then colors are fetced, else colors is undefined
    const colors: string[] | undefined = isKeyof(shirtColors, teamName) ? shirtColors[teamName]["colors"] : undefined
    
    // make sure colors is array of length = 8
    if (colors !== undefined && colors.length === 8) {
        return colors
    }

    return defaultShirtColor
}

// Return colors form shirtColors.json
export const getKeeperShirtColors = (teamName: string): IShirtProps["colors"] => {
    // define default shirt color for players
    const defaultShirtColor: IShirtProps["colors"] = ["white", "white", "white", "white"]
    
    // if teamName is a key in shirtColors.json then colors are fetced, else colors is undefined
    const colors: string[] | undefined = isKeyof(shirtColors, teamName) ? shirtColors[teamName]["keeperColors"] : undefined
    
    // make sure colors is array of length = 4
    if (colors !== undefined && colors.length === 4) {
        return colors
    }

    return defaultShirtColor
}