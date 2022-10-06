import React, { useState } from 'react';
import TodoForm from './TodoForm';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <h1>What is the plan for Today</h1>
      <TodoForm />
    </div>
  );
};

export default TodoList;
