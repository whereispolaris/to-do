const title = React.createElement(
    'h1',
    { id: 'main-title', title: 'This is the title.'},
    'My first React Element!'
);

ReactDOM.render(
    title,
    document.getElementById('root')
);