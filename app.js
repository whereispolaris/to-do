const players = [
    {
        name: "Santi",
        score: 50
      },
      {
        name: "Shawna",
        score: 85
      },
      {
        name: "Ashley",
        score: 95
      },
      {
        name: "James",
        score: 80
      }
];

// Converted Header function declaration into arrow function expression
const Header = (props)=> {
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
        </header>
    );
}

// Player component will be changed to Task
const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                {props.playerName}
            </span>
        <Counter playerScore={props.playerScore}/>
        </div>
    );
}

const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">{props.playerScore}</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
}

//Scoreboard will be changed to Taskboard
const App = (props) => {
    return (
        <div className="scoreboard">
            <Header title="Scoreboard" totalPlayers={props.initialPlayers.length} />
            {/* Player/Task list */}
            {props.initialPlayers.map( player =>
                <Player 
                    playerName={player.name}
                    playerScore={player.score}
                />

            )}
        </div>
    );
}

ReactDOM.render(
    <App initialPlayers={players}/>,

    document.getElementById('root')
);