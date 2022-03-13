import {useState} from 'react';

const NewTaskItem = (props) => {
    const [taskName, setTaskName] = useState('');

    const inputHandler = (event) => {
        setTaskName(event.target.value);
    }

    const buttonClickHandler = (event) => {
        props.onCreateTaskItem(taskName);
    }

    return (
        <div className="newTaskItem">
            <input type="text" onChange={inputHandler}></input>
            <button onClick={buttonClickHandler}>Submit</button>
        </div>
    )
}

export default NewTaskItem;