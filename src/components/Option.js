import React from 'react'

const Option = (props) => (
    <div className="widget__body">
        
        {props.optionText && <p className="widget--option">{props.count}. {props.optionText}</p>}
        <button className="button button--link"
          onClick={(e) => {
              props.handleRemoveOne(props.optionText);
          }}
        >
        Remove
        </button>
    </div>
);

export default Option;