import React, {useContext} from 'react';
import {CContext} from "../context/CounterContext";

function Contact(props) {
    const {state, dispatch} = useContext(CContext)
    return (
        <div>
            <h1>Contact</h1>
            This is contact page: {state.price}
            <div>
                <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
                <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
            </div>
        </div>
    );
}

export default Contact;