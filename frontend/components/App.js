import React from "react";
import TodoList from "./TodoList";
import Form from "./Form";

let index = 0;
const getIndex = () => {
  return ++index;
};

const initialState = {
  toDos: [],
  toDoInput: "",
};

export default class App extends React.Component {
  state = initialState;

  onChangeHandler = (key, value) => {
    this.setState({
      ...this.state,
      [key]: value,
    });
  };

  onSubmitHandler = () => {
    this.state.toDoInput &&
      this.setState({
        ...this.state,
        toDos: [
          ...this.state.toDos,
          {
            name: this.state.toDoInput,
            id: getIndex(),
            completed: false,
          },
        ],
        toDoInput: initialState.toDoInput,
      });
  };

  completedItemHandler = (id) => {
    this.setState({
      ...this.state,
      toDos: this.state.toDos.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      }),
    });
  };

  onClearCompletedHandler = () => {
    this.setState({
      ...this.state,
      toDos: this.state.toDos.filter((todo) => {
        return todo.completed === false;
      }),
    });
  };

  render() {
    const { toDos, toDoInput } = this.state;

    return (
      <>
        <TodoList toDos={toDos} completedItemHandler={this.completedItemHandler} />
        <Form
          toDoInput={toDoInput}
          onChangeHandler={this.onChangeHandler}
          onSubmitHandler={this.onSubmitHandler}
          onClearCompletedHandler={this.onClearCompletedHandler}
        />
      </>
    );
  }
}
