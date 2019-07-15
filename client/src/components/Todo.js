import React from "react";

const Todo = props => {
  const { id, title, description, onDelete, editTodo, onComplete } = props;

  return (
    <div className="ui raised card">
      <div className="content">
        <h4 className="ui header">{title}</h4>
        <div className="description">{description}</div>
      </div>
      <div className="extra content">
        <div className="right floated">
          <div
            className="ui animated fade tiny button basic red"
            tabIndex="0"
            onClick={() => onDelete(id)}
          >
            <div className="visible content">Delete</div>
            <div className="hidden content">
              <i
                className="icon trash alternate outline"
                style={{ margin: 0 }}
              />
            </div>
          </div>
          <div
            className="ui animated fade tiny button basic"
            tabIndex="0"
            onClick={() => editTodo(id)}
          >
            <div className="visible content">Edit</div>
            <div className="hidden content">
              <i className="icon edit outline" style={{ margin: 0 }} />
            </div>
          </div>
          <div
            className="ui animated fade tiny button basic green"
            tabIndex="0"
            onClick={() => onComplete(id)}
          >
            <div className="visible content">Complete</div>
            <div className="hidden content">
              <i className="icon check" style={{ margin: 0 }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
