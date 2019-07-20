import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

class TodoForm extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }
    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? "error" : ""}`;

        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    };

    onSubmit = formValues => {
        if (this.props.editTodoId) {
            this.props.onSubmit(formValues, this.props.editTodoId);
        } else {
            this.props.onSubmit(formValues);
        }
    };

    render() {
        return (
            <form
                className="ui form error"
                onSubmit={this.props.handleSubmit(this.onSubmit)}
            >
                <Field
                    name="title"
                    component={this.renderInput}
                    label="Todo Title"
                />
                <Field
                    name="description"
                    component={this.renderInput}
                    label="Todo Description"
                />
                <div style={{ textAlign: "right" }}>
                    <button
                        type="button"
                        className="ui button"
                        onClick={this.props.closeModal()}
                    >
                        Cancel
                    </button>
                    <button type="submit" className="ui button primary">
                        {this.props.editTodoId ? "Edit Todo" : "Add Todo"}
                    </button>
                </div>
            </form>
        );
    }
}

const validate = formValues => {
    const errors = {};

    if (!formValues.title) {
        errors.title = "Your todo requires a title.";
    }

    if (!formValues.description) {
        errors.description = "Your todo requires a description.";
    }

    return errors;
};
const mapStateToProps = (state, ownProps) => {
    return {
        initialValues: state.todos.find(todo => todo.id === ownProps.editTodoId)
    };
};

export default connect(
    mapStateToProps,
    null
)(
    reduxForm({
        form: "todoForm",
        validate,
        enableReinitialize: true
    })(TodoForm)
);
