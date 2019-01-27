'use strict';

var content = {
    title: 'Visibility Toggle',
    body: ''
};

var changeContent = function changeContent(e) {

    content.body ? content.body = '' : content.body = 'This is the Hidden Content';

    render();
};

var rootApp = document.getElementById('app');

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            content.title
        ),
        React.createElement(
            'button',
            { onClick: changeContent },
            content.body ? 'Hide Details' : 'Show Details'
        ),
        content.body && React.createElement(
            'p',
            null,
            content.body
        )
    );
    ReactDOM.render(template, rootApp);
};

render();
