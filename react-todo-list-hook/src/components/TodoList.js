import React, { useReducer } from 'react'
import TodoItem from './TodoItem';
import reducer, {initState} from '../reducer';
import AddItem from './AddItem';

export default function TodoList() {
    const [state, dispatch] = useReducer(reducer, initState);

    const removeItem = index => dispatch({type: 'remove', payload: index})
    const addItem = item => dispatch({type: 'add', payload: item})

    const display = () => {
        return state.todoItems.map((item, index) => (<TodoItem title={item.title} key={index} id={index} remove={removeItem}/>))
    };

    return (
        <div>
            <h1>todo list</h1>
            <h2>Add todo</h2>
            <AddItem addItem={addItem}/>
            {display()}
        </div>
    )
}
