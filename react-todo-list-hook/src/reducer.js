export const initState = 
    {
        todoItems: [
            {title: "item 1"},
            {title: "item 2"},
        ]
    };

const reducer = (state = initState, {type, payload} ) => {
    console.log(state, type, payload)
    switch(type) {
        case 'add':
            return {todoItems: [...state.todoItems, payload]};
        case 'remove':
            console.log({todoItems: state.todoItems.splice(payload, 1)});
            return {todoItems: state.todoItems.splice(payload, 1)};
        default:
            console.log(state);
            return state;
    }
}

export default reducer;