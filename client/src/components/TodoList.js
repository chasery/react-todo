import React from 'react';
import Todo from './Todo'

class TodoList extends React.Component {
    render() {
        return (
            <div>
                <h3>Ryan's Todo List</h3>
                <Todo />
                <Todo />
                <Todo />
            </div>
        );
    }
}

export default TodoList;