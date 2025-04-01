import React, { useState, useEffect } from 'react';

const Standings = () => {
  const [standings, setStandings] = useState({
    drivers: [],
    teams: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('drivers');

  useEffect(() => {
    const fetchStandings = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:5000/api/standings');
        
        if (!response.ok) {
          throw new Error('Failed to fetch standings data');
        }
        
        const data = await response.json();
        setStandings(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching standings:', err);
        setError('Failed to load F1 standings. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchStandings();
    
    // Optional: Set up polling to refresh data every 30 minutes
    const intervalId = setInterval(fetchStandings, 30 * 60 * 1000);
    
    return () => clearInterval(intervalId);
  }, []);

  // Function to render driver standings table
  const renderDriverStandings = () => {
    return (
      <div className="overflow-x-auto w-full">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-4 py-3 text-left">Pos</th>
              <th className="px-4 py-3 text-left">Driver</th>
              <th className="px-4 py-3 text-left">Team</th>
              <th className="px-4 py-3 text-right">Points</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {standings.drivers.map((driver) => (
              <tr key={driver.number} className="hover:bg-gray-50">
                <td className="px-4 py-3">{driver.position}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center">
                    <span className="inline-block w-8 text-center font-bold mr-2">{driver.number}</span>
                    <span>{driver.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center">
                    <div 
                      className="w-3 h-5 mr-2 rounded-sm" 
                      style={{ backgroundColor: getTeamColor(driver.team) }}
                    />
                    <span>{driver.team}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-right font-bold">{driver.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // Function to render team standings table
  const renderTeamStandings = () => {
    return (
      <div className="overflow-x-auto w-full">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-4 py-3 text-left">Pos</th>
              <th className="px-4 py-3 text-left">Team</th>
              <th className="px-4 py-3 text-right">Points</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {standings.teams.map((team) => (
              <tr key={team.name} className="hover:bg-gray-50">
                <td className="px-4 py-3">{team.position}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center">
                    <div 
                      className="w-3 h-5 mr-2 rounded-sm" 
                      style={{ backgroundColor: getTeamColor(team.name) }}
                    />
                    <span>{team.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-right font-bold">{team.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // Helper function to get team colors
  const getTeamColor = (teamName) => {
    const teamColors = {
      'Red Bull Racing': '#0600EF',
      'Ferrari': '#DC0000',
      'Mercedes': '#00D2BE',
      'McLaren': '#FF8700',
      'Aston Martin': '#006F62',
      'Alpine': '#0090FF',
      'Williams': '#005AFF',
      'RB': '#1E41FF',
      'Haas F1 Team': '#FFFFFF',
      'Kick Sauber': '#900000',
      'default': '#333333'
    };
    
    return teamColors[teamName] || teamColors.default;
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h2 className="text-2xl font-exo font-bold text-center mb-6">F1 2025 Championship Standings</h2>
      
      {loading ? (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
      ) : error ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      ) : (
        <div>
          <div className="flex border-b mb-4">
            <button
              className={`py-2 px-4 font-medium ${
                activeTab === 'drivers'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
              onClick={() => setActiveTab('drivers')}
            >
              Driver Standings
            </button>
            <button
              className={`py-2 px-4 font-medium ${
                activeTab === 'teams'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
              onClick={() => setActiveTab('teams')}
            >
              Constructor Standings
            </button>
          </div>
          
          <div className="mt-4">
            {activeTab === 'drivers' ? renderDriverStandings() : renderTeamStandings()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Standings;