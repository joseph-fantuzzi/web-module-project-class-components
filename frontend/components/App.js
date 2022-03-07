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

  render() {
    const { toDos, toDoInput } = this.state;

    return (
      <>
        <TodoList toDos={toDos} />
        <Form
          toDoInput={toDoInput}
          onChangeHandler={this.onChangeHandler}
          onSubmitHandler={this.onSubmitHandler}
        />
      </>
    );
  }
}
