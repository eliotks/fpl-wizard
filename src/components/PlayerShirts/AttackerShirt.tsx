import React from 'react';

function AttackerShirt() {
    
    // Liverpool: const colors = ["red", "red", "red", "white", "white", "BFBFBF", "brown", "none"]
    const colors = ["blue", "red", "blue", "red", "blue", "blue", "navy", "black"]; // Crystal Palace
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
            <svg width="120" height="120">

                {/* Venstre arm (stor versjon) */}
                <path d="M 20 20
                S 10 20, 12 40 L 12 40
                S 13 50, 11 60 L 11 60
                S 25 60, 28 58 L 40 30 Z
                " stroke="black" stroke-width="1" fill={color4} />

                {/* Venstre arm (liten versjon) */}
                <path d="M 20 20
                S 10 20, 12 40 L 12 40
                S 12.6 50, 11.8 55 L 11.8 55
                S 25 55, 28 53 L 40 30 Z
                " stroke="none" stroke-width="1" fill={color3} />

                {/* Venstre arm (omriss) */}
                <path d="M 20 20
                S 10 20, 12 40 L 12 40
                S 12.6 50, 11.8 55 L 11.8 55
                S 25 55, 28 53 L 40 30 Z
                " stroke="black" stroke-width="1" fill="none" />

                {/* Høyre arm (stor versjon) */}
                <path d="M 100 20
                S 110 20, 108 40 L 108 40
                S 107 50, 109 60 L 109 60
                S 95 60, 92 58 L 80 30 Z
                " stroke="black" stroke-width="1" fill={color4} />

                {/* Høyre arm (liten versjon) */}
                <path d="M 100 20
                S 110 20, 108 40 L 108 40
                S 107.4 50, 108.2 55 L 108.2 55
                S 95 55, 92 53 L 80 30 Z
                " stroke="none" stroke-width="1" fill={color3} />

                {/* Høyre arm (omriss) */}
                <path d="M 100 20
                S 110 20, 108 40 L 108 40
                S 107.4 50, 108.2 55 L 108.2 55
                S 95 55, 92 53 L 80 30 Z
                " stroke="black" stroke-width="1" fill="none" />

                {/* Hoveddel
                82 10
                */}
                <path d="M 25 115 
                S 35 50, 20 20 L 20 20 
                S 35 20, 37.2 10.5 L 37.2 10.5 
                S 60 55, 82.8 10.5 L 82.8 10.5 
                S 85 20, 100 20 L 100 20 
                S 85 50, 95 115 L 95 115 
                S 60 120, 25 115" stroke="black" stroke-width="1" fill={color1} />

                {/* Stripe 1 */}
                <path d="M 39 116.4  
                S 47 50, 35 15 L 35 15
                S 38 11 38 10 L 38 10
                S 49 32 53.6 28 L 53.6 28
                S 56 50, 53 117 L 53 117
                S 46 117 39 116.4
                " stroke={color8} stroke-width="1" fill={color2} />

                {/* Stripe 2 */}
                <path d="M 67 117
                S 64 80 66.4 28 L 66.4 28
                S 70 32, 82 10 L 82 10
                S 82 11, 85 15 L 85 15
                S 73 50, 81 116.4 L 81 116.4
                S 74 117, 67 117
                " stroke={color8} stroke-width="1" fill={color2} />

                {/* Krage bak */}
                <path d="M 40 11
                S 60 55, 79.5 11 L 79.5 11
                S 60 20, 40 11  
                " stroke="black" stroke-width="1" fill={color6} />

                {/* Hals */}
                <path d="M 44 16
                S 60 46, 76 16 L 76 16
                S 60 23, 44 16  
                " stroke="black" stroke-width="1" fill={color7} />

                {/* Selve kragen */}
                <path d="M 43 12.2
                S 60 48, 77 12 L 77 12
                L 82.6 9.6
                S 62 61, 37.4 9.6 Z
                " stroke="black" stroke-width="1" fill={color5} />

                {/* Omriss */}
                <path d="M 25 115 
                S 35 50, 20 20 L 20 20 
                S 35 20, 37.2 10.5 L 37.2 10.5 
                S 60 60, 82.8 10.5 L 82.8 10.5 
                S 85 20, 100 20 L 100 20 
                S 85 50, 95 115 L 95 115 
                S 60 120, 24.5 115" stroke="black" stroke-width="1" fill="none" />

            </svg>
        </div>
    );
}

export default AttackerShirt;