import React, {createContext, useReducer, useEffect} from 'react';

export const CContext = createContext(null);

const initialState = {price: 0};


function getDataFromLocalStorage() {
    return localStorage.getItem('counter')
        ? JSON.parse(localStorage.getItem('counter'))
        : initialState
}

function setDataToLocalStorage(data) {
    return localStorage.setItem('counter', JSON.stringify(data));
}

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            // console.log('return', {price: state.price + 1})
            // console.log("action", action)
            return {price: state.price + 1};
        case 'decrement':
            // console.log('return', {price: state.price - 1})
            // console.log("action", action)
            return {price: state.price - 1};
        default:
            return initialState;
    }
}


function CounterContext({children, initialCount}) {
    const [state, dispatch] = useReducer(reducer, getDataFromLocalStorage());
    useEffect(() => {
        setDataToLocalStorage(state)
    }, [state])

    return (
        <CContext.Provider value={{state, dispatch, initialCount}}>
            {children}
        </CContext.Provider>
    );
}

export default CounterContext;