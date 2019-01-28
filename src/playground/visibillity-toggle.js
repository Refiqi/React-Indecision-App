class Visibility extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { content: '' }
    }

    handleClick() {
        this.setState((prevState) => {
            if (this.state.content) {
                return {
                    content: ''
                }
            } else {
                return {
                    content: 'This is the Hidden Content'
                }
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleClick}>{this.state.content ? 'Hide Details' : 'Show Details'}</button>
                <p>{this.state.content}</p>
            </div>
        );
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));



// let content = {
//     title: 'Visibility Toggle',
//     body: ''
// }

// const changeContent = (e) => {
    
//     content.body ? content.body = '' :
//     content.body = 'This is the Hidden Content'

//     render();
// }


// const rootApp = document.getElementById('app');


// const render = () => {
//     let template = (
//         <div>
//             <h1>{content.title}</h1>
//             <button onClick={changeContent}>{content.body ? 'Hide Details' : 'Show Details'}</button>
//             {content.body && <p>{content.body}</p>}
//         </div>
//     );
//     ReactDOM.render(template, rootApp)  
// };

// render();