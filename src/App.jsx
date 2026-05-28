import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Active from "./pages/Active";
import Completed from "./pages/Completed";
import About from "./pages/About";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState("Low");

  useEffect(() => {
    document.title = `Tasks: ${tasks.length}`;
  }, [tasks]);

  function addTask() {
    if (newTask.trim() === "") {
      return;
    }

    const task = {
      id: Date.now(),
      text: newTask,
      completed: false,
      priority: priority
    };

    setTasks([...tasks, task]);
    setNewTask("");
    setPriority("Low");
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function toggleComplete(id) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed
        };
      }

      return task;
    });

    setTasks(updatedTasks);
  }

  function clearCompleted() {
    setTasks(tasks.filter((task) => !task.completed));
  }

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              tasks={tasks}
              newTask={newTask}
              setNewTask={setNewTask}
              priority={priority}
              setPriority={setPriority}
              addTask={addTask}
              deleteTask={deleteTask}
              toggleComplete={toggleComplete}
              clearCompleted={clearCompleted}
            />
          }
        />

        <Route
          path="/active"
          element={
            <Active
              tasks={tasks}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
            />
          }
        />

        <Route
          path="/completed"
          element={
            <Completed
              tasks={tasks}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
              clearCompleted={clearCompleted}
            />
          }
        />

        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
