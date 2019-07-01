import React from 'react';
import TodoList from './TodoList';

class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <TodoList />
            </div>
        );
    }
}

export default App;

// Create components JSX
// Set up base redux actions
// Set up base redux reducers
// Connect json-server api to TodoList to spit out current todos
// Create an ability to add a todo
// Create an ability to remove a todo
// Create an ability to edit a todo