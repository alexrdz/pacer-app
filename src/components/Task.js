import React from 'react';

export default function (props) {
  const {
    taskName,
    completed,
    timer
  } = props.task.value;
  let classes = !!completed ? 'border-grey-dark bg-grey' : 'border-grey-light';
  const handleCheck = () => {
    console.log('check');
    classes = 'border-grey-dark bg-grey';
  }

  return (
    <li className="flex justify-between mb-8">
      <span className="w-2/3">
        {taskName}
      </span> - 
      <span 
        onClick={handleCheck}
        role="checkbox"
        aria-checked={!!completed}
        className={`w-8 h-8 border ${classes}`} />
    </li>
  );
}