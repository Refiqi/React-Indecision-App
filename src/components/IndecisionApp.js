import React from 'react';
import AddOptions from './AddOptions';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal'


export default class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleRemoveOne = this.handleRemoveOne.bind(this);
        this.closeModal = this.closeModal.bind(this);

        this.state = { options: [], selectedOption: undefined }
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

    closeModal() {
        this.setState(() => ({ selectedOption: undefined }))
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

        this.setState(() => ({ selectedOption: option }))
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
                <OptionModal selectedOption={this.state.selectedOption} closeModal={this.closeModal} />
            </div>
        );
    }
}
