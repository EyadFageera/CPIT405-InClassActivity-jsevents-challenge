const nbaTeams = {
    won: [
        "Boston Celtics",
        "Los Angeles Lakers",
        "Golden State Warriors",
        "Chicago Bulls",
        "San Antonio Spurs",
        "Philadelphia 76ers",
        "Detroit Pistons",
        "Miami Heat",
        "Milwaukee Bucks",
        "Houston Rockets",
        "New York Knicks",
        "Toronto Raptors",
        "Cleveland Cavaliers",
        "Dallas Mavericks",
        "Portland Trail Blazers",
        "Washington Wizards",
        "Seattle SuperSonics",
        "Atlanta Hawks",
        "Sacramento Kings",
        "Denver Nuggets"
    ],
    neverWon: [
        "Phoenix Suns",
        "Utah Jazz",
        "Brooklyn Nets",
        "Orlando Magic",
        "Indiana Pacers",
        "Charlotte Hornets",
        "Minnesota Timberwolves",
        "Memphis Grizzlies",
        "New Orleans Pelicans",
        "Los Angeles Clippers",
        "Oklahoma City Thunder"
    ]
};


let team_in = document.getElementById("teamInput");
let startButton = document.getElementById("startButton");
let timerDisplay = document.getElementById("timer");
let statusDisplay = document.getElementById("status");
let wonTableBody = document.getElementById("wonTableBody");
let neverWonTableBody = document.getElementById("neverWonTableBody");

let wonCount = 0;
let neverWonCount = 0;
let timeLeft = 30;
let timer;

startButton.addEventListener("click", start);

function start() {
    wonCount = 0;
    neverWonCount = 0;
    timeLeft = 30;
    teamInput.disabled = false;
    
    wonTableBody.innerHTML = '';
    neverWonTableBody.innerHTML = '';
    timer = setInterval(countdown, 1000);

    team_in.addEventListener("keyup", function handleInput(e) {
        if (e.key === 'Enter') {
            let team = team_in.value;
            if (nbaTeams.won.includes(team)) {
                if (wonCount < 3) {
                    wonCount++;
                    addTeamToTable(team, wonTableBody);
                }
            } else if (nbaTeams.neverWon.includes(team)) {
                if (neverWonCount < 3) {
                    neverWonCount++;
                    addTeamToTable(team, neverWonTableBody);
                }
            } else {
                alert(`${team} is not a valid NBA team`);
            }
            if (wonCount >= 3 && neverWonCount >= 3) {
                end();
            }
        }
    }
);
}
function countdown() {
    timeLeft--;
    timerDisplay.textContent = `Time left: ${timeLeft}s`;

    if (timeLeft <= 0) {
        end();
    }
}

function addTeamToTable(team, table) {
    let row = table.insertRow();
    row.insertCell(0).innerText = team;
}

function end() {
    clearInterval(timer);
    teamInput.disabled = true;
    statusDisplay.textContent = `Quiz over. You entered ${wonCount} teams that have won and ${neverWonCount} teams that have never won.`;
    timerDisplay.textContent = 'Time left: 0s';
}
