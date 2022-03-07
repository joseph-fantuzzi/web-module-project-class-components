import React from "react";

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
    return <div>Todo App</div>;
  }
}
