import React from 'react';
import { IProps } from './interfaces';

function KeeperShirt(props: IProps) {
    
    // const colors = ["#801B0D", "#801B0D", "#11B5CE", "#11B5CE", "#11B5CE", "#54160E", "#54160E", "none"] // West Ham
    // const colors = ["red", "red", "red", "white", "white", "BFBFBF", "brown", "none"]; // Liverpool
    // const colors = ["blue", "red", "blue", "red", "blue", "blue", "navy", "black"]; // Crystal Palace
    const { colors } = props;
  
    const color1 = colors[0]; // Hoveddel
    const color2 = colors[1]; // Stripene
    const color3 = colors[2]; // Armene
    const color4 = colors[3]; // Kanten på armene
    const color5 = colors[4]; // Krage
    const color6 = colors[5]; // Krage bak
    const color7 = colors[6]; // Hals
    const color8 = colors[7]; // 'black' hvis drakten har striper, 'none' hvis ikke


    return (
        <div>
            <svg width="80" height="80">

                {/* Venstre arm */}
                <path d="M 13.333 13.333 
                S 2 10, 6 45 L 6 45
                S 3 50, 7 76 L 7 76
                S 10 77, 13 76 L 13 76
                S 15 60, 15 46 L 15 46
                S 18 38, 20 20
                " stroke="black" stroke-width="1" fill={color4} />

                {/* Høyre arm */}
                <path d="M 66.667 13.333 
                S 78 10, 74 45 L 74 45
                S 77 50, 73 76 L 73 76
                S 70 77, 67 76 L 67 76
                S 65 60, 65 46 L 65 46
                S 62 38, 60 20
                " stroke="black" stroke-width="1" fill={color4} />

                {/* Hoveddel */}
                <path d="M 16.667 76.667 
                S 23.333 33.333, 13.333 13.333 L 13.333 13.333 
                S 23.333 13.333, 24.8 7 L 24.8 7 
                S 40 36.667, 55.2 7 L 55.2 7 
                S 56.667 13.333, 66.667 13.333 L 66.667 13.333 
                S 56.667 33.333, 63.333 76.667 L 63.333 76.667 
                S 40 80, 16.667 76.667" stroke="black" stroke-width="1" fill={color1} />

                {/* Stripe 1 */}
                <path d="M 26 77.6 
                S 31.333 33.333, 23.333 10 L 23.333 10 
                S 25.333 7.333 25.333 6.667 L 25.333 6.667 
                S 32.667 21.333 35.733 18.667 L 35.733 18.667 
                S 37.333 33.333, 35.333 78 L 35.333 78 
                S 30.667 78 26 77.6" stroke={color8} stroke-width="1" fill={color2} />

                {/* Stripe 2 */}
                <path d="M 44.667 78 
                S 42.667 53.333 44.267 18.667 L 44.267 18.667 
                S 46.667 21.333, 54.667 6.667 L 54.667 6.667 
                S 54.667 7.333, 56.667 10 L 56.667 10 
                S 48.667 33.333, 54 77.6 L 54 77.6 
                S 49.333 78, 44.667 78" stroke={color8} stroke-width="1" fill={color2} />

                {/* Krage bak */}
                <path d="M 26.667 7.333 
                S 40 36.667, 53 7.333 L 53 7.333 
                S 40 13.333, 26.667 7.333" stroke="black" stroke-width="1" fill={color6} />

                {/* Hals */}
                <path d="M 29.333 10.667 
                S 40 30.667, 50.667 10.667 L 50.667 10.667 
                S 40 15.333, 29.333 10.667" stroke="black" stroke-width="1" fill={color7} />

                {/* Selve kragen */}
                <path d="M 28.667 8.133 
                S 40 32, 51.333 8 L 51.333 8 
                L 55.067 6.4 
                S 41.333 40.667, 24.933 6.4 Z" stroke="black" stroke-width="1" fill={color5} />

                {/* Omriss */}
                <path d="M 16.667 76.667 
                S 23.333 33.333, 13.333 13.333 L 13.333 13.333 
                S 23.333 13.333, 24.8 7 L 24.8 7 
                S 40 40, 55.2 7 L 55.2 7 
                S 56.667 13.333, 66.667 13.333 L 66.667 13.333 
                S 56.667 33.333, 63.333 76.667 L 63.333 76.667 
                S 40 80, 16.333 76.667" stroke="black" stroke-width="1" fill="none" />

            </svg>
        </div>
    );
}

export default KeeperShirt;