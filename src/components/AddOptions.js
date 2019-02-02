import React from 'react'


export default class AddOptions extends React.Component {
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
                {this.state.error && <p className="option__error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleSubmit} >
                    <input className="add-option__input" type="text" name="option" />
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}