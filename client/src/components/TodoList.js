import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import { fetchTodos, selectTodo, createTodo, editTodo, deleteTodo } from '../actions';
import Todo from './Todo';
import Modal from './Modal';
import TodoForm from './TodoForm';

class TodoList extends React.Component {
    constructor(props) {
        super(props);

        let modalType = '';
        let modalIsOpen = false;
        let selectedTodo = null;

        this.state = { modalIsOpen, modalType, selectedTodo };
    }

    componentDidMount() {
        this.props.fetchTodos();
    }

    renderTodos() {
        return this.props.todos.map(todo => {
            return <Todo 
                key={todo.id} 
                id={todo.id} 
                title={todo.title} 
                description={todo.description} 
                onDelete={this.onDelete} 
                editTodo={this.editTodo} 
            />;
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
    onDelete = id => {
        this.props.deleteTodo(id);
    }

    addTodo = () => {
        this.setState(state => ({ modalIsOpen: !state.modalIsOpen, modalType: 'addTodo' }));
    }
    editTodo = id => {
        this.props.selectTodo(id);
        this.setState(state => ({ modalIsOpen: !state.modalIsOpen, modalType: 'editTodo' }));
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
                            <TodoForm formType="addForm" onSubmit={this.onSubmit} />
                        </div>
                    </Modal>
                }
                {this.state.modalIsOpen && this.state.modalType === 'editTodo' && 
                    <Modal closeModal={() => this.closeModal}>
                        <div className="header">Edit Todo</div>
                        <div className="content">
                            <TodoForm formType="editForm" onSubmit={this.onSubmit} initialValues={_.pick(this.props.todo, 'title', 'description')} />
                        </div>
                    </Modal>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: Object.values(state.todos),
        todo: state.todo
    }
};

export default connect(
    mapStateToProps, { 
        fetchTodos, 
        selectTodo, 
        createTodo, 
        editTodo, 
        deleteTodo 
    }
)(TodoList);