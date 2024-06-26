import {useEffect, useState} from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";
import {useNavigate} from "react-router-dom";

export default function List() {
  const navigate = useNavigate();

  function goToNewPage() {
    navigate(-1);
  }

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (tasks.length === 0)
      return;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    setTasks(tasks);
  }, []);

  function addTask(name) {
    setTasks(prev => {
      return [...prev, {name: name, done: false}];
    });
  }

  function removeTask(indexToRemove) {
    setTasks(prev => {
      return prev.filter((taskObject, index) => index !== indexToRemove);
    });
  }

  function updateTaskDone(taskIndex, newDone) {
    setTasks(prev => {
      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    });
  }

  const numberComplete = tasks.filter(t => t.done).length;
  const numberTotal = tasks.length;

  function getMessage() {
    const percentage = numberComplete / numberTotal * 100;
    switch (percentage) {
      case 0:
        return "Let's get it started! 🔥";
      case 50:
        return "Almost there! 😊";
      case 100:
        return "Great job! 🎉";
      default:
        return "Keep it going! 🫡";
    }
  }

  function renameTask(index, newName) {
    setTasks(prev => {
      const newTasks = [...prev];
      newTasks[index].name = newName
      return newTasks;
    });
  }

  return (
    <main>
      <div>
        <button className="navigation-btn" onClick={() => goToNewPage()}>go back</button>
      </div>
      <h1>{numberComplete}/{numberTotal} Complete</h1>
      <h2>{getMessage()}</h2>
      <TaskForm onAdd={addTask}/>
      {tasks.map((task, index) => (
        <Task {...task}
              onRename={newName => renameTask(index, newName)}
              onTrash={() => removeTask(index)}
              onToggle={done => updateTaskDone(index, done)}/>
      ))}
    </main>
  );
}
