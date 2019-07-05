import React from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';
import { fetchTodos } from '../actions';

class TodoList extends React.Component {
    componentDidMount() {
        this.props.fetchTodos();
    }

    renderTodos() {
        return this.props.todos.map(todo => {
            return <Todo key={todo.id} title={todo.title} description={todo.description} />;
        });
    }

    render() {
        return (
            <div className="ui container">
                <h2 className="ui header">React and Redux Todo List</h2>
                <div className="ui divider"></div>
                <div className="ui one cards">
                    {this.renderTodos()}
                </div>
                <div className="ui divider"></div>
                <div style={{ textAlign: 'right' }}>
                    <div className="ui animated fade button primary" tabIndex="0">
                        <div className="visible content">Add Todo</div>
                        <div className="hidden content">
                            <i className="icon plus" style={{ margin: 0 }}></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: Object.values(state.todos)
    }
};

export default connect(mapStateToProps, { fetchTodos })(TodoList);