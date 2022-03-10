import './NewListItem.css';
import {useState} from 'react';
const NewListItem = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDescription, setEnteredDescription] = useState('');
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const descriptionChangeHandler = (event) => {
        setEnteredDescription(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const newTitle = enteredTitle;
        const newDescription = enteredDescription;
        const newListItem = {
            title : newTitle,
            description: newDescription,
        }
        props.onAddNewItem(newListItem);
        setEnteredTitle("");
        setEnteredDescription("");
    }
    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Title</label>
                <input value={enteredTitle} onChange={titleChangeHandler} type="text"></input>
            </div>
            <div>
                <label>Decsription</label>
                <input value={enteredDescription} onChange={descriptionChangeHandler} type="text"></input>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default NewListItem;