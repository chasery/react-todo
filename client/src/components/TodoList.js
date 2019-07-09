import React from 'react';
import { connect } from 'react-redux';

import { fetchTodos, createTodo } from '../actions';
import Todo from './Todo';
import Modal from './Modal';
import TodoForm from './TodoForm';

class TodoList extends React.Component {
    constructor(props) {
        super(props);

        let modalType = '';
        let modalIsOpen = false;

        this.state = { modalIsOpen, modalType };
    }

    componentDidMount() {
        this.props.fetchTodos();
    }

    renderTodos() {
        return this.props.todos.map(todo => {
            return <Todo key={todo.id} title={todo.title} description={todo.description} />;
        });
    }

    renderAddTodo() {
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

    onSubmit = formValues => {
        this.props.createTodo(formValues, this.closeModal());
    }

    addTodo = () => {
        this.setState(state => ({ modalIsOpen: !state.modalIsOpen, modalType: 'addTodo' }));
    }

    closeModal = () => {
        this.setState(() => ({ modalIsOpen: false, modalType: '' }));
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
                {this.renderAddTodo()}
                {this.state.modalIsOpen && this.state.modalType === 'addTodo' && 
                    <Modal closeModal={() => this.closeModal}>
                        <div className="header">Add Todo</div>
                        <div className="content">
                            <TodoForm onSubmit={this.onSubmit} />
                        </div>
                    </Modal>
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

export default connect(mapStateToProps, { fetchTodos, createTodo })(TodoList);