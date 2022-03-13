import {useState} from 'react';

const NewListItem = (props) => {
    const [listName, setListName] = useState('');

    const inputHandler = (event) => {
        setListName(event.target.value);
    }

    const buttonClickHandler = (event) => {
        props.addListItem(listName);
    }

    return (
        <div className="newListItem">
            <input type="text" onChange={inputHandler}></input>
            <button onClick={buttonClickHandler}>Submit</button>
        </div>
    )
}

export default NewListItem;