import React from "react";

export default class Form extends React.Component {
  onChange = (evt) => {
    const { name, value } = evt.target;
    this.props.onChangeHandler(name, value);
  };

  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.onSubmitHandler();
  };

  onHideCompleted = (evt) => {
    evt.preventDefault();
  };

  render() {
    const { toDoInput } = this.props;

    return (
      <>
        <form onSubmit={this.onSubmit}>
          <input
            placeholder="Type todo"
            type="text"
            name="toDoInput"
            value={toDoInput}
            onChange={this.onChange}
          />
          <button>Submit</button>
        </form>
        <form onSubmit={this.onHideCompleted}>
          <button>Hide Completed</button>
        </form>
      </>
    );
  }
}
