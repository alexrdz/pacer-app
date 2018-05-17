import React from 'react';
import Task from './Task';

export default function (props) {
  const {tasks} = props;
  let allTasks;

  if (tasks) {
    allTasks = tasks.map(task => <Task key={task.value.taskName} task={task} />);
  }
  return (
    <ul className="list-reset">
      {allTasks}
    </ul>
  );
}