function Active({ tasks, toggleComplete, deleteTask }) {
  const activeTasks = tasks.filter((task) => !task.completed);

  return (
    <div>
      <h1>Active Tasks</h1>
      <p>These are the tasks that are not completed yet.</p>

      {activeTasks.length === 0 ? (
        <p>No active tasks yet.</p>
      ) : (
        <ul>
          {activeTasks.map((task) => (
            <li key={task.id}>
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

export default Active;