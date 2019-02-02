import React from 'react'


const Action = (props) => (
    <div>
        <button className="big-button"
            onClick={props.handlePick}
            disabled={!props.hasOptions}
        >
        What should I do?
        </button>
        <div className="widget-header">
            <h3 className="widget--head3">Your Option</h3>
            <button className="button button--link" onClick={props.handleRemoveAll}>RemoveAll</button>
        </div>
    </div>
);
export default Action;