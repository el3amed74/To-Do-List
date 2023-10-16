import { useState } from "react";
import "./List.css";

const Lists = (props) => {

    const [updateTasks, setUpdateTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);
    let tasks = props.allTasks;

    const DeleteTask = (idx) => {

        const listItems = document.querySelectorAll('.listItem');
        listItems[idx].classList.add('remove');
        setTimeout(() => {
            tasks.splice(idx, 1);
            setUpdateTasks([...updateTasks, tasks]);
        }, 250);

        completedTasks.splice(idx, 1);
        setCompletedTasks(completedTasks);
        return tasks;
    }

    const completedTask = (idx) => {

        const updatedCompletedTasks = [...completedTasks];
        updatedCompletedTasks[idx] = !updatedCompletedTasks[idx];
        setCompletedTasks(updatedCompletedTasks);
        return tasks;
    }

    const displayTasks = tasks.map((task, idx) => {
        const isCompleted = completedTasks[idx] || false;
        return (
            <li key={idx} className={`listItem ${isCompleted ? "completedTask" : ""}`}>
                <span>{task}</span>
                <div className="btns">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="deleteIcon" onClick={() => DeleteTask(idx)}>
                        <path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="completeIcone" onClick={() => completedTask(idx)}>
                        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                    </svg>
                </div>
            </li>)
    })

    return (
        <div className="listsContainer">
            {tasks.length > 0 && <h3>Tasks</h3>}
            <ul>
                {displayTasks}
            </ul>
        </div>
    )

}

export default Lists;