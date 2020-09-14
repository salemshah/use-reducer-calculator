import React, {useContext} from 'react';
import {CContext} from "../context/CounterContext";

function Home(props) {
    const {state, dispatch} = useContext(CContext);
    return (
        <div>
            <h1>Home</h1>
            This is Home page: {state.price}
            <div>
                <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
                <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
            </div>
        </div>
    );
}

export default Home;