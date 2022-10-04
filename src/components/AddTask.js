import React, { useState } from 'react';
import { generateId } from '../components/utilities';

export function AddTask(props) {

  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const handleSubmit = (event) => {
   event.preventDefault();

  const task = {
    id: generateId(),
    text: text
  };

  if (text.length > 0) {
    props.addTask(task);
    setText('');
  }
}

  return(
    <form onSubmit={handleSubmit}>
      <input type="text"
      aria-label="adding new tasks.."
      placeholder="adding new tasks.."
      value={text}
      onChange={handleTextChange}
      />
      <input type="submit" value="Add"/>

    </form>
  );
}