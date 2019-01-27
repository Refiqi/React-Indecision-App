
let content = {
    title: 'Visibility Toggle',
    body: ''
}

const changeContent = (e) => {
    
    content.body ? content.body = '' :
    content.body = 'This is the Hidden Content'

    render();
}


const rootApp = document.getElementById('app');


const render = () => {
    let template = (
        <div>
            <h1>{content.title}</h1>
            <button onClick={changeContent}>{content.body ? 'Hide Details' : 'Show Details'}</button>
            {content.body && <p>{content.body}</p>}
        </div>
    );
    ReactDOM.render(template, rootApp)  
};

render();