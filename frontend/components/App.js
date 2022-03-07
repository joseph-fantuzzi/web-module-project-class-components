import React from "react";
import TodoList from "./TodoList";
import Form from "./Form";

let index = 0;
const getIndex = () => {
  return ++index;
};

const toDos = [
  {
    name: "",
    id: getIndex(),
    completed: false,
  },
];

const initialState = {
  toDos,
  toDoInput: "",
};

export default class App extends React.Component {
  state = initialState;

  render() {
    const { toDos, toDoInput } = this.state;

    return (
      <>
        <TodoList toDos={toDos} />
        <Form toDoInput={toDoInput} />
      </>
    );
  }
}
