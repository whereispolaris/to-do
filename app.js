// Converted Header function declaration into arrow function expression
const Header = ()=> {
    return (
        <header>
            <h1>To Do</h1>
            <span className="stats">Tasks: 1</span>
        </header>
    );
}

// Player component will be changed to Task
const Player = () => {
    return (
        <div className="player">
            <span className="player-name">
                Santi
            </span>
        <Counter />
        </div>
    );
}

const Counter = () => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">35</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
}

//Scoreboard will be changed to Taskboard
const App = () => {
    return (
        <div className="scoreboard">
            <Header />
            {/* Player/Task list */}
            <Player />
        </div>
    );
}

ReactDOM.render(
    <App />,

    document.getElementById('root')
);