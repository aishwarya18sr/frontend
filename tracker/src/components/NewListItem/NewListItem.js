import './NewListItem.css';
import {useState} from 'react';
const NewListItem = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDescription, setEnteredDescription] = useState('');
    const [enteredHours, setEnteredHours] = useState('');
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const descriptionChangeHandler = (event) => {
        setEnteredDescription(event.target.value);
    }

    const hoursChangeHandler = (event) => {
        setEnteredHours(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const newTitle = enteredTitle;
        const newDescription = enteredDescription;
        const newHours = parseInt(enteredHours);
        const newListItem = {
            title : newTitle,
            description: newDescription,
            hours: newHours,
        }
        props.onAddNewItem(newListItem);
        setEnteredTitle("");
        setEnteredDescription("");
        setEnteredHours("");
    }
    return (
        <div className='addNewList'>
            <form  onSubmit={submitHandler}>
                <div className='inputField'>
                    <label>Title</label><br></br>
                    <input value={enteredTitle} onChange={titleChangeHandler} type="text"></input>
                </div>
                <div className='inputField'>
                    <label>Decsription</label><br></br>
                    <input value={enteredDescription} onChange={descriptionChangeHandler} type="text"></input>
                </div>
                <div className='inputField'>
                    <label>Required number of hours</label><br></br>
                    <input value={enteredHours} onChange={hoursChangeHandler} type="text"></input>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewListItem;