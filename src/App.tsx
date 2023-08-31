import React, { useCallback, useRef } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, selectTodos } from "./store";
import Box from "./components/Box";
import UL from "./components/UL";

const Heading = ({ title }: { title: string }) => <h2>{title}</h2>;

function App() {
  const todos = useSelector(selectTodos);
  const newTodoRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const onAddTodo = useCallback(() => {
    if (newTodoRef.current) {
      dispatch(addTodo(newTodoRef.current.value));
      newTodoRef.current.value = "";
    }
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "50% 50%",
      }}
    >
      <Heading title="Introduction" />
      <Box>Hello there</Box>
      <Heading title="Todos" />
      <UL
        items={todos}
        itemClick={(item) => alert(item.id)}
        render={(todo) => (
          <>
            {todo.text}
            <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
          </>
        )}
      />
      <div>
        <input type="text" ref={newTodoRef} />
        <button onClick={onAddTodo}>Add Todo</button>
      </div>
    </div>
  );
}

export default App;
