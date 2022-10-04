import React from 'react';

export function Task(props) {
  const { task, removeTask } = props;

  const handleRemoveClick = () => {
    removeTask(task.id);
  };
  return(
    <li className="Task">
    <button 
      className="icon-remove"
      onClick={handleRemoveClick}
    > &times;
    </button>
     <div className="text">{task.text}</div> 
    </li>
  );
}