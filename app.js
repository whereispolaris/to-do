// const title = React.createElement(
//     'h1',
//     { id: 'main-title', title: 'This is the title.'},
//     'My first React Element!'
// );
const title = <h1>My first React Element!</h1>;


// const desc = React.createElement(
//     'p',
//     null,
//     'I just leared how to create a react node and reder it into the DOM!'
// );
const desc = <p>I just leared how to create a react node and reder it into the DOM.</p>;

const header = React.createElement(
    'header',
    null,
    title,
    desc,
);

ReactDOM.render(
    header,
    document.getElementById('root')
);