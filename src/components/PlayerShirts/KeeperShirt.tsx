import React from 'react';
import { IProps } from './interfaces';

function KeeperShirt(props: IProps) {

    const { colors } = props;

    // const colors = ["#0065A0", "#383838", "#383838", "#005282"]
  
    const color1 = colors[0]; // Hoveddel
    const color2 = colors[1]; // Krage
    const color3 = colors[2]; // Krage bak
    const color4 = colors[3]; // Hals


    return (
        <div>
            <svg width="80" height="80">

                {/* Venstre arm */}
                <path d="M 13.333 13.333 
                S 2 10, 6 45 L 6 45
                S 3 50, 7 76 L 7 76
                S 10 77, 13 76 L 13 76
                S 17 60, 15 46 L 15 46
                S 18 38, 20 20
                " stroke="black" stroke-width="1" fill={color1} />

                {/* Høyre arm */}
                <path d="M 66.667 13.333 
                S 78 10, 74 45 L 74 45
                S 77 50, 73 76 L 73 76
                S 70 77, 67 76 L 67 76
                S 63 60, 65 46 L 65 46
                S 62 38, 60 20
                " stroke="black" stroke-width="1" fill={color1} />

                {/* Hoveddel */}
                <path d="M 16.667 76.667 
                S 23.333 33.333, 13.333 13.333 L 13.333 13.333 
                S 23.333 13.333, 24.8 7 L 24.8 7 
                S 40 36.667, 55.2 7 L 55.2 7 
                S 56.667 13.333, 66.667 13.333 L 66.667 13.333 
                S 56.667 33.333, 63.333 76.667 L 63.333 76.667 
                S 40 80, 16.667 76.667" stroke="black" stroke-width="1" fill={color1} />

                {/* Krage bak */}
                <path d="M 26.667 7.333 
                S 40 36.667, 53 7.333 L 53 7.333 
                S 40 13.333, 26.667 7.333" stroke="black" stroke-width="1" fill={color3} />

                {/* Hals */}
                <path d="M 29.333 10.667 
                S 40 30.667, 50.667 10.667 L 50.667 10.667 
                S 40 15.333, 29.333 10.667" stroke="black" stroke-width="1" fill={color4} />

                {/* Selve kragen */}
                <path d="M 28.667 8.133 
                S 40 32, 51.333 8 L 51.333 8 
                L 55.067 6.4 
                S 41.333 40.667, 24.933 6.4 Z" stroke="black" stroke-width="1" fill={color2} />

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