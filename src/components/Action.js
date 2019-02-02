import React from 'react'


const Action = (props) => (
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
export default Action;