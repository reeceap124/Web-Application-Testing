import React from 'react';

export const Display = (props) => {
    return (
        <div>
            <p>Balls: {props.balls}</p>
            <p>Strikes: {props.strikes}</p>
        </div>
    )
}