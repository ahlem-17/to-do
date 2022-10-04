import { useState } from 'react';
import './App.css';
import { AddTask } from './components/AddTask';
import { Task } from './components/tasks';
 
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'You can add your tasks here..'

    } 
  ]);

 const addTask = (task) => {
   setTasks(prev => [task, ...prev]);
 };

 const removeTask = (taskIdToRemove) => {
  setTasks(prev => prev.filter(task =>
    (task.id !== taskIdToRemove)))
 }
  return(
    <div className="App">
    <header>
      <h1>To-Do-List</h1>
      </header>
      <main>
        <AddTask addTask={addTask}/>
        <ul className='tasks'>
     {
      tasks.map((task) => (
        <Task key={task.id} task={task}
        removeTask={removeTask} />
      ))
    } 
          
        </ul>
      </main>
    </div>
  )
}

export default App;
