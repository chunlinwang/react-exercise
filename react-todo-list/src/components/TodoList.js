import React, { Component } from 'react'
import AddItem from './AddItem'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    state = {
        todoList: [
            '1',
            '2',
        ]
    }

    add = value => {
        this.setState({todoList: [...this.state.todoList, value]});
    }

    deleteItem = index => {
        const todoList = this.state.todoList;
        todoList.splice(index, 1);
        this.setState({todoList: todoList});
    }
    
    render() {
        return (
            <ul className="TodoList">
                <AddItem addItemHandle={this.add}/>
                {this.state.todoList.map((item, key) => <TodoItem text={item} key={key} index={key} deleteHandle={this.deleteItem} />)}
            </ul>
        )
    }
}
