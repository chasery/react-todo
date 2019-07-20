import React from "react";
import TodoList from "./TodoList";

class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <h2 className="header">React-Redux Todo List</h2>
                <div className="ui divider" />
                <TodoList todoData={this.props.todos} />
            </div>
        );
    }
}

export default App;
