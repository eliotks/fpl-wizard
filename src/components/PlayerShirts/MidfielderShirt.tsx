import React from 'react';
import { IProps } from './interfaces';

function MidfielderShirt(props: IProps) {
    
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
            <svg width="100" height="100">

                {/* Venstre arm (stor versjon) */}
                <path d="M 16.667 16.667
                S 8.333 16.667, 10 33.333 L 10 33.333
                S 10.833 41.667, 9.167 50 L 9.167 50
                S 20.833 50, 23.333 48.333 L 33.333 25 Z
                " stroke="black" stroke-width="1" fill={color4} />

                {/* Venstre arm (liten versjon) */}
                <path d="M 16.667 16.667 
                S 8.333 16.667, 10 33.333 L 10 33.333 
                S 10.5 41.667, 9.833 45.833 L 9.833 45.833 
                S 20.833 45.833, 23.333 44.167 L 33.333 25 Z" stroke="none" stroke-width="1" fill={color3} />

                {/* Venstre arm (omriss) */}
                <path d="M 16.667 16.667 
                S 8.333 16.667, 10 33.333 L 10 33.333 
                S 10.5 41.667, 9.833 45.833 L 9.833 45.833 
                S 20.833 45.833, 23.333 44.167 L 33.333 25 Z" stroke="black" stroke-width="1" fill="none" />

                {/* Høyre arm (stor versjon) */}
                <path d="M 83.333 16.667 
                S 91.667 16.667, 90 33.333 L 90 33.333 
                S 89.167 41.667, 90.833 50 L 90.833 50 
                S 79.167 50, 76.667 48.333 L 66.667 25 Z" stroke="black" stroke-width="1" fill={color4} />

                {/* Høyre arm (liten versjon) */}
                <path d="M 83.333 16.667 
                S 91.667 16.667, 90 33.333 L 90 33.333 
                S 89.5 41.667, 90.167 45.833 L 90.167 45.833 
                S 79.167 45.833, 76.667 44.167 L 66.667 25 Z" stroke="none" stroke-width="1" fill={color3} />

                {/* Høyre arm (omriss) */}
                <path d="M 83.333 16.667 
                S 91.667 16.667, 90 33.333 L 90 33.333 
                S 89.5 41.667, 90.167 45.833 L 90.167 45.833 
                S 79.167 45.833, 76.667 44.167 L 66.667 25 Z" stroke="black" stroke-width="1" fill="none" />

                {/* Hoveddel */}
                <path d="M 20.833 95.833 
                S 29.167 41.667, 16.667 16.667 L 16.667 16.667 
                S 29.167 16.667, 31 8.75 L 31 8.75 
                S 50 45.833, 69 8.75 L 69 8.75 
                S 70.833 16.667, 83.333 16.667 L 83.333 16.667 
                S 70.833 41.667, 79.167 95.833 L 79.167 95.833 
                S 50 100, 20.833 95.833" stroke="black" stroke-width="1" fill={color1} />

                {/* Stripe 1 */}
                <path d="M 32.5 97 
                S 39.167 41.667, 29.167 12.5 L 29.167 12.5 
                S 31.667 9.167 31.667 8.333 L 31.667 8.333 
                S 40.833 26.667 44.667 23.333 L 44.667 23.333 
                S 46.667 41.667, 44.167 97.5 L 44.167 97.5 
                S 38.333 97.5 32.5 97" stroke={color8} stroke-width="1" fill={color2} />

                {/* Stripe 2 */}
                <path d="M 55.833 97.5 
                S 53.333 66.667 55.333 23.333 L 55.333 23.333 
                S 58.333 26.667, 68.333 8.333 L 68.333 8.333 
                S 68.333 9.167, 70.833 12.5 L 70.833 12.5 
                S 60.833 41.667, 67.5 97 L 67.5 97
                S 61.667 97.5, 55.833 97.5" stroke={color8} stroke-width="1" fill={color2} />

                {/* Krage bak */}
                <path d="M 33.333 9.167 
                S 50 45.833, 66.25 9.167 L 66.25 9.167 
                S 50 16.667, 33.333 9.167" stroke="black" stroke-width="1" fill={color6} />

                {/* Hals */}
                <path d="M 36.667 13.333 
                S 50 38.333, 63.333 13.333 L 63.333 13.333 
                S 50 19.167, 36.667 13.333" stroke="black" stroke-width="1" fill={color7} />

                {/* Selve kragen */}
                <path d="M 35.833 10.167 
                S 50 40, 64.167 10 L 64.167 10 
                L 68.833 8 
                S 51.667 50.833, 31.167 8 Z" stroke="black" stroke-width="1" fill={color5} />

                {/* Omriss */}
                <path d="M 20.833 95.833 
                S 29.167 41.667, 16.667 16.667 L 16.667 16.667 
                S 29.167 16.667, 31 8.75 L 31 8.75 
                S 50 50, 69 8.75 L 69 8.75 
                S 70.833 16.667, 83.333 16.667 L 83.333 16.667 
                S 70.833 41.667, 79.167 95.833 L 79.167 95.833 
                S 50 100, 20.417 95.833" stroke="black" stroke-width="1" fill="none" />

            </svg>
        </div>
    );
}

export default MidfielderShirt;