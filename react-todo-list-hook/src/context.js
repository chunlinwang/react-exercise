import React, {useReducer, createContext} from 'react'
import reducer, {initState} from './reducer';

const Context = new createContext();

export default function Provider(props) {
    const [todoListState] = useReducer(reducer, initState);

    return (
        <Context.Provider value={todoListState}>
            <h1>Provider</h1>
            {props.children}
        </Context.Provider>
    )
}
