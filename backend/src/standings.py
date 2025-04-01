import requests
import json
import os

def get_f1_standings():
    # Ergast API URL for 2025 season standings
    api_url = "https://ergast.com/api/f1/2024/driverStandings.json"

    try:
        response = requests.get(api_url)
        response.raise_for_status()  # Raise an error for failed requests
        data = response.json()

        # Extract driver standings
        driver_standings = data['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings']
        drivers = [
            {
                "position": driver["position"],
                "name": f"{driver['Driver']['givenName']} {driver['Driver']['familyName']}",
                "team": driver["Constructors"][0]["name"],
                "points": driver["points"]
            }
            for driver in driver_standings
        ]

        # Fetch constructor standings
        team_url = "https://ergast.com/api/f1/2024/constructorStandings.json"
        response = requests.get(team_url)
        response.raise_for_status()
        team_data = response.json()

        team_standings = team_data['MRData']['StandingsTable']['StandingsLists'][0]['ConstructorStandings']
        teams = [
            {
                "position": team["position"],
                "name": team["Constructor"]["name"],
                "points": team["points"]
            }
            for team in team_standings
        ]

        # Save to JSON file
        standings_data = {"drivers": drivers, "teams": teams}
        output_file = os.path.join(os.path.dirname(__file__), 'f1_standings.json')

        with open(output_file, 'w') as f:
            json.dump(standings_data, f, indent=2)

        print(f"F1 standings data saved to {output_file}")
        return standings_data

    except Exception as e:
        print(f"Error retrieving F1 standings: {str(e)}")
        return {"error": str(e)}

if __name__ == "__main__":
    get_f1_standings()
