// Task.js
import React from 'react';
import { useDrag } from 'react-dnd';

const Task = ({ task, index }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'TASK',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={`card p-3 my-3 bg-gray-300 ${isDragging ? 'opacity-50' : ''}`}
    >
     
    </div>
  );
};

export default Task;