class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleRemoveOne = this.handleRemoveOne.bind(this);

        this.state = { options: [] }
    }


    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json); 
    
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            // if there's an error Do Nothing at all
        }

    }

    componentDidUpdate(prevProps, prevState) {

        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }


    handleRemoveAll() {
        this.setState(() => ({ options: [] }));
    }

    handleRemoveOne(optionToRemove) {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((option) =>  optionToRemove !== option)
            }
        })
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];

        alert(option);
    }

    handleAddOption(option) {

        if (!option) {
            return 'Please enter a valid Value';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'That Options Already Exist please enter a new one'
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }


    render() {
        const subtitle = 'Put your life at the hands of Computer';

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action
                  handleRemoveAll={this.handleRemoveAll}
                  handlePick={this.handlePick}
                  hasOptions={this.state.options.length > 0}
                />
                <Options options={this.state.options} handleRemoveOne={this.handleRemoveOne}/>
                <AddOptions handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}


const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision'
};

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
            What should I do?
            </button>
            <button onClick={props.handleRemoveAll}>RemoveAll</button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            { props.options.length === 0 && <p>Please Enter an option!</p>}    
            {
                props.options.map(option => (
                    <Option
                    key={option}
                    optionText={option}
                    handleRemoveOne={props.handleRemoveOne}
                    />
                ))
            }
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            
            {props.optionText}
            <button
              onClick={(e) => {
                  props.handleRemoveOne(props.optionText);
              }}
            >
            Remove
            </button>
        </div>
    );
};

class AddOptions extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { error: undefined }
    }

    handleSubmit(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option)
        this.setState(() => ({ error }));

        if (!error) {
            e.target.elements.option.value = '';
        }

    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleSubmit} >
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}


let root = document.getElementById('app');
ReactDOM.render(<IndecisionApp />, root)