class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {options: []}
    }

    handleRemoveAll() {
        this.setState(() => {
            return { options: [] }
        });
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

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        });
    }

    render() {
        const title = 'Indecision App';
        const subtitle = 'Put your life at the hands of Computer';

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action
                  handleRemoveAll={this.handleRemoveAll}
                  handlePick={this.handlePick}
                  hasOptions={this.state.options.length > 0}
                />
                <Options options={this.state.options}/>
                <AddOptions handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
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
        {
            props.options.map(option => <Option key={option} optionText={option} />)
        }
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            {props.optionText}
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
        e.target.elements.option.value = '';
        this.setState(() => {
            return { error };
        });

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