import { useState } from "react";
import logo from "../Assets/listLogo.svg";
import "./Header.css";

const Header = (props) => {

    const [task, setTask] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        props.onAdd(task);
        setTask("");
    }

    return (
        <div className="headercontainer">
            <div className="header">
                <div className="img">
                    <img src={logo} width="20px" height="25px" alt="logo" />
                </div>
                <h3>To-Do-List</h3>
            </div>
            <form action="" onSubmit={submitForm}>
                <input type="text" placeholder="task" className="taskInput"
                    value={task}
                    onChange={(e) => { setTask(e.target.value) }} />
                <button type="submit" disabled={!task} className="sunmitbtn">Add</button>
            </form>

        </div>
    )
}
export default Header;