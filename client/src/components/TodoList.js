import React from 'react';
import { connect } from 'react-redux';

import { fetchTodos } from '../actions';
import Todo from './Todo';
import Modal from './Modal';

class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = { modalIsOpen: false, modalType: '' };
    }

    componentDidMount() {
        this.props.fetchTodos();
    }

    renderTodos() {
        return this.props.todos.map(todo => {
            return <Todo key={todo.id} title={todo.title} description={todo.description} />;
        });
    }

    renderAdd() {
        return (
            <div style={{ textAlign: 'right' }}>
                <div className="ui animated fade button primary" tabIndex="0" onClick={this.addTodo}>
                    <div className="visible content">Add Todo</div>
                    <div className="hidden content">
                        <i className="icon plus" style={{ margin: 0 }}></i>
                    </div>
                </div>
            </div>
        );
    }

    addTodo = () => {
        this.setState(state => ({ modalIsOpen: !state.modalIsOpen, modalType: 'addTodo' }));
    }

    render() {
        return (
            <div className="ui container">
                <h2 className="ui header">React-Redux Todo List</h2>
                <div className="ui divider"></div>
                <div className="ui one cards">
                    {this.renderTodos()}
                </div>
                <div className="ui divider"></div>
                {this.renderAdd()}
                {this.state.modalIsOpen && this.state.modalType === 'addTodo' && 
                    <Modal title="Add Todo" content="Add Todo Test" />
                }
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