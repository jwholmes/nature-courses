import React from 'react';

export const Seventies = () => (
    <div>
        <button>70s</button>
    </div>
)

export const Eighties = (props) => (
    <div>
        <button onClick={props.handlePick}>80s</button>
    </div>
)