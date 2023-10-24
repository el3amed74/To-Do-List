import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Lists from './Components/List';
import Palestine from './Components/Palestine';
function App() {

  const [allTasks, setAlltasks] = useState(Object.values(localStorage));
  function addTask(task) {

    setAlltasks([...allTasks, task]);
    localStorage.clear();
  }
  return (
    <>
      <Palestine />
      <div className="AppContainer">
        <div className="App">
          <Header onAdd={addTask} />
          {localStorage.length > 0 ? <Lists allTasks={Object.values(localStorage)}/> : <Lists allTasks={allTasks} />}
          {/* <Lists allTasks={allTasks} /> */}
        </div>
      </div>
    </>
  );
}

export default App;
