// const title = React.createElement(
//     'h1',
//     { id: 'main-title', title: 'This is the title.'},
//     'My first React Element!'
// );
const title = 'My first React Element!';


// const desc = React.createElement(
//     'p',
//     null,
//     'I just leared how to create a react node and reder it into the DOM!'
// );
const desc = 'I just leared how to create a react node and reder it into the DOM.';

const myTitleID = 'main-title';
const name = 'Santi';
// const header = React.createElement(
//     'header',
//     null,
//     title,
//     desc,
// );
const header = (
    <header>
        <h1 id={myTitleID}>{name}'s first Reactl Element!</h1>
        <p className="main-desc">{desc}</p>
    </header>
);


ReactDOM.render(
    header,
    document.getElementById('root')
);