import TodoForm from "../TodoForm";
import TodoList from "../TodoList";
import { useState } from "react";

const TodoContainer = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "첫번째 할일",
      content: "첫번째 할일 입력해주세요!!",
      isDone: false,
    },
    {
      id: 2,
      title: "두번째 할일",
      content: "두번째 할일을 입력해주세요",
      isDone: true,
    },
  ]);
  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <section>
      <TodoForm setTodos={setTodos} />
      <TodoList title="Working" todos={workingTodos} setTodos={setTodos} />
      <TodoList title="Done" todos={doneTodos} setTodos={setTodos} />
    </section>
  );
};

export default TodoContainer;
