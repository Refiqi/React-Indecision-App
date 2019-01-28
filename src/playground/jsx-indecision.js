
let app = {
    title: 'Indecision App',
    subtitle: 'Put Your life in the hands of Computer',
    options: []
};

const onFormSubmit = (e) =>{
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApps();
    }
}

const reset = () =>{
    app.options = [];
    renderApps();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];

    alert(option);
}

let appRoot = document.getElementById('app');


const renderApps = () => {

    let template = (
    
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {app.options.length > 0 ? "Here's your list" : "No Options"}<br />
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do?</button>
            <button onClick={reset}>Remove All</button>
            <ol>
                {
                    app.options.map(option => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>        
        </div>
    );
    ReactDOM.render(template, appRoot);

}

renderApps();