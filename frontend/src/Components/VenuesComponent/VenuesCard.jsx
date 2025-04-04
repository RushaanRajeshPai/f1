import React from 'react';
import austrack from '../../assets/austrack.jpeg';
import auscircuit from '../../assets/auscirc.jpeg';
import ausgp from '../../assets/ausgp.jpeg';
import chinatrack from '../../assets/chinatrack.jpeg';
import chinacircuit from '../../assets/chinacircuit.jpeg';
import chinatrophy from '../../assets/chinatrophy.jpeg';
import japantrack from '../../assets/japantrack.jpeg';
import japancircuit from '../../assets/japancircuit.jpeg';
import japantrophy from '../../assets/japantrophy.jpeg';
import bahraintrack from '../../assets/bahraintrack.jpeg';
import bahraincircuit from '../../assets/bahraincircuit.jpeg';
import bahraintrophy from '../../assets/bahraintrophy.jpeg';
// import sauditrack from '../../assets/sauditrack.jpeg';
import saudicircuit from '../../assets/saudicircuit.jpeg';
import sauditrophy from '../../assets/sauditrophy.jpeg';
import miamicircuit from '../../assets/miamicircuit.jpeg';
import miamitrophy from '../../assets/miamitrophy.jpeg';
import imolatrack from '../../assets/imolatrack.jpeg';
import imolacircuit from '../../assets/imolacircuit.jpeg';
import imolatrophy from '../../assets/imolatrophy.jpeg';
import monacotrack from '../../assets/monacotrack.jpeg';
import monacocircuit from '../../assets/monacocircuit.jpeg';
import monacotrophy from '../../assets/monacotrophy.jpeg';
import spanishtrack from '../../assets/spanishtrack.jpeg';
import spanishcircuit from '../../assets/spanishcircuit.jpeg';
import spanishtrophy from '../../assets/spanishtrophy.jpeg';
import canadiantrack from '../../assets/canadiantrack.jpeg';
import canadiancircuit from '../../assets/canadiancircuit.jpeg';
import canadiantrophy from '../../assets/canadiantrophy.jpeg';
import austriantrack from '../../assets/austriantrack.jpeg';
import austriancircuit from '../../assets/austriancircuit.jpeg';
import austriantrophy from '../../assets/austriantrophy.jpeg';
import britishtrack from '../../assets/britishtrack.jpeg';
import britishcircuit from '../../assets/britishcircuit.jpeg';
import britishtrophy from '../../assets/britishtrophy.jpeg';
import belgiantrack from '../../assets/belgiantrack.jpeg';
import belgiancircuit from '../../assets/belgiancircuit.jpeg';
import belgiantrophy from '../../assets/belgiantrophy.jpeg';
import hungariantrack from '../../assets/hungariantrack.jpeg';
import hungariancircuit from '../../assets/hungariancircuit.jpeg';
import hungariantrophy from '../../assets/hungariantrophy.jpeg';
import dutchtrack from '../../assets/dutchtrack.jpeg';
import dutchcircuit from '../../assets/dutchcircuit.jpeg';
import dutchtrophy from '../../assets/dutchtrophy.jpeg';
import monzatrack from '../../assets/monzatrack.jpeg';
import monzacircuit from '../../assets/monzacircuit.jpeg';
import monzatrophy from '../../assets/monzatrophy.jpg';
import bakutrack from '../../assets/bakutrack.jpeg';
import bakucircuit from '../../assets/bakucircuit.jpeg';
import bakutrophy from '../../assets/bakutrophy.jpeg';
import singaporetrack from '../../assets/singaporetrack.jpeg';
import singaporecircuit from '../../assets/singaporecircuit.jpeg';
import singaporetrophy from '../../assets/singaporetrophy.jpeg';
import ustrack from '../../assets/ustrack.jpeg';
import uscircuit from '../../assets/uscircuit.jpeg';
import ustrophy from '../../assets/ustrophy.jpeg';
import mexicotrack from '../../assets/mexicotrack.png';
import mexicocircuit from '../../assets/mexicocircuit.jpeg';
import mexicotrophy from '../../assets/mexicotrophy.jpeg';
import braziltrack from '../../assets/braziltrack.png';
import brazilcircuit from '../../assets/brazilcircuit.jpeg';
import braziltrophy from '../../assets/braziltrophy.jpeg';



const TrackCard = () => {
    return (
        <div>
            <div className="max-w-4xl mx-auto mt-10 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                {/* Header */}
                <div className="bg-red-600 text-white px-6 py-4">
                    <h2 className="text-3xl font-bold">Australian Grand Prix</h2>
                    <p className="text-sm opacity-90">Albert Park Circuit, Melbourne, Australia</p>
                </div>

                {/* Media Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 pt-6">
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Track Layout</p>
                        <img
                            src={austrack}
                            alt="Albert Park Layout"
                            className="rounded-lg w-full h-95"
                        />

                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Circuit Photo</p>
                        <img
                            src={auscircuit}
                            alt="Albert Park Circuit"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Trophy</p>
                        <img
                            src={ausgp}
                            alt="Australian GP Trophy"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                </div>

                {/* Description */}
                <div className="px-6 pt-4">
                    <p className="text-gray-700 text-base mb-4">
                        <strong>Description:</strong> A semi-street circuit blending speed and tight corners, Albert Park is known for its beautiful lakeside setting and unpredictable races. The Australian GP often marks the start of the F1 season and brings a mix of excitement and strategy.
                    </p>
                </div>

                {/* Track Info Section */}
                <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <p className="text-gray-700"><strong>Track Length:</strong> 5.278 km</p>
                        <p className="text-gray-700"><strong>No. of Turns:</strong> 14</p>
                        <p className="text-gray-700"><strong>Avg Speeds:</strong> ~235 km/h</p>
                        <p className="text-gray-700"><strong>Speed Traps:</strong> 2</p>
                        <p className="text-gray-700"><strong>No. of Laps:</strong> 58</p>
                        <p className="text-gray-700"><strong>No. of Races:</strong> 37 (as of 2024)</p>
                    </div>

                    <div>
                        <p className="text-gray-700"><strong>Opened:</strong> 1996 (F1 debut)</p>
                        <p className="text-gray-700"><strong>Most Memorable Race:</strong> 2023 – Chaos with red flags and late drama</p>
                        <p className="text-gray-700"><strong>Driver with Most Wins:</strong> Michael Schumacher (4)</p>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto mt-10 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                {/* Header */}
                <div className="bg-red-700 text-white px-6 py-4">
                    <h2 className="text-3xl font-bold">Chinese Grand Prix</h2>
                    <p className="text-sm opacity-90">Shanghai International Circuit, China</p>
                </div>

                {/* Media Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 pt-6">
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Track Layout</p>
                        <img
                            src={chinatrack}
                            alt="Shanghai Layout"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Circuit Photo</p>
                        <img
                            src={chinacircuit}
                            alt="Shanghai Circuit"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Trophy</p>
                        <img
                            src={chinatrophy}
                            alt="Chinese GP Trophy"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                </div>

                {/* Description */}
                <div className="px-6 pt-4">
                    <p className="text-gray-700 text-base mb-4">
                        <strong>Description:</strong> The Shanghai International Circuit is known for its unique layout inspired by the Chinese character "上" (shàng, meaning "up"). It features long straights and tight technical sections, offering great overtaking opportunities and tire strategy battles.
                    </p>
                </div>

                {/* Track Info Section */}
                <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <p className="text-gray-700"><strong>Track Length:</strong> 5.451 km</p>
                        <p className="text-gray-700"><strong>No. of Turns:</strong> 16</p>
                        <p className="text-gray-700"><strong>Avg Speeds:</strong> ~210 km/h</p>
                        <p className="text-gray-700"><strong>Speed Traps:</strong> 1</p>
                        <p className="text-gray-700"><strong>No. of Laps:</strong> 56</p>
                        <p className="text-gray-700"><strong>No. of Races:</strong> 16 (as of 2024)</p>
                    </div>

                    <div>
                        <p className="text-gray-700"><strong>Opened:</strong> 2004</p>
                        <p className="text-gray-700"><strong>Most Memorable Race:</strong> 2019 – Lewis Hamilton vs Bottas duel in tricky conditions</p>
                        <p className="text-gray-700"><strong>Driver with Most Wins:</strong> Lewis Hamilton (6)</p>
                    </div>
                </div>
            </div>


            <div className="max-w-4xl mx-auto mt-10 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                {/* Header */}
                <div className="bg-red-800 text-white px-6 py-4">
                    <h2 className="text-3xl font-bold">Japanese Grand Prix</h2>
                    <p className="text-sm opacity-90">Suzuka International Racing Course, Japan</p>
                </div>

                {/* Media Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 pt-6">
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Track Layout</p>
                        <img
                            src={japantrack}
                            alt="Suzuka Layout"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Circuit Photo</p>
                        <img
                            src={japancircuit}
                            alt="Suzuka Circuit"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Trophy</p>
                        <img
                            src={japantrophy}
                            alt="Japanese GP Trophy"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                </div>

                {/* Description */}
                <div className="px-6 pt-4">
                    <p className="text-gray-700 text-base mb-4">
                        <strong>Description:</strong> Suzuka is one of the most iconic and technical circuits on the calendar, featuring a rare figure-eight layout. It’s known for its fast, flowing corners like the Esses, 130R, and the Degner curves, often producing thrilling and historic races.
                    </p>
                </div>

                {/* Track Info Section */}
                <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <p className="text-gray-700"><strong>Track Length:</strong> 5.807 km</p>
                        <p className="text-gray-700"><strong>No. of Turns:</strong> 18</p>
                        <p className="text-gray-700"><strong>Avg Speeds:</strong> ~220 km/h</p>
                        <p className="text-gray-700"><strong>Speed Traps:</strong> 1</p>
                        <p className="text-gray-700"><strong>No. of Laps:</strong> 53</p>
                        <p className="text-gray-700"><strong>No. of Races:</strong> 37 (as of 2024)</p>
                    </div>

                    <div>
                        <p className="text-gray-700"><strong>Opened:</strong> 1987 (F1 debut)</p>
                        <p className="text-gray-700"><strong>Most Memorable Race:</strong> 1989 & 1990 – Senna vs Prost drama</p>
                        <p className="text-gray-700"><strong>Driver with Most Wins:</strong> Michael Schumacher (6)</p>
                    </div>
                </div>
            </div>


            <div className="max-w-4xl mx-auto mt-10 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                {/* Header */}
                <div className="bg-yellow-700 text-white px-6 py-4">
                    <h2 className="text-3xl font-bold">Bahrain Grand Prix</h2>
                    <p className="text-sm opacity-90">Bahrain International Circuit, Sakhir</p>
                </div>

                {/* Media Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 pt-6">
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Track Layout</p>
                        <img
                            src={bahraintrack}
                            alt="Bahrain Layout"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Circuit Photo</p>
                        <img
                            src={bahraincircuit}
                            alt="Bahrain Circuit"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Trophy</p>
                        <img
                            src={bahraintrophy}
                            alt="Bahrain GP Trophy"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                </div>

                {/* Description */}
                <div className="px-6 pt-4">
                    <p className="text-gray-700 text-base mb-4">
                        <strong>Description:</strong> The Bahrain GP is known for its desert setting and night racing under the lights. It’s one of the most visually stunning races on the calendar and often produces wheel-to-wheel action, especially at Turn 1 and the long straights.
                    </p>
                </div>

                {/* Track Info Section */}
                <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <p className="text-gray-700"><strong>Track Length:</strong> 5.412 km</p>
                        <p className="text-gray-700"><strong>No. of Turns:</strong> 15</p>
                        <p className="text-gray-700"><strong>Avg Speeds:</strong> ~205 km/h</p>
                        <p className="text-gray-700"><strong>Speed Traps:</strong> 2</p>
                        <p className="text-gray-700"><strong>No. of Laps:</strong> 57</p>
                        <p className="text-gray-700"><strong>No. of Races:</strong> 20 (as of 2024)</p>
                    </div>

                    <div>
                        <p className="text-gray-700"><strong>Opened:</strong> 2004</p>
                        <p className="text-gray-700"><strong>Most Memorable Race:</strong> 2020 – Sergio Perez's first F1 win after a stunning comeback</p>
                        <p className="text-gray-700"><strong>Driver with Most Wins:</strong> Lewis Hamilton (5)</p>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto mt-10 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                {/* Header */}
                <div className="bg-purple-800 text-white px-6 py-4">
                    <h2 className="text-3xl font-bold">Saudi Arabian Grand Prix</h2>
                    <p className="text-sm opacity-90">Jeddah Corniche Circuit, Jeddah, Saudi Arabia</p>
                </div>

                {/* Media Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 pt-6">
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Track Layout</p>
                        {/* <img 
        src={sauditrack}
        alt="Jeddah Layout" 
        className="rounded-lg w-full h-95"
      /> */}
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Circuit Photo</p>
                        <img
                            src={saudicircuit}
                            alt="Jeddah Circuit"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Trophy</p>
                        <img
                            src={sauditrophy}
                            alt="Saudi Arabian GP Trophy"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                </div>

                {/* Description */}
                <div className="px-6 pt-4">
                    <p className="text-gray-700 text-base mb-4">
                        <strong>Description:</strong> The Jeddah Corniche Circuit is the fastest street circuit in Formula 1, featuring long straights and fast corners near the Red Sea. Its high-speed nature and close walls offer both thrill and risk, especially under the floodlights during night racing.
                    </p>
                </div>

                {/* Track Info Section */}
                <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <p className="text-gray-700"><strong>Track Length:</strong> 6.174 km</p>
                        <p className="text-gray-700"><strong>No. of Turns:</strong> 27</p>
                        <p className="text-gray-700"><strong>Avg Speeds:</strong> ~250 km/h</p>
                        <p className="text-gray-700"><strong>Speed Traps:</strong> 2</p>
                        <p className="text-gray-700"><strong>No. of Laps:</strong> 50</p>
                        <p className="text-gray-700"><strong>No. of Races:</strong> 4 (as of 2024)</p>
                    </div>

                    <div>
                        <p className="text-gray-700"><strong>Opened:</strong> 2021</p>
                        <p className="text-gray-700"><strong>Most Memorable Race:</strong> 2021 – Hamilton vs Verstappen epic battle under lights</p>
                        <p className="text-gray-700"><strong>Driver with Most Wins:</strong> Max Verstappen (3)</p>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto mt-10 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                {/* Header */}
                <div className="bg-cyan-800 text-white px-6 py-4">
                    <h2 className="text-3xl font-bold">Miami Grand Prix</h2>
                    <p className="text-sm opacity-90">Miami International Autodrome, Florida, USA</p>
                </div>

                {/* Media Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 pt-6">
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Track Layout</p>
                        {/* <img
                            src={miamitrack}
                            alt="Miami Layout"
                            className="rounded-lg w-full h-95"
                        /> */}
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Circuit Photo</p>
                        <img
                            src={miamicircuit}
                            alt="Miami Circuit"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Trophy</p>
                        <img
                            src={miamitrophy}
                            alt="Miami GP Trophy"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                </div>

                {/* Description */}
                <div className="px-6 pt-4">
                    <p className="text-gray-700 text-base mb-4">
                        <strong>Description:</strong> The Miami GP is held around the Hard Rock Stadium and offers a unique mix of tight corners and long straights. It's part of F1’s push into the US market and blends sport with a party-like festival atmosphere.
                    </p>
                </div>

                {/* Track Info Section */}
                <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <p className="text-gray-700"><strong>Track Length:</strong> 5.412 km</p>
                        <p className="text-gray-700"><strong>No. of Turns:</strong> 19</p>
                        <p className="text-gray-700"><strong>Avg Speeds:</strong> ~215 km/h</p>
                        <p className="text-gray-700"><strong>Speed Traps:</strong> 2</p>
                        <p className="text-gray-700"><strong>No. of Laps:</strong> 57</p>
                        <p className="text-gray-700"><strong>No. of Races:</strong> 2 (as of 2024)</p>
                    </div>

                    <div>
                        <p className="text-gray-700"><strong>Opened:</strong> 2022</p>
                        <p className="text-gray-700"><strong>Most Memorable Race:</strong> 2023 – Verstappen wins from P9 with impressive strategy</p>
                        <p className="text-gray-700"><strong>Driver with Most Wins:</strong> Max Verstappen (2)</p>
                    </div>
                </div>
            </div>
            <div className="max-w-4xl mx-auto mt-10 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                {/* Header */}
                <div className="bg-green-800 text-white px-6 py-4">
                    <h2 className="text-3xl font-bold">Emilia Romagna Grand Prix</h2>
                    <p className="text-sm opacity-90">Autodromo Enzo e Dino Ferrari, Imola, Italy</p>
                </div>

                {/* Media Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 pt-6">
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Track Layout</p>
                        <img
                            src={imolatrack}
                            alt="Imola Track Layout"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Circuit Photo</p>
                        <img
                            src={imolacircuit}
                            alt="Imola Circuit"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Trophy</p>
                        <img
                            src={imolatrophy}
                            alt="Imola GP Trophy"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                </div>

                {/* Description */}
                <div className="px-6 pt-4">
                    <p className="text-gray-700 text-base mb-4">
                        <strong>Description:</strong> Imola is a historic circuit steeped in F1 legacy, known for its fast, narrow layout with limited run-off areas. It returned to the calendar in 2020 and is famed for classic corners like Tamburello and Acque Minerali, making it a true driver’s track.
                    </p>
                </div>

                {/* Track Info Section */}
                <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <p className="text-gray-700"><strong>Track Length:</strong> 4.909 km</p>
                        <p className="text-gray-700"><strong>No. of Turns:</strong> 19</p>
                        <p className="text-gray-700"><strong>Avg Speeds:</strong> ~225 km/h</p>
                        <p className="text-gray-700"><strong>Speed Traps:</strong> 1</p>
                        <p className="text-gray-700"><strong>No. of Laps:</strong> 63</p>
                        <p className="text-gray-700"><strong>No. of Races:</strong> 31 (including San Marino GPs)</p>
                    </div>

                    <div>
                        <p className="text-gray-700"><strong>Opened:</strong> 1980 (F1 debut as Italian GP)</p>
                        <p className="text-gray-700"><strong>Most Memorable Race:</strong> 2021 – Wet-dry chaos and Hamilton recovery drive</p>
                        <p className="text-gray-700"><strong>Driver with Most Wins:</strong> Michael Schumacher (7)</p>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto mt-10 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                {/* Header */}
                <div className="bg-yellow-500 text-white px-6 py-4">
                    <h2 className="text-3xl font-bold">Monaco Grand Prix</h2>
                    <p className="text-sm opacity-90">Circuit de Monaco, Monte Carlo</p>
                </div>

                {/* Media Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 pt-6">
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Track Layout</p>
                        <img
                            src={monacotrack}
                            alt="Monaco Track Layout"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Circuit Photo</p>
                        <img
                            src={monacocircuit}
                            alt="Monaco Circuit"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Trophy</p>
                        <img
                            src={monacotrophy}
                            alt="Monaco GP Trophy"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                </div>

                {/* Description */}
                <div className="px-6 pt-4">
                    <p className="text-gray-700 text-base mb-4">
                        <strong>Description:</strong> The Monaco Grand Prix is the crown jewel of Formula 1. With its tight, twisting streets, unforgiving barriers, and glamorous backdrop, it's the ultimate test of precision. Overtaking is nearly impossible, making qualifying and race strategy critical.
                    </p>
                </div>

                {/* Track Info Section */}
                <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <p className="text-gray-700"><strong>Track Length:</strong> 3.337 km</p>
                        <p className="text-gray-700"><strong>No. of Turns:</strong> 19</p>
                        <p className="text-gray-700"><strong>Avg Speeds:</strong> ~160 km/h</p>
                        <p className="text-gray-700"><strong>Speed Traps:</strong> 1</p>
                        <p className="text-gray-700"><strong>No. of Laps:</strong> 78</p>
                        <p className="text-gray-700"><strong>No. of Races:</strong> 70+ (since 1950)</p>
                    </div>

                    <div>
                        <p className="text-gray-700"><strong>Opened:</strong> 1929 (F1 debut in 1950)</p>
                        <p className="text-gray-700"><strong>Most Memorable Race:</strong> 1992 – Senna holds off Mansell in dramatic finish</p>
                        <p className="text-gray-700"><strong>Driver with Most Wins:</strong> Ayrton Senna (6)</p>
                    </div>
                </div>
            </div>
            <div className="max-w-4xl mx-auto mt-10 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                {/* Header */}
                <div className="bg-red-700 text-white px-6 py-4">
                    <h2 className="text-3xl font-bold">Spanish Grand Prix</h2>
                    <p className="text-sm opacity-90">Circuit de Barcelona-Catalunya, Spain</p>
                </div>

                {/* Media Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 pt-6">
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Track Layout</p>
                        <img
                            src={spanishtrack}
                            alt="Spanish Track Layout"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Circuit Photo</p>
                        <img
                            src={spanishcircuit}
                            alt="Barcelona Circuit"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Trophy</p>
                        <img
                            src={spanishtrophy}
                            alt="Spanish GP Trophy"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                </div>

                {/* Description */}
                <div className="px-6 pt-4">
                    <p className="text-gray-700 text-base mb-4">
                        <strong>Description:</strong> The Circuit de Barcelona-Catalunya is a staple in F1, known for its mix of high-speed corners and technical sections. It’s a favorite for testing and offers valuable insights into car performance. Overtaking is tricky, so strategy plays a major role.
                    </p>
                </div>

                {/* Track Info Section */}
                <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <p className="text-gray-700"><strong>Track Length:</strong> 4.657 km</p>
                        <p className="text-gray-700"><strong>No. of Turns:</strong> 14</p>
                        <p className="text-gray-700"><strong>Avg Speeds:</strong> ~210 km/h</p>
                        <p className="text-gray-700"><strong>Speed Traps:</strong> 2</p>
                        <p className="text-gray-700"><strong>No. of Laps:</strong> 66</p>
                        <p className="text-gray-700"><strong>No. of Races:</strong> 53 (as of 2024)</p>
                    </div>

                    <div>
                        <p className="text-gray-700"><strong>Opened:</strong> 1991 (F1 debut)</p>
                        <p className="text-gray-700"><strong>Most Memorable Race:</strong> 2016 – Verstappen wins on debut after Rosberg-Hamilton crash</p>
                        <p className="text-gray-700"><strong>Driver with Most Wins:</strong> Michael Schumacher & Lewis Hamilton (6 each)</p>
                    </div>
                </div>
            </div>
            <div className="max-w-4xl mx-auto mt-10 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                {/* Header */}
                <div className="bg-red-800 text-white px-6 py-4">
                    <h2 className="text-3xl font-bold">Canadian Grand Prix</h2>
                    <p className="text-sm opacity-90">Circuit Gilles Villeneuve, Montreal, Canada</p>
                </div>

                {/* Media Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 pt-6">
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Track Layout</p>
                        <img
                            src={canadiantrack}
                            alt="Canadian Track Layout"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Circuit Photo</p>
                        <img
                            src={canadiancircuit}
                            alt="Montreal Circuit"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Trophy</p>
                        <img
                            src={canadiantrophy}
                            alt="Canadian GP Trophy"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                </div>

                {/* Description */}
                <div className="px-6 pt-4">
                    <p className="text-gray-700 text-base mb-4">
                        <strong>Description:</strong> The Circuit Gilles Villeneuve is a semi-permanent track located on an island in Montreal. It’s fast, unforgiving, and famous for the “Wall of Champions.” The Canadian GP often delivers thrilling battles and unexpected results.
                    </p>
                </div>

                {/* Track Info Section */}
                <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <p className="text-gray-700"><strong>Track Length:</strong> 4.361 km</p>
                        <p className="text-gray-700"><strong>No. of Turns:</strong> 14</p>
                        <p className="text-gray-700"><strong>Avg Speeds:</strong> ~215 km/h</p>
                        <p className="text-gray-700"><strong>Speed Traps:</strong> 1</p>
                        <p className="text-gray-700"><strong>No. of Laps:</strong> 70</p>
                        <p className="text-gray-700"><strong>No. of Races:</strong> 52 (as of 2024)</p>
                    </div>

                    <div>
                        <p className="text-gray-700"><strong>Opened:</strong> 1978</p>
                        <p className="text-gray-700"><strong>Most Memorable Race:</strong> 2011 – Jenson Button wins chaotic 4-hour race</p>
                        <p className="text-gray-700"><strong>Driver with Most Wins:</strong> Michael Schumacher & Lewis Hamilton (7 each)</p>
                    </div>
                </div>
            </div>
            <div className="max-w-4xl mx-auto mt-10 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                {/* Header */}
                <div className="bg-red-600 text-white px-6 py-4">
                    <h2 className="text-3xl font-bold">Austrian Grand Prix</h2>
                    <p className="text-sm opacity-90">Red Bull Ring, Spielberg, Austria</p>
                </div>

                {/* Media Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 pt-6">
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Track Layout</p>
                        <img
                            src={austriantrack}
                            alt="Austrian Track Layout"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Circuit Photo</p>
                        <img
                            src={austriancircuit}
                            alt="Red Bull Ring"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Trophy</p>
                        <img
                            src={austriantrophy}
                            alt="Austrian GP Trophy"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                </div>

                {/* Description */}
                <div className="px-6 pt-4">
                    <p className="text-gray-700 text-base mb-4">
                        <strong>Description:</strong> The Red Bull Ring is a short but fast track nestled in the Styrian hills. Known for its elevation changes, heavy braking zones, and breathtaking alpine backdrop, it often delivers tight battles and thrilling overtakes.
                    </p>
                </div>

                {/* Track Info Section */}
                <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <p className="text-gray-700"><strong>Track Length:</strong> 4.318 km</p>
                        <p className="text-gray-700"><strong>No. of Turns:</strong> 10</p>
                        <p className="text-gray-700"><strong>Avg Speeds:</strong> ~230 km/h</p>
                        <p className="text-gray-700"><strong>Speed Traps:</strong> 1</p>
                        <p className="text-gray-700"><strong>No. of Laps:</strong> 71</p>
                        <p className="text-gray-700"><strong>No. of Races:</strong> 37 (as of 2024)</p>
                    </div>

                    <div>
                        <p className="text-gray-700"><strong>Opened:</strong> 1970 (Reopened in 2014 as Red Bull Ring)</p>
                        <p className="text-gray-700"><strong>Most Memorable Race:</strong> 2019 – Verstappen vs Leclerc late battle for victory</p>
                        <p className="text-gray-700"><strong>Driver with Most Wins:</strong> Max Verstappen (4)</p>
                    </div>
                </div>
            </div>
            <div className="max-w-4xl mx-auto mt-10 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                {/* Header */}
                <div className="bg-gray-800 text-white px-6 py-4">
                    <h2 className="text-3xl font-bold">British Grand Prix</h2>
                    <p className="text-sm opacity-90">Silverstone Circuit, United Kingdom</p>
                </div>

                {/* Media Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 pt-6">
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Track Layout</p>
                        <img
                            src={britishtrack}
                            alt="Silverstone Track Layout"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Circuit Photo</p>
                        <img
                            src={britishcircuit}
                            alt="Silverstone Circuit"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Trophy</p>
                        <img
                            src={britishtrophy}
                            alt="British GP Trophy"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                </div>

                {/* Description */}
                <div className="px-6 pt-4">
                    <p className="text-gray-700 text-base mb-4">
                        <strong>Description:</strong> Silverstone is the birthplace of Formula 1, hosting the first-ever F1 World Championship race in 1950. Known for legendary corners like Maggots, Becketts, and Copse, it's one of the fastest and most historic circuits on the calendar.
                    </p>
                </div>

                {/* Track Info Section */}
                <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <p className="text-gray-700"><strong>Track Length:</strong> 5.891 km</p>
                        <p className="text-gray-700"><strong>No. of Turns:</strong> 18</p>
                        <p className="text-gray-700"><strong>Avg Speeds:</strong> ~230 km/h</p>
                        <p className="text-gray-700"><strong>Speed Traps:</strong> 2</p>
                        <p className="text-gray-700"><strong>No. of Laps:</strong> 52</p>
                        <p className="text-gray-700"><strong>No. of Races:</strong> 77 (as of 2024)</p>
                    </div>

                    <div>
                        <p className="text-gray-700"><strong>Opened:</strong> 1948 (F1 debut in 1950)</p>
                        <p className="text-gray-700"><strong>Most Memorable Race:</strong> 2021 – Hamilton vs Verstappen collision & comeback win</p>
                        <p className="text-gray-700"><strong>Driver with Most Wins:</strong> Lewis Hamilton (8)</p>
                    </div>
                </div>
            </div>
            <div className="max-w-4xl mx-auto mt-10 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                {/* Header */}
                <div className="bg-yellow-700 text-white px-6 py-4">
                    <h2 className="text-3xl font-bold">Belgian Grand Prix</h2>
                    <p className="text-sm opacity-90">Circuit de Spa-Francorchamps, Belgium</p>
                </div>

                {/* Media Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 pt-6">
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Track Layout</p>
                        <img
                            src={belgiantrack}
                            alt="Spa Track Layout"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Circuit Photo</p>
                        <img
                            src={belgiancircuit}
                            alt="Spa Circuit"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Trophy</p>
                        <img
                            src={belgiantrophy}
                            alt="Belgian GP Trophy"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                </div>

                {/* Description */}
                <div className="px-6 pt-4">
                    <p className="text-gray-700 text-base mb-4">
                        <strong>Description:</strong> Spa-Francorchamps is one of the most iconic circuits in motorsport. Known for its fast, flowing layout, dramatic elevation changes, and unpredictable weather, it features the legendary Eau Rouge-Raidillon complex and is a fan and driver favorite.
                    </p>
                </div>

                {/* Track Info Section */}
                <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <p className="text-gray-700"><strong>Track Length:</strong> 7.004 km</p>
                        <p className="text-gray-700"><strong>No. of Turns:</strong> 19</p>
                        <p className="text-gray-700"><strong>Avg Speeds:</strong> ~240 km/h</p>
                        <p className="text-gray-700"><strong>Speed Traps:</strong> 1</p>
                        <p className="text-gray-700"><strong>No. of Laps:</strong> 44</p>
                        <p className="text-gray-700"><strong>No. of Races:</strong> 78 (as of 2024)</p>
                    </div>

                    <div>
                        <p className="text-gray-700"><strong>Opened:</strong> 1925</p>
                        <p className="text-gray-700"><strong>Most Memorable Race:</strong> 1998 – Massive first-lap pileup and Jordan's 1-2 finish</p>
                        <p className="text-gray-700"><strong>Driver with Most Wins:</strong> Michael Schumacher (6)</p>
                    </div>
                </div>
            </div>
            <div className="max-w-4xl mx-auto mt-10 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                {/* Header */}
                <div className="bg-red-700 text-white px-6 py-4">
                    <h2 className="text-3xl font-bold">Hungarian Grand Prix</h2>
                    <p className="text-sm opacity-90">Hungaroring, Budapest, Hungary</p>
                </div>

                {/* Media Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 pt-6">
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Track Layout</p>
                        <img
                            src={hungariantrack}
                            alt="Hungaroring Layout"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Circuit Photo</p>
                        <img
                            src={hungariancircuit}
                            alt="Hungaroring Circuit"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Trophy</p>
                        <img
                            src={hungariantrophy}
                            alt="Hungarian GP Trophy"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                </div>

                {/* Description */}
                <div className="px-6 pt-4">
                    <p className="text-gray-700 text-base mb-4">
                        <strong>Description:</strong> The Hungaroring is a tight and twisty circuit often compared to a karting track. It's physically demanding, hot, and tough on tires, making overtaking difficult and qualifying crucial. It has hosted many unpredictable and strategic races.
                    </p>
                </div>

                {/* Track Info Section */}
                <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <p className="text-gray-700"><strong>Track Length:</strong> 4.381 km</p>
                        <p className="text-gray-700"><strong>No. of Turns:</strong> 14</p>
                        <p className="text-gray-700"><strong>Avg Speeds:</strong> ~190 km/h</p>
                        <p className="text-gray-700"><strong>Speed Traps:</strong> 1</p>
                        <p className="text-gray-700"><strong>No. of Laps:</strong> 70</p>
                        <p className="text-gray-700"><strong>No. of Races:</strong> 38 (as of 2024)</p>
                    </div>

                    <div>
                        <p className="text-gray-700"><strong>Opened:</strong> 1986</p>
                        <p className="text-gray-700"><strong>Most Memorable Race:</strong> 2021 – Ocon's first F1 win after chaos at Turn 1</p>
                        <p className="text-gray-700"><strong>Driver with Most Wins:</strong> Lewis Hamilton (8)</p>
                    </div>
                </div>
            </div>
            <div className="max-w-4xl mx-auto mt-10 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                {/* Header */}
                <div className="bg-orange-600 text-white px-6 py-4">
                    <h2 className="text-3xl font-bold">Dutch Grand Prix</h2>
                    <p className="text-sm opacity-90">Circuit Zandvoort, Netherlands</p>
                </div>

                {/* Media Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 pt-6">
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Track Layout</p>
                        <img
                            src={dutchtrack}
                            alt="Zandvoort Track Layout"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Circuit Photo</p>
                        <img
                            src={dutchcircuit}
                            alt="Zandvoort Circuit"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Trophy</p>
                        <img
                            src={dutchtrophy}
                            alt="Dutch GP Trophy"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                </div>

                {/* Description */}
                <div className="px-6 pt-4">
                    <p className="text-gray-700 text-base mb-4">
                        <strong>Description:</strong> Zandvoort returned to the F1 calendar in 2021 after a long hiatus. Famous for its high-speed banked corners and coastal setting, it delivers a thrilling experience for both fans and drivers, especially with its passionate Dutch crowd.
                    </p>
                </div>

                {/* Track Info Section */}
                <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <p className="text-gray-700"><strong>Track Length:</strong> 4.259 km</p>
                        <p className="text-gray-700"><strong>No. of Turns:</strong> 14</p>
                        <p className="text-gray-700"><strong>Avg Speeds:</strong> ~210 km/h</p>
                        <p className="text-gray-700"><strong>Speed Traps:</strong> 1</p>
                        <p className="text-gray-700"><strong>No. of Laps:</strong> 72</p>
                        <p className="text-gray-700"><strong>No. of Races:</strong> 33 (including pre-1985)</p>
                    </div>

                    <div>
                        <p className="text-gray-700"><strong>Opened:</strong> 1952 (F1 return in 2021)</p>
                        <p className="text-gray-700"><strong>Most Memorable Race:</strong> 2021 – Verstappen wins at home in a sea of orange</p>
                        <p className="text-gray-700"><strong>Driver with Most Wins:</strong> Max Verstappen (3)</p>
                    </div>
                </div>
            </div>
            <div className="max-w-4xl mx-auto mt-10 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                {/* Header */}
                <div className="bg-green-700 text-white px-6 py-4">
                    <h2 className="text-3xl font-bold">Italian Grand Prix</h2>
                    <p className="text-sm opacity-90">Autodromo Nazionale Monza, Italy</p>
                </div>

                {/* Media Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 pt-6">
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Track Layout</p>
                        <img
                            src={monzatrack}
                            alt="Monza Track Layout"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Circuit Photo</p>
                        <img
                            src={monzacircuit}
                            alt="Monza Circuit"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Trophy</p>
                        <img
                            src={monzatrophy}
                            alt="Monza GP Trophy"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                </div>

                {/* Description */}
                <div className="px-6 pt-4">
                    <p className="text-gray-700 text-base mb-4">
                        <strong>Description:</strong> Monza is the fastest track in Formula 1, nicknamed the "Temple of Speed." With historic straights, heavy braking zones, and passionate Tifosi fans, it’s a venue where every mistake is costly and every win is legendary.
                    </p>
                </div>

                {/* Track Info Section */}
                <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <p className="text-gray-700"><strong>Track Length:</strong> 5.793 km</p>
                        <p className="text-gray-700"><strong>No. of Turns:</strong> 11</p>
                        <p className="text-gray-700"><strong>Avg Speeds:</strong> ~250+ km/h</p>
                        <p className="text-gray-700"><strong>Speed Traps:</strong> 2</p>
                        <p className="text-gray-700"><strong>No. of Laps:</strong> 53</p>
                        <p className="text-gray-700"><strong>No. of Races:</strong> 93 (as of 2024)</p>
                    </div>

                    <div>
                        <p className="text-gray-700"><strong>Opened:</strong> 1922</p>
                        <p className="text-gray-700"><strong>Most Memorable Race:</strong> 2020 – Pierre Gasly’s shock victory in a chaotic race</p>
                        <p className="text-gray-700"><strong>Driver with Most Wins:</strong> Michael Schumacher & Lewis Hamilton (5 each)</p>
                    </div>
                </div>
            </div>
            <div className="max-w-4xl mx-auto mt-10 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                {/* Header */}
                <div className="bg-cyan-700 text-white px-6 py-4">
                    <h2 className="text-3xl font-bold">Azerbaijan Grand Prix</h2>
                    <p className="text-sm opacity-90">Baku City Circuit, Azerbaijan</p>
                </div>

                {/* Media Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 pt-6">
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Track Layout</p>
                        <img
                            src={bakutrack}
                            alt="Baku Track Layout"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Circuit Photo</p>
                        <img
                            src={bakucircuit}
                            alt="Baku Circuit"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Trophy</p>
                        <img
                            src={bakutrophy}
                            alt="Baku GP Trophy"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                </div>

                {/* Description */}
                <div className="px-6 pt-4">
                    <p className="text-gray-700 text-base mb-4">
                        <strong>Description:</strong> Baku combines the tight castle-section streets with one of the longest straights in F1. It’s a street circuit that regularly delivers chaotic races, unexpected winners, and dramatic late-race moments. High risk, high reward.
                    </p>
                </div>

                {/* Track Info Section */}
                <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <p className="text-gray-700"><strong>Track Length:</strong> 6.003 km</p>
                        <p className="text-gray-700"><strong>No. of Turns:</strong> 20</p>
                        <p className="text-gray-700"><strong>Avg Speeds:</strong> ~215 km/h</p>
                        <p className="text-gray-700"><strong>Speed Traps:</strong> 2</p>
                        <p className="text-gray-700"><strong>No. of Laps:</strong> 51</p>
                        <p className="text-gray-700"><strong>No. of Races:</strong> 7 (as of 2024)</p>
                    </div>

                    <div>
                        <p className="text-gray-700"><strong>Opened:</strong> 2016</p>
                        <p className="text-gray-700"><strong>Most Memorable Race:</strong> 2021 – Verstappen tire failure + Hamilton brakes error</p>
                        <p className="text-gray-700"><strong>Driver with Most Wins:</strong> Sergio Perez (2)</p>
                    </div>
                </div>
            </div>
            <div className="max-w-4xl mx-auto mt-10 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                {/* Header */}
                <div className="bg-indigo-800 text-white px-6 py-4">
                    <h2 className="text-3xl font-bold">Singapore Grand Prix</h2>
                    <p className="text-sm opacity-90">Marina Bay Street Circuit, Singapore</p>
                </div>

                {/* Media Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 pt-6">
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Track Layout</p>
                        <img
                            src={singaporetrack}
                            alt="Singapore Track Layout"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Circuit Photo</p>
                        <img
                            src={singaporecircuit}
                            alt="Singapore Circuit"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Trophy</p>
                        <img
                            src={singaporetrophy}
                            alt="Singapore GP Trophy"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                </div>

                {/* Description */}
                <div className="px-6 pt-4">
                    <p className="text-gray-700 text-base mb-4">
                        <strong>Description:</strong> Singapore hosted F1’s first-ever night race and is one of the most physically demanding on the calendar. With 90-degree corners, humid weather, and unforgiving walls, Marina Bay is a true test of endurance and focus under the lights.
                    </p>
                </div>

                {/* Track Info Section */}
                <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <p className="text-gray-700"><strong>Track Length:</strong> 4.940 km</p>
                        <p className="text-gray-700"><strong>No. of Turns:</strong> 19</p>
                        <p className="text-gray-700"><strong>Avg Speeds:</strong> ~170 km/h</p>
                        <p className="text-gray-700"><strong>Speed Traps:</strong> 1</p>
                        <p className="text-gray-700"><strong>No. of Laps:</strong> 62</p>
                        <p className="text-gray-700"><strong>No. of Races:</strong> 14 (as of 2024)</p>
                    </div>

                    <div>
                        <p className="text-gray-700"><strong>Opened:</strong> 2008</p>
                        <p className="text-gray-700"><strong>Most Memorable Race:</strong> 2008 – Controversial “Crashgate” involving Renault & Piquet Jr.</p>
                        <p className="text-gray-700"><strong>Driver with Most Wins:</strong> Sebastian Vettel (5)</p>
                    </div>
                </div>
            </div>
            <div className="max-w-4xl mx-auto mt-10 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                {/* Header */}
                <div className="bg-blue-800 text-white px-6 py-4">
                    <h2 className="text-3xl font-bold">United States Grand Prix</h2>
                    <p className="text-sm opacity-90">Circuit of the Americas (COTA), Austin, Texas</p>
                </div>

                {/* Media Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 pt-6">
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Track Layout</p>
                        <img
                            src={ustrack}
                            alt="COTA Track Layout"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Circuit Photo</p>
                        <img
                            src={uscircuit}
                            alt="COTA Circuit"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Trophy</p>
                        <img
                            src={ustrophy}
                            alt="US GP Trophy"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                </div>

                {/* Description */}
                <div className="px-6 pt-4">
                    <p className="text-gray-700 text-base mb-4">
                        <strong>Description:</strong> COTA is a modern classic, featuring elevation changes, flowing corners inspired by Silverstone and Suzuka, and the iconic uphill Turn 1. It’s known for great racing, strong fan turnout, and a perfect blend of technical and fast sections.
                    </p>
                </div>

                {/* Track Info Section */}
                <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <p className="text-gray-700"><strong>Track Length:</strong> 5.513 km</p>
                        <p className="text-gray-700"><strong>No. of Turns:</strong> 20</p>
                        <p className="text-gray-700"><strong>Avg Speeds:</strong> ~210 km/h</p>
                        <p className="text-gray-700"><strong>Speed Traps:</strong> 2</p>
                        <p className="text-gray-700"><strong>No. of Laps:</strong> 56</p>
                        <p className="text-gray-700"><strong>No. of Races:</strong> 11 (since 2012)</p>
                    </div>

                    <div>
                        <p className="text-gray-700"><strong>Opened:</strong> 2012</p>
                        <p className="text-gray-700"><strong>Most Memorable Race:</strong> 2018 – Kimi Räikkönen’s legendary win for Ferrari</p>
                        <p className="text-gray-700"><strong>Driver with Most Wins:</strong> Lewis Hamilton (5)</p>
                    </div>
                </div>
            </div>
            <div className="max-w-4xl mx-auto mt-10 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                {/* Header */}
                <div className="bg-green-700 text-white px-6 py-4">
                    <h2 className="text-3xl font-bold">Mexican Grand Prix</h2>
                    <p className="text-sm opacity-90">Autódromo Hermanos Rodríguez, Mexico City</p>
                </div>

                {/* Media Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 pt-6">
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Track Layout</p>
                        <img
                            src={mexicotrack}
                            alt="Mexico Track Layout"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Circuit Photo</p>
                        <img
                            src={mexicocircuit}
                            alt="Mexico Circuit"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Trophy</p>
                        <img
                            src={mexicotrophy}
                            alt="Mexico GP Trophy"
                            className="rounded-lg w-full h-95"
                        />
                    </div>
                </div>

                {/* Description */}
                <div className="px-6 pt-4">
                    <p className="text-gray-700 text-base mb-4">
                        <strong>Description:</strong> The Autódromo Hermanos Rodríguez sits at high altitude in Mexico City, making it a challenge for engines and cooling. With its long straights and the famous stadium section, the Mexican GP delivers drama and energy like no other.
                    </p>
                </div>

                {/* Track Info Section */}
                <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <p className="text-gray-700"><strong>Track Length:</strong> 4.304 km</p>
                        <p className="text-gray-700"><strong>No. of Turns:</strong> 17</p>
                        <p className="text-gray-700"><strong>Avg Speeds:</strong> ~210 km/h</p>
                        <p className="text-gray-700"><strong>Speed Traps:</strong> 2</p>
                        <p className="text-gray-700"><strong>No. of Laps:</strong> 71</p>
                        <p className="text-gray-700"><strong>No. of Races:</strong> 23 (as of 2024)</p>
                    </div>

                    <div>
                        <p className="text-gray-700"><strong>Opened:</strong> 1963 (Returned in 2015)</p>
                        <p className="text-gray-700"><strong>Most Memorable Race:</strong> 2021 – Checo on the podium in front of his home crowd</p>
                        <p className="text-gray-700"><strong>Driver with Most Wins:</strong> Max Verstappen (5)</p>
                    </div>
                </div>
            </div>
            <div className="max-w-4xl mx-auto mt-10 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
  {/* Header */}
  <div className="bg-green-600 text-white px-6 py-4">
    <h2 className="text-3xl font-bold">Brazilian Grand Prix</h2>
    <p className="text-sm opacity-90">Autódromo José Carlos Pace (Interlagos), São Paulo</p>
  </div>

  {/* Media Section */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 pt-6">
    <div>
      <p className="text-sm text-gray-600 mb-2">Track Layout</p>
      <img 
        src={braziltrack}
        alt="Brazil Track Layout" 
        className="rounded-lg w-full h-95"
      />
    </div>
    <div>
      <p className="text-sm text-gray-600 mb-2">Circuit Photo</p>
      <img 
        src={brazilcircuit}
        alt="Brazil Circuit" 
        className="rounded-lg w-full h-95"
      />
    </div>
    <div>
      <p className="text-sm text-gray-600 mb-2">Trophy</p>
      <img 
        src={braziltrophy} 
        alt="Brazil GP Trophy" 
        className="rounded-lg w-full h-95"
      />
    </div>
  </div>

  {/* Description */}
  <div className="px-6 pt-4">
    <p className="text-gray-700 text-base mb-4">
      <strong>Description:</strong> Interlagos is one of F1’s most historic and thrilling circuits. With its unique figure-8 layout, unpredictable weather, passionate fans, and legendary moments, it’s a fan-favorite and a key venue for championship deciders.
    </p>
  </div>

  {/* Track Info Section */}
  <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <p className="text-gray-700"><strong>Track Length:</strong> 4.309 km</p>
      <p className="text-gray-700"><strong>No. of Turns:</strong> 15</p>
      <p className="text-gray-700"><strong>Avg Speeds:</strong> ~205 km/h</p>
      <p className="text-gray-700"><strong>Speed Traps:</strong> 1</p>
      <p className="text-gray-700"><strong>No. of Laps:</strong> 71</p>
      <p className="text-gray-700"><strong>No. of Races:</strong> 50 (as of 2024)</p>
    </div>

    <div>
      <p className="text-gray-700"><strong>Opened:</strong> 1940 (F1 debut in 1973)</p>
      <p className="text-gray-700"><strong>Most Memorable Race:</strong> 2008 – Hamilton wins the championship on the final corner of the final lap</p>
      <p className="text-gray-700"><strong>Driver with Most Wins:</strong> Alain Prost (6)</p>
    </div>
  </div>
</div>

        </div>
    );
};

export default TrackCard;
