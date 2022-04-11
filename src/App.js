import Header from "./components/Header";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Tasks from "./components/Tasks";
import AddTask from "./AddTask";
import Footer from "./Footer";
// import About from "./About";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchtasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);
  const fetchtasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = res.json();
    console.log(data);
    return data
  };
  const fetchtask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = res.json();
    console.log(data);
    return data
  };
  // state gets passed down, actions get passed above
  // Add Task
  const addTask = async(task) => {
    // const id = Math.floor(Math.random() * 10000 + 1);
    // const newtask = { id, ...task };
    // setTasks([...tasks, newtask]);
    const res = await fetch("http://localhost:5000/tasks",{
      method : "POST",
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const data = await res.json()
    setTasks([...tasks,data])
  };
  // Delete tasks
  const onDelete = async(id) => {
    fetch(`http://localhost:5000/tasks/${id}`,{method:'DELETE'}) 
    setTasks(tasks.filter((task) => task.id !== id));
  };
  // toggle reminder

  const toggleReminder = async(id) => {

    const taskToToggle = await fetchtask(id)
    const updateTask = {...tasks, reminder : !taskToToggle.reminder}
    const res = await fetch(`http://localhost:5000/tasks/${id}`,
    {
      method:'PUT',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(updateTask)
    })
    const data = await res.json()
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdds={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      <p>
        <i>Double click on Task to Toggle the Reminder!</i>
      </p>
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={onDelete} onToggle={toggleReminder} />
      ) : (
        <p>No Tasks to Show</p>
      )}
      
      <Footer></Footer>
    </div>
  );
}

export default App;
