function Completed({ tasks, toggleComplete, deleteTask, clearCompleted }) {
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div>
      <h1>Completed Tasks</h1>
      <p>These are the tasks you have marked complete.</p>

      <button onClick={clearCompleted}>Clear Completed Tasks</button>

      {completedTasks.length === 0 ? (
        <p>No completed tasks yet.</p>
      ) : (
        <ul>
          {completedTasks.map((task) => (
            <li key={task.id} className="completed">
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

export default Completed;