import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Lists from './Components/List';
import Palestine from './Components/Palestine';
function App() {

  const [allTasks, setAlltasks] = useState([]);

  function addTask(task) {
    setAlltasks([ ...allTasks, task]);
  }

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
