import { useState } from "react";

function TodoList() {
  const [newTask, setNewTask] = useState("");
  const [todoList, setTodoList] = useState([
    { id: 1, taskName: "Do Homework", isCompleted: false },
    { id: 2, taskName: "Clean Room", isCompleted: false },
    { id: 3, taskName: "Take Out Chicken", isCompleted: false },
  ]);

  function addTask() {
    const lastId = todoList[todoList.length - 1].id;
    setTodoList((prev) => [
      ...prev,
      { id: lastId + 1, taskName: newTask, isCompleted: false },
    ]);
    setNewTask("");
  }

  function deleteTask(id) {
    setTodoList((prev) => prev.filter((task) => task.id !== id));
  }

  function completeTask(id) {
    setTodoList((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isCompleted: true } : task
      )
    );
  }

  return (
    <div>
      <h2>Todo List </h2>

      <input
        type="text"
        placeholder="New task..."
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
      />
      <button onClick={addTask} disabled={!newTask}>
        Add Task
      </button>

      <ul>
        {todoList.map((task, key) => (
          <li key={key}>
            {" "}
            {task.taskName}
            <p>Task Completed: {task.isCompleted ? "Yes" : "No"}</p>
            <button onClick={() => completeTask(task.id)}>Complete Task</button>
            <button onClick={() => deleteTask(task.id)}> Delete </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
