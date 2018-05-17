import React from 'react';
import Tasks from './Tasks';

export default function (props) {
  const {
    text, 
    tasks
  } = props.goal;

  return (
    <div className="w-2/3 mx-auto">
      <h2 className="mb-4">{text}</h2>
      <Tasks tasks={tasks} />
    </div>
  );
}