import React, {useContext} from 'react';
import {CContext} from "../context/CounterContext";

function Products(props) {
    const {state, dispatch} = useContext(CContext);
    return (
        <div>
            <h1>Products</h1>
            This is product page: {state.price}
            <div>
                <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
                <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
            </div>
        </div>
    );
}

export default Products;