import React from 'react';
import Option from './Option';

const Options = (props) => (
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

export default Options;