// Converted Header function declaration into arrow function expression
const Header = ()=> {
    return (
        <header>
            <h1>To Do</h1>
            <span className="stats">Tasks: 1</span>
        </header>
    );
}

ReactDOM.render(
    <Header />,
    document.getElementById('root')
);