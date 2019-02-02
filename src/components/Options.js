import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        { props.options.length === 0 && <p className="widget--message">Please Enter an option!</p>}    
        {
            props.options.map((option, index) => (
                <Option
                key={option}
                optionText={option}
                count={index + 1}
                handleRemoveOne={props.handleRemoveOne}
                />
            ))
        }
    </div>
);

export default Options;