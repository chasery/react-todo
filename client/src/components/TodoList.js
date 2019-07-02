import React from 'react';
import Todo from './Todo'

class TodoList extends React.Component {
    render() {
        return (
            <div className="ui container">
                <h2 className="ui header">React and Redux Todo List</h2>
                <div class="ui divider"></div>
                <div className="ui one cards">
                    <Todo title="Run DJ Roomba" description="Empty the bin once DJ Roomba is full." />
                    <Todo title="Run DJ Roomba" description="Empty the bin once DJ Roomba is full." />
                    <Todo title="Run DJ Roomba" description="Empty the bin once DJ Roomba is full." />
                </div>
            </div>
        );
    }
}

export default TodoList;