import React, { Fragment } from "react";
import { connect } from "react-redux";

import {
    fetchTodos,
    createTodo,
    editTodo,
    completeTodo,
    deleteTodo
} from "../actions";
import Todo from "./Todo";
import Modal from "./Modal";
import TodoForm from "./TodoForm";
import { filterList } from "../selectors";

class TodoList extends React.Component {
    constructor(props) {
        super(props);

        let modalType = "";
        let modalIsOpen = false;
        let editTodoId = null;
        let listData = [];

        this.state = { modalIsOpen, modalType, editTodoId, listData };
    }

    componentDidMount() {
        this.props.fetchTodos();
    }

    renderList(listData) {
        if (this.props.todos) {
            return listData.map((todo, index) => {
                return (
                    <Todo
                        key={index}
                        id={todo.id}
                        currentStatus={todo.currentStatus}
                        title={todo.title}
                        description={todo.description}
                        onDelete={this.onDelete}
                        editTodo={this.editTodo}
                        onComplete={this.onComplete}
                    />
                );
            });
        }
        return <div>Loading...</div>;
    }

    renderAddTodo() {
        return (
            <div style={{ float: "right" }}>
                <div
                    className="ui animated fade button primary"
                    tabIndex="0"
                    onClick={this.addTodo}
                >
                    <div className="visible content">Add Todo</div>
                    <div className="hidden content">
                        <i className="icon plus" style={{ margin: 0 }} />
                    </div>
                </div>
            </div>
        );
    }

    // Todo action handling
    onSubmit = (formValues, id) => {
        if (id) {
            this.props.editTodo(id, formValues);
        } else {
            this.props.createTodo(formValues);
        }
        this.closeModal();
    };
    onDelete = id => {
        this.props.deleteTodo(id);
    };
    onComplete = id => {
        this.props.completeTodo(id);
    };

    // Local state modal management
    addTodo = () => {
        this.setState(state => ({
            modalIsOpen: !state.modalIsOpen,
            modalType: "addTodo"
        }));
    };
    editTodo = id => {
        this.setState(state => ({
            modalIsOpen: !state.modalIsOpen,
            modalType: "editTodo",
            editTodoId: id
        }));
    };
    closeModal = () => {
        this.setState(() => ({ modalIsOpen: false, modalType: "" }));
    };

    render() {
        return (
            <Fragment>
                {this.renderAddTodo()}
                <h3 className="ui header">Todos</h3>
                <div className="ui divider" />
                <div className="ui one cards">
                    {this.renderList(this.props.todos)}
                </div>

                {this.state.modalIsOpen && this.state.modalType === "addTodo" && (
                    <Modal closeModal={() => this.closeModal}>
                        <div className="header">Add Todo</div>
                        <div className="content">
                            <TodoForm
                                onSubmit={this.onSubmit}
                                closeModal={() => this.closeModal}
                            />
                        </div>
                    </Modal>
                )}
                {this.state.modalIsOpen && this.state.modalType === "editTodo" && (
                    <Modal closeModal={() => this.closeModal}>
                        <div className="header">Edit Todo</div>
                        <div className="content">
                            <TodoForm
                                onSubmit={this.onSubmit}
                                closeModal={() => this.closeModal}
                                editTodoId={this.state.editTodoId}
                            />
                        </div>
                    </Modal>
                )}
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        todos: filterList(state.todos)
    };
};

export default connect(
    mapStateToProps,
    {
        fetchTodos,
        createTodo,
        editTodo,
        completeTodo,
        deleteTodo
    }
)(TodoList);
