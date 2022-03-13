import {useState} from 'react';

const EditTaskItem = (props) => {
    const [taskName, setTaskName] = useState('');

    const inputHandler = (event) => {
        setTaskName(event.target.value);
    }

    const buttonClickHandler = (event) => {
        props.onEditTaskItem(taskName);
    }

    return (
        <div className="editTaskItem">
            <input type="text" value={props.title} onChange={inputHandler}></input>
            <button onClick={buttonClickHandler}>Submit</button>
        </div>
    )
}

export default EditTaskItem;