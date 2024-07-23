const heading = React.createElement(
    'div', 
     {id:'parent'},
    React.createElement('div',{id:'child'},
    [React.createElement('h1',{}, 'hello'), React.createElement('h1',{}, 'world')]
    )
);

ReactDOM.render(heading, document.getElementById('root'));
