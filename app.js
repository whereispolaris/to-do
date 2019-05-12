function Header() {
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