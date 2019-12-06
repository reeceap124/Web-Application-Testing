import React from 'react';


export const Dashboard = (props) => {
    
    
    
    const ballHandler = () => {
        if (props.balls < 4) {
            props.setBalls(props.balls + 1)
        } else {
            props.setBalls(0)
        }
    }
    const strikeHandler = () => {
        
          if (props.strikes < 3) {
            props.setStrikes(props.strikes + 1)
        } else {
            props.setStrikes(0)
        }  
        
    }
    return (
        
        <div>
            <button onClick={ballHandler} data-testid='ballBtn'>Ball</button>
            <button onClick={strikeHandler} data-testid='strikeBtn'>Strike</button>
            
            <button>Foul</button>
            <button>Hit</button>
        </div>
    )
}