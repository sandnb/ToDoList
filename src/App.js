import './App.css';
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState();
  

  const handleChange = (event) => {
    setNewTask(event.target.value);  
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    setTodoList([...todoList, task]);
    setNewTask('');
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return {...task, completed: true};
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="addTask">
        <h1>ToDo List</h1>
        <input id = "newTask" onChange={handleChange} placeholder='Add Task' value={newTask} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <div 
            className="task"
            style={{backgroundColor: task.completed ? "green" : "rgba(100, 100, 100, 0.8"}}
            >
              <li>{task.taskName}</li>
              <button onClick={() => completeTask(task.id)}>Complete</button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
            
          );
        })}
      </div>

    </div>
  );
}

export default App;
