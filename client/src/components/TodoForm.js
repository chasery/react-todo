import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { fetchTodo } from "../actions";

class TodoForm extends React.Component {
  componentDidMount() {
    if (this.props.editTodoId) {
      this.props.fetchTodo(this.props.editTodoId);
    }
  }
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
        <Field name="title" component={this.renderInput} label="Todo Title" />
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
  const idEval = ownProps.editTodoId ? state.todos[ownProps.editTodoId] : null;

  return {
    todo: idEval,
    initialValues: idEval
  };
};

export default connect(
  mapStateToProps,
  { fetchTodo }
)(
  reduxForm({
    form: "todoForm",
    validate,
    enableReinitialize: true
  })(TodoForm)
);
