import React, { useState } from 'react';

const TodoForm = () => {
  const [input, setInput] = useState('');
  return (
    <form className="todo-form">
      <input type="text" placeholder="Add a todo" value={input} />
    </form>
  );
};

export default TodoForm;
