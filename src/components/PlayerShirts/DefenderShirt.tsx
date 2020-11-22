import React from 'react';

function DefenderShirt() {
    
    // const colors = ["red", "red", "red", "white", "white", "BFBFBF", "brown", "none"] // Liverpool
    const colors = ["blue", "red", "blue", "red", "blue", "blue", "navy", "black"]; // Crystal Palace
    // const colors = ["#801B0D", "#801B0D", "#11B5CE", "#11B5CE", "#11B5CE", "#54160E", "#54160E", "none"] // West Ham
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
            <svg width="90" height="90">

                {/* Venstre arm (stor versjon) */}
                <path d="M 15 15 
                S 7.5 15, 9 30 L 9 30 
                S 9.75 37.5, 8.25 45 L 8.25 45 
                S 18.75 45, 21 43.5 L 30 22.5 Z" stroke="black" stroke-width="1" fill={color4} />

                {/* Venstre arm (liten versjon) */}
                <path d="M 15 15 
                S 7.5 15, 9 30 L 9 30 
                S 9.45 37.5, 8.85 41.25 L 8.85 41.25 
                S 18.75 41.25, 21 39.75 L 30 22.5 Z" stroke="none" stroke-width="1" fill={color3} />

                {/* Venstre arm (omriss) */}
                <path d="M 15 15 
                S 7.5 15, 9 30 L 9 30 
                S 9.45 37.5, 8.85 41.25 L 8.85 41.25 
                S 18.75 41.25, 21 39.75 L 30 22.5 Z" stroke="black" stroke-width="1" fill="none" />

                {/* Høyre arm (stor versjon) */}
                <path d="M 75 15 
                S 82.5 15, 81 30 L 81 30 
                S 80.25 37.5, 81.75 45 L 81.75 45 
                S 71.25 45, 69 43.5 L 60 22.5 Z" stroke="black" stroke-width="1" fill={color4} />

                {/* Høyre arm (liten versjon) */}
                <path d="M 75 15 
                S 82.5 15, 81 30 L 81 30 
                S 80.55 37.5, 81.15 41.25 L 81.15 41.25 
                S 71.25 41.25, 69 39.75 L 60 22.5 Z" stroke="none" stroke-width="1" fill={color3} />

                {/* Høyre arm (omriss) */}
                <path d="M 75 15 
                S 82.5 15, 81 30 L 81 30 
                S 80.55 37.5, 81.15 41.25 L 81.15 41.25 
                S 71.25 41.25, 69 39.75 L 60 22.5 Z" stroke="black" stroke-width="1" fill="none" />

                {/* Hoveddel */}
                <path d="M 18.75 86.25 
                S 26.25 37.5, 15 15 L 15 15 
                S 26.25 15, 27.9 7.875 L 27.9 7.875 
                S 45 41.25, 62.1 7.875 L 62.1 7.875 
                S 63.75 15, 75 15 L 75 15 
                S 63.75 37.5, 71.25 86.25 L 71.25 86.25 
                S 45 90, 18.75 86.25" stroke="black" stroke-width="1" fill={color1} />

                {/* Stripe 1 */}
                <path d="M 29.25 87.3 
                S 35.25 37.5, 26.25 11.25 L 26.25 11.25 
                S 28.5 8.25 28.5 7.5 L 28.5 7.5 
                S 36.75 24 40.2 21 L 40.2 21 
                S 42 37.5, 39.75 87.75 L 39.75 87.75 
                S 34.5 87.75 29.25 87.3" stroke={color8} stroke-width="1" fill={color2} />

                {/* Stripe 2 */}
                <path d="M 50.25 87.75 
                S 48 60 49.8 21 L 49.8 21 
                S 52.5 24, 61.5 7.5 L 61.5 7.5 
                S 61.5 8.25, 63.75 11.25 L 63.75 11.25 
                S 54.75 37.5, 60.75 87.3 L 60.75 87.3 
                S 55.5 87.75, 50.25 87.75" stroke={color8} stroke-width="1" fill={color2} />

                {/* Krage bak */}
                <path d="M 30 8.25 
                S 45 41.25, 59.625 8.25 L 59.625 8.25 
                S 45 15, 30 8.25" stroke="black" stroke-width="1" fill={color6} />

                {/* Hals */}
                <path d="M 33 12 
                S 45 34.5, 57 12 L 57 12 
                S 45 17.25, 33 12" stroke="black" stroke-width="1" fill={color7} />

                {/* Selve kragen */}
                <path d="M 32.25 9.15 
                S 45 36, 57.75 9 L 57.75 9 
                L 61.95 7.2 
                S 46.5 45.75, 28.05 7.2 Z" stroke="black" stroke-width="1" fill={color5} />

                {/* Omriss */}
                <path d="M 18.75 86.25 
                S 26.25 37.5, 15 15 L 15 15 
                S 26.25 15, 27.9 7.875 L 27.9 7.875 
                S 45 45, 62.1 7.875 L 62.1 7.875 
                S 63.75 15, 75 15 L 75 15 
                S 63.75 37.5, 71.25 86.25 L 71.25 86.25 
                S 45 90, 18.375 86.25" stroke="black" stroke-width="1" fill="none" />

            </svg>
        </div>
    );
}

export default DefenderShirt;