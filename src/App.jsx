import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Lists from './Components/List';
import Palestine from './Components/Palestine';
function App() {

  const [allTasks, setAlltasks] = useState([]);

  function addTask(task) {

    let todoArray=[...allTasks];
    todoArray.push(task);
    setAlltasks(todoArray);
    localStorage.setItem("ToDoList",JSON.stringify(todoArray));
  }
  useEffect(()=>{
    if (localStorage.getItem('ToDoList')) {
      let tasks= JSON.parse(localStorage.getItem('ToDoList'));
      setAlltasks(tasks);
    }
  },[])
  return (
    <>
      <Palestine />
      <div className="AppContainer">
        <div className="App">
          <Header onAdd={addTask} />
          <Lists allTasks={allTasks} />
        </div>
      </div>
    </>
  );
}

export default App;
