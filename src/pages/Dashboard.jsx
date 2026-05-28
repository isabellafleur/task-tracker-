function Dashboard({
  tasks,
  newTask,
  setNewTask,
  priority,
  setPriority,
  addTask,
  deleteTask,
  toggleComplete,
  clearCompleted
}) {
  const activeTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div>
      <h1>Task Tracker Dashboard</h1>
      <p>Add and manage your tasks for the week.</p>

      <div className="stats">
        <p>Total Tasks: {tasks.length}</p>
        <p>Active Tasks: {activeTasks.length}</p>
        <p>Completed Tasks: {completedTasks.length}</p>
      </div>

      <input
        type="text"
        placeholder="Enter a new task"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
      />

      <select
        value={priority}
        onChange={(event) => setPriority(event.target.value)}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <button onClick={addTask}>Add Task</button>
      <button onClick={clearCompleted}>Clear Completed Tasks</button>

      <h2>All Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks yet. Add one above!</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className={task.completed ? "completed" : ""}>
              <span onClick={() => toggleComplete(task.id)}>
                {task.text} - {task.priority} Priority
              </span>

              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dashboard;
