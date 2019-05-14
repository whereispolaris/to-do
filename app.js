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
const App = () => {
    return (
        <div className="scoreboard">
            <Header title="Scoreboard" totalPlayers={1} />
            {/* Player/Task list */}
            <Player playerName="Santi" playerScore={33}/>
            <Player playerName="Shawna" playerScore={3}/>
            <Player playerName="Ana" playerScore={333}/>
            <Player playerName="Julieta" playerScore={33}/>
        </div>
    );
}

ReactDOM.render(
    <App />,

    document.getElementById('root')
);