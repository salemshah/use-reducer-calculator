import React, {useContext} from 'react';
import {CContext} from "../context/CounterContext";

function About(props) {
    const {state, dispatch} = useContext(CContext)
    return (
        <div>
            <h1>About</h1>
            <div>This is about page: {state.price}</div>
            <div>
                <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
                <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
            </div>
        </div>
    );
}

export default About;