import React from 'react';

import TodoItem from './TodoItem';

export default function TodoList({ todoItems, onClick }) {
  const isArrayEmpty = (arr) => (Array.isArray(arr) && arr.length === 0);

  if (isArrayEmpty(todoItems)) {
    return (
      <div>할 일이 없어요!</div>
    );
  }

  return (
    <ul>
      {todoItems.map(({ id, todoText }, index) => (
        <TodoItem
          key={id}
          id={id}
          index={Number(index) + 1}
          todoText={todoText}
          onClick={onClick}
        />
      ))}
    </ul>
  );
}
