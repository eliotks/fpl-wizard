import React from 'react';

function FieldBackground() {

    return (
        <div>
            <svg width="1000" height="650">

                {/* Grønt gress (starter på y=60) */}
                <rect x="0" y="560" width="1000" height="90" stroke="none" fill="#27EE14" />
                <rect x="0" y="468" width="1000" height="92" stroke="none" fill="#1CC50B" />
                <rect x="0" y="385" width="1000" height="83" stroke="none" fill="#27EE14" />
                <rect x="0" y="310" width="1000" height="75" stroke="none" fill="#1CC50B" />
                <rect x="0" y="243" width="1000" height="67" stroke="none" fill="#27EE14" />
                <rect x="0" y="184" width="1000" height="59" stroke="none" fill="#1CC50B" />
                <rect x="0" y="133" width="1000" height="51" stroke="none" fill="#27EE14" />
                <rect x="0" y="90" width="1000" height="43" stroke="none" fill="#1CC50B" />
                <rect x="0" y="60" width="1000" height="30" stroke="none" fill="#27EE14" />

                {/* Bakgrunn */}
                <polyline points="0,0 0,360 172,60 828,60 1000,360 1000,0 0,0" stroke="none" fill="#262626" />

                {/* <rect x="0" y="0" width="1000" height="60" style="fill:#34507d;stroke:none"/>
                <path d="M 172 60 S -20 300, 0 650 L -10 -10 L 828 60 S 1020 300, 1000 650 L 1010 -10 L 172 60" style="fill:#34507d;stroke:none" /> */}

                {/* Reklameskilt */}
                <polygon points="207,60 390,60 376,84 216,84" stroke="none" fill="#1A9F0D" />
                <rect x="216" y="34" width="160" height="50" stroke="none" fill="#EBEBEB" />
                <text x="248" y="67" fill="#344F79" font-size="21" font-weight="bold">REKLAME</text>
                <polygon points="610,60 793,60 784,84 624,84" stroke="none" fill="#1A9F0D" />
                <rect x="624" y="34" width="160" height="50" stroke="none" fill="#EBEBEB" />
                <text x="656" y="67" fill="#344F79" font-size="21" font-weight="bold">REKLAME</text>

                {/* Skyggen til hjørneflagg */}
                <line x1="180.2" y1="91.2" x2="194" y2="60" stroke="#1A9F0D" stroke-width="3" />
                <line x1="819.8" y1="91.2" x2="806" y2="60" stroke="#1A9F0D" stroke-width="3" />

                {/* Skyggen til målet */}
                <polygon points="408,60 592,60 584,90 416,90" stroke="none" fill="#1A9F0D" />

                {/* Nettet til målet */}
                <line x1="420" y1="32" x2="580" y2="32" stroke="white" stroke-width="2" />
                <line x1="420" y1="42" x2="580" y2="42" stroke="white" stroke-width="2" />
                <line x1="420" y1="52" x2="580" y2="52" stroke="white" stroke-width="2" />
                <line x1="420" y1="62" x2="580" y2="62" stroke="white" stroke-width="2" />
                <line x1="420" y1="72" x2="580" y2="72" stroke="white" stroke-width="2" />
                <line x1="420" y1="82" x2="580" y2="82" stroke="white" stroke-width="2" />

                <line x1="430" y1="20" x2="430" y2="90" stroke="white" stroke-width="2" />
                <line x1="440" y1="20" x2="440" y2="90" stroke="white" stroke-width="2" />
                <line x1="450" y1="20" x2="450" y2="90" stroke="white" stroke-width="2" />
                <line x1="460" y1="20" x2="460" y2="90" stroke="white" stroke-width="2" />
                <line x1="470" y1="20" x2="470" y2="90" stroke="white" stroke-width="2" />
                <line x1="480" y1="20" x2="480" y2="90" stroke="white" stroke-width="2" />
                <line x1="490" y1="20" x2="490" y2="90" stroke="white" stroke-width="2" />
                <line x1="500" y1="20" x2="500" y2="90" stroke="white" stroke-width="2" />
                <line x1="510" y1="20" x2="510" y2="90" stroke="white" stroke-width="2" />
                <line x1="520" y1="20" x2="520" y2="90" stroke="white" stroke-width="2" />
                <line x1="530" y1="20" x2="530" y2="90" stroke="white" stroke-width="2" />
                <line x1="540" y1="20" x2="540" y2="90" stroke="white" stroke-width="2" />
                <line x1="550" y1="20" x2="550" y2="90" stroke="white" stroke-width="2" />
                <line x1="560" y1="20" x2="560" y2="90" stroke="white" stroke-width="2" />
                <line x1="570" y1="20" x2="570" y2="90" stroke="white" stroke-width="2" />

                {/* Banemerking */}
                <polyline points="-10,450 180,90 820,90 1010,450" fill="none" stroke="#EFEFEF" stroke-width="3" />
                <path d="M 215 90 S 210 115, 170 110" fill="none" stroke="#EFEFEF" stroke-width="3" />
                <path d="M 785 90 S 790 115, 830 110, 830 110" fill="none" stroke="#EFEFEF" stroke-width="3" />

                {/* Hjørneflagg */}
                <line x1="180.2" y1="91.2" x2="180" y2="45" stroke="#EFEFEF" stroke-width="3" />
                <line x1="819.8" y1="91.2" x2="820" y2="45" stroke="#EFEFEF" stroke-width="3" />
                <ellipse cx="180" cy="46" rx="4" ry="3" stroke="none" fill="#EFEFEF" />
                <ellipse cx="820" cy="46" rx="4" ry="3" stroke="none" fill="#EFEFEF" />
                <polygon points="820,49 848,58 820,67" fill="#EB0909" stroke="#EFEFEF" stroke-width="2" />
                <polygon points="180,49 152,58 180,67" fill="#EB0909" stroke="#EFEFEF" stroke-width="2" />

                {/* Midtsirkelen */}
                <line x1="0" y1="560" x2="1000" y2="560" stroke="#EFEFEF" stroke-width="3" />
                <ellipse cx="500" cy="560" rx="12.8" ry="8" stroke="#EFEFEF" stroke-width="3" fill="#EFEFEF" />
                <ellipse cx="500" cy="560" rx="128" ry="80" stroke="#EFEFEF" stroke-width="3" fill="none" />

                {/* Selve målet */}
                <polyline points="420,90 420,20 580,20 580,90" fill="none" stroke="#D4D4D4" stroke-width="8" />

                {/* Boksen */}
                <polyline points="400,90 395,125 605,125 600,90" fill="none" stroke="#EFEFEF" stroke-width="3" />
                <polyline points="360,90 340,170 660,170 640,90" fill="none" stroke="#EFEFEF" stroke-width="3" />
                <path d="M 460 170 A 25,20 0 0,0 540,170" fill="none" stroke="#EFEFEF" stroke-width="3" />
                <ellipse cx="500" cy="146" rx="3" ry="2" fill="#EFEFEF" stroke="#EFEFEF" stroke-width="3" />


                {/* Under kommer en gammel versjon av spillere i en 4-4-2 formasjon */}

                {/* Keeper
                <rect x="452" y="40" width="96" height="96" stroke="gold" stroke-width="5" fill="none" />
                <circle cx="500" cy="88" r="48" stroke="black" stroke-width="5" fill="none" />

                Forsvarere
                <rect x="152" y="174" width="114" height="114" stroke="gold" stroke-width="5" fill="none" />
                <circle cx="209" cy="231" r="57" fill="none" stroke="black" stroke-width="5" />
                <rect x="346" y="174" width="114" height="114" stroke="gold" stroke-width="5" fill="none" />
                <circle cx="403" cy="231" r="57" fill="none" stroke="black" stroke-width="5" />
                <rect x="540" y="174" width="114" height="114" stroke="gold" stroke-width="5" fill="none" />
                <circle cx="597" cy="231" r="57"fill="none"  stroke="black" stroke-width="5" />
                <rect x="734" y="174" width="114" height="114" stroke="gold" stroke-width="5" fill="none" />
                <circle cx="791" cy="231" r="57" fill="none" stroke="black" stroke-width="5" />

                Midtbanespillere
                <rect x="79" y="325" width="128" height="128" stroke="gold" stroke-width="5" fill="none" />
                <circle cx="145" cy="389" r="64" fill="none" stroke="black" stroke-width="5" />
                <rect x="317" y="325" width="128" height="128" stroke="gold" stroke-width="5" fill="none" />
                <circle cx="381" cy="389" r="64" fill="none" stroke="black" stroke-width="5" />
                <rect x="555" y="325" width="128" height="128" stroke="gold" stroke-width="5" fill="none" />
                <circle cx="619" cy="389" r="64" fill="none" stroke="black" stroke-width="5" />
                <rect x="793" y="325" width="128" height="128" stroke="gold" stroke-width="5" fill="none" />
                <circle cx="857" cy="389" r="64" fill="none" stroke="black" stroke-width="5" />

                Angripere
                <rect x="214" y="480" width="142" height="142" stroke="gold" stroke-width="5" fill="none" />
                <circle cx="285" cy="551" r="71" fill="none" stroke="black" stroke-width="5" />
                <rect x="644" y="480" width="142" height="142" stroke="gold" stroke-width="5" fill="none" />
                <circle cx="715" cy="551" r="71" fill="none" stroke="black" stroke-width="5" /> */}

                </svg>
        </div>
    );
}

export default FieldBackground;