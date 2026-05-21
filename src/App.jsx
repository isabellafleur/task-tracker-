import { useState } from "react";
import "./App.css";

function Header() {
  return (
    <>
      <h1>Task Tracker</h1>
      <p>Add and manage your tasks for the week.</p>
    </>
  );
}

function TaskForm({ newTask, setNewTask, addTask }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter a new task"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}

function TaskList({ tasks, toggleComplete, deleteTask }) {
  if (tasks.length === 0) {
    return <p>No tasks yet. Add one above!</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className={task.completed ? "completed" : ""}>
          <span onClick={() => toggleComplete(task.id)}>{task.text}</span>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const completedTasks = tasks.filter((task) => task.completed).length;

  function addTask() {
    if (newTask.trim() === "") {
      return;
    }

    const task = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };

    setTasks([...tasks, task]);
    setNewTask("");
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function toggleComplete(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <div className="container">
      <Header />

      <TaskForm
        newTask={newTask}
        setNewTask={setNewTask}
        addTask={addTask}
      />

      <p>Total Tasks: {tasks.length}</p>
      <p>Completed Tasks: {completedTasks}</p>

      <TaskList
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;