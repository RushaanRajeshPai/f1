import { useState, useEffect } from "react";

const Standings = () => {
  const [standings, setStandings] = useState({ drivers: [], teams: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("drivers");
  const [selectedYear, setSelectedYear] = useState("2024");

  useEffect(() => {
    const fetchStandings = async () => {
      setLoading(true); // Show loading state when fetching new data

      try {
        const response = await fetch(
          `http://localhost:5000/api/standings?year=${selectedYear}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch standings data");
        }

        const data = await response.json();
        setStandings(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching standings:", err);
        setError("Failed to load F1 standings. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchStandings();
  }, [selectedYear]); // ✅ This ensures the API call runs when the year changes

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">
        F1 {selectedYear} Championship Standings
      </h2>

      {/* Dropdown for selecting year */}
      <div className="mb-4 flex justify-center">
        <label className="mr-2 font-medium">Select Year:</label>
        <select
          className="border p-2 rounded-md"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          {[2020, 2021, 2022, 2023, 2024].map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* Show loading spinner while fetching */}
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
          {/* Tab Buttons */}
          <div className="flex border-b mb-4">
            <button
              className={`py-2 px-4 font-medium ${
                activeTab === "drivers"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-800"
              }`}
              onClick={() => setActiveTab("drivers")}
            >
              Driver Standings
            </button>
            <button
              className={`py-2 px-4 font-medium ${
                activeTab === "teams"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-800"
              }`}
              onClick={() => setActiveTab("teams")}
            >
              Constructor Standings
            </button>
          </div>

          {/* Standings Data */}
          <div className="mt-4">
            {activeTab === "drivers" ? (
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
                    {standings.drivers.map((driver, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-3">{driver.position}</td>
                        <td className="px-4 py-3">{driver.name}</td>
                        <td className="px-4 py-3">{driver.team}</td>
                        <td className="px-4 py-3 text-right font-bold">
                          {driver.points}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
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
                    {standings.teams.map((team, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-3">{team.position}</td>
                        <td className="px-4 py-3">{team.name}</td>
                        <td className="px-4 py-3 text-right font-bold">
                          {team.points}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Standings;