const fs = require('fs');
const filePath = 'matchHistory.json';

// Load existing match history or create an empty array if the file doesn't exist
let matchHistory = [];
try {
    matchHistory = JSON.parse(fs.readFileSync(filePath, 'utf8'));
} catch (error) {
    console.log("No existing match history found. Creating a new one.");
}

// Function to add a new match
function addMatch(blueTeam, orangeTeam, winningTeam, mvp) {
    const lastMatch = matchHistory.length > 0 ? matchHistory[matchHistory.length - 1] : null;
    const newMatchNum = lastMatch ? lastMatch.MatchNum + 1 : 0;

    const newMatch = {
        MatchNum: newMatchNum,
        BlueTeam: blueTeam,
        OrangeTeam: orangeTeam,
        WinningTeam: winningTeam, // 1 = Blue, 2 = Orange
        MVP: mvp
    };

    matchHistory.push(newMatch);

    // Save to JSON file
    fs.writeFileSync(filePath, JSON.stringify(matchHistory, null, 4), 'utf8');
    console.log(`Match ${newMatchNum} added successfully!`);
}

// Function to get match history (used in HTML)
function getMatchHistory() {
    return matchHistory;
}

module.exports = { addMatch, getMatchHistory };