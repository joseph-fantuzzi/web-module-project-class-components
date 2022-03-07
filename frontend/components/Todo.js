import React from "react";

export default class Todo extends React.Component {
  render() {
    const { toDo } = this.props;

    return <div>{toDo.name}</div>;
  }
}
